import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import { getWeather, WeatherData } from '@/lib/useWeather';
import Link from 'next/link';
//import Image from 'next/image';
import dynamic from 'next/dynamic';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import { translate } from '@/lib/translate';

const Map = dynamic(() => import('@/components/ui/map'), {
  ssr: false,
});

const Navire = dynamic(() => import('@/components/ui/navire'), {
  ssr: false,
});



function Ressource() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('fr-FR');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (city) {
      console.log('Fetching weather for city:', city); // Ajout du log
      getWeather(city).then(data => {
        console.log('Weather data received:', data); // Ajout du log
        setWeather(data);
      });
    }
  }, [city]);

  const Texte = [
    `${translate("Le front axé au Centre et Sud de l'océan Indien")}`,
    `${translate("Cette carte interactive présente notre zone de couverture, qui englobe la partie sud-est de l'Océan Indien. Vous pouvez explorer les différentes zones d'intérêt, les routes maritimes clés, ainsi que les points critiques de surveillance.")}`,
    "",
    `${translate("Trouvez toutes les activités des vaisseaux repertoriés ici.")}`,
    `${translate("Nous vous garantissons des informations à jours et fiables concernants toutes activités des vaisseaux dans la zone de l'Océan Indien et bien plus. En collaboration avec des ressources officiels comme Vesselfinder ou la plateforme du 'Sea Vision', nous ne communiquons que les informations vérifiés par une communauté d'experts.")}`,
    "",
    `${translate("Weather Forecast")}`
  ];

  const handleSearch = (city: string) => {
    console.log('Search triggered for city:', city); // Ajout du log
    setCity(city);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[85%] 2xl:h-[700px] lg:h-[600px] bg-gradient-to-r from-[#5DB4D9] to-[#181C70] justify-center items-center py-[10px]">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="font-bold text-white dark:text-black"
          >
            {translate("Des données")}
            <Highlight className="text-black dark:text-white">
              {translate("fiables et à jour.")}
            </Highlight>
          </motion.h1>
        </HeroHighlight>
        <div className="grid grid-rows-3 grid-flow-col">
          <div className="grid grid-cols-2 grid-flow-row gap-1 mt-[30px]">
            <div className="ml-[20px]">
              {isMobile ? (
                <iframe width="100%" height="auto" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Indian%20Ocean+(My%20Business%20Name)&amp;t=&amp;z=3&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                ) : (
                  <Map />
                )}
                
            </div>
            <div className="mr-[20px]">
              <Link href="https://www.google.com/maps/place/Oc%C3%A9an+Indien/@-21.9235521,34.6255136,3z/data=!3m1!4b1!4m6!3m5!1s0x18174db2727f6a1f:0xead4bf5063a99637!8m2!3d-33.137551!4d81.826172!16zL20vMDNyejQ?entry=ttu">
                <h3 className="font-bold text-[16px] mb-1 hover:text-blue-700">
                  {Texte[0]}
                </h3>
              </Link>
              <p className="text-[11px] mb-1">
                {Texte[1]}
              </p>
              {/* <p className="text-[12px] fond-extralight">
                {formattedDate}
              </p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-1 mt-[10px]">
            <div className="ml-[20px]">
              <Link href="https://www.vesselfinder.com/fr/news">
                <h3 className="font-bold text-[16px] mb-1 hover:text-blue-700">
                  {Texte[3]}
                </h3>
              </Link>
              <p className="text-[11px] mb-1">
                {Texte[4]}
              </p>
              <Link href="https://www.vesselfinder.com/fr/news">
                <p className="text-[12px] fond-extralight mb-1 hover:text-blue-700">
                  {translate("En savoir plus")}
                </p>
              </Link>
            </div>
            <div className="mr-[20px]">
              <Navire/>
              {/* {isMobile ? (
                <Image 
                  src="/Carte(1).png" 
                  alt="Météo" 
                  width={470} 
                  height={150} 
                  className=""
                />
              ) : (
                <Navire />
              )} */}
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-1 mt-[0px]">
            <div className="ml-[20px]">
              <h3 className="font-bold text-[16px] mb-1 hover:text-blue-700">{translate("Weather Data")}</h3>
              <p className="text-[11px] mb-1">
                {translate("Type the city you want to know the weather of")}
              </p>
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="">
              <Link href="https://openweathermap.org/">
                <h3 className="font-bold text-[16px] mb-1 hover:text-blue-700">
                  {Texte[6]}
                </h3>
              </Link>
              {weather ? (
                <WeatherDisplay weathers={weather} />
              ) : (
                <p className="text-center text-[11px]">{translate("No weather data available.")}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ressource;
