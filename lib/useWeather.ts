// useWeather.ts
export interface WeatherData {
  main: {
    temp: string;
    temp_max: string;
    temp_min: string;
    humidity: string;
  };
  wind: {
    speed: string;
  };
  weather: {
    icon: string;
    description: string;
  };
  name: string;
}

async function getWeather(city: string): Promise<WeatherData | null> {
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6ea0397509954831af02a3a4b702ff4&units=metric`;
  try {
    const resp = await fetch(url, {
      method: 'GET',
    });
    const result = await resp.json();
    if (resp.status === 200) {
      console.log('Success :', result);
      return {
        main: {
          temp: result.main.temp,
          temp_max: result.main.temp_max,
          temp_min: result.main.temp_min,
          humidity: result.main.humidity,
        },
        wind: {
          speed: result.wind.speed,
        },
        weather: {
          icon: "http://openweathermap.org/img/w/" + result.weather[0].icon + '.png',
          description: result.weather[0].description,
        },
        name: result.name,
      };
    }
    return null;
  } catch (error) {
    console.log(`ERROR: ${error}`);
    return null;
  }
}

export { getWeather };
