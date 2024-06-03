// hooks/useWeather.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  name: string;
}

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const apiKey = 'YOUR_OPENWEATHER_API_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const { data } = await axios.get(url);
  return data;
};

export const useWeather = (city: string) => {
  return useQuery<WeatherData, Error>({
    queryKey: ['weather', city],
    queryFn: () => fetchWeather(city),
    enabled: Boolean(city),
  });
};
