import { translate } from "@/lib/translate";

interface WeatherDisplayProps {
    weathers: {
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
    };
  }
  
  export default function WeatherDisplay({ weathers }: WeatherDisplayProps) {
    if (!weathers) return null;
  
    const { weather, main, wind, name } = weathers;
    const today = new Date();
    const formattedDate = today.toLocaleDateString('fr-FR');
    return (
      <div className="p-2 rounded-lg shadow-md mr-3">
        <h2 className="text-md font-bold">{name}</h2>
        <div className="md:grid grid-cols-3 grid-flow-row gap-2 items-center">
          <div>
            <img
              src={weather.icon}
              alt="weather icon"
              // className="w-16 h-12"
            />
            <p className="text-[11px] mb-1 text-white font-bold">{weather.description}</p>
          </div>
          
          <div className="mr-1">
            <p className="text-[11px] mb-1 font-semibold">{translate("Température:")} {main.temp} °C</p>
            <p className="text-[11px] mb-1 font-semibold">{translate("Température Max:")} {main.temp_max} °C</p>
            <p className="text-[11px] mb-1 font-semibold">{translate("Température Min:")} {main.temp_min} °C</p>        
          </div>

          <div>
            <p className="text-[11px] mb-1 font-semibold">{translate("Humidité:")} {main.humidity} %</p>
            <p className="text-[11px] mb-1 font-semibold">{translate("Vitesse du vent:")} {wind.speed} m/s</p>
            <p className="text-[11px] mb-1 font-semibold">{formattedDate}</p>
          </div>
        </div>
      </div>
    );
}
  