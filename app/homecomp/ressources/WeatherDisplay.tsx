interface WeatherDisplayProps {
    weather: {
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
    };
  }
  
  export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
    if (!weather) return null;
  
    const { main, wind, weather: weatherDetails, name } = weather;
  
    return (
      <div className="mt-10 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex items-center">
          <img
            src={`http://openweathermap.org/img/wn/${weatherDetails[0].icon}.png`}
            alt="weather icon"
            className="w-16 h-16"
          />
          <div className="ml-4">
            <p>Température: {main.temp} °C</p>
            <p>Température Max: {main.temp_max} °C</p>
            <p>Température Min: {main.temp_min} °C</p>
            <p>Humidité: {main.humidity} %</p>
            <p>Vitesse du vent: {wind.speed} m/s</p>
          </div>
        </div>
      </div>
    );
}
  