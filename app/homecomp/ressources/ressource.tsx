import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
//import { NextPage } from 'next';
import { format, addDays, subDays } from 'date-fns';
import dynamic from 'next/dynamic';

// Dynamically import the Map component to avoid SSR issues
const Map = dynamic(() => import('@/components/ui/map'), {
  ssr: false,
});

const Texte = [
  "Le front froid axé au Sud-Est de Madagascar affectera le temps",
  "Des averses isolées localement orageuses seront attendues sur MELAKY, BONGOLAVA, BETSIBOKA, ATSIMO ATSINANANA, VATOVAVY, FITOVINANY, la partie Ouest de BOENY, les parties Sud d’ALAOTRA MANGORO et ATSINANANA ainsi que les hautes terres centrales. Quelques averses locales seront probables sur Ambilobe, Nosy .",
  "",
  "Brunvoll Propulsion Chosen for ESVAGT's Growing Fleet of Service Operation Vessels",
  "Brunvoll has once again been chosen as supplier of the propulsion and manoeuvring system for one of ESVAGT’s new service operation vessels (SOV). This will be the fourth ESVAGT vessel currently undergoing construction. The vessel is designed by HAV …",
  "",
  "Weather Forecast"
]
function Ressource() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('fr-FR')
  const [isMobile, setIsMobile] = useState(false);

  function formatDate(date: Date): string {
    const today = new Date();
    const yesterday = subDays(today, 1);
    const tomorrow = addDays(today, 1);
  
    if (date.toDateString() === today.toDateString()) {
      return 'Aujourd\'hui, ' + format(date, 'HH:mm');
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Hier, ' + format(date, 'HH:mm');
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Demain, ' + format(date, 'HH:mm');
    } else {
      return format(date, 'EEE d, HH:mm');
    }
  }
  
  const today1 = new Date();
  const yesterday = subDays(today, 1);
  const tomorrow = addDays(today, 1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Utilise la largeur de 768px comme seuil pour les appareils mobiles
    };

    handleResize(); // Vérifie la taille de l'écran au chargement de la page
    window.addEventListener('resize', handleResize); // Écoute les changements de taille de l'écran

    return () => {
      window.removeEventListener('resize', handleResize); // Nettoie l'écouteur d'événements lors du démontage du composant
    };
  }, []);
  return (
    <div>
        <div className="lg:ml-[40px] sm:ml-[0px] 2xl:w-[1480px] lg:w-[1000px] 2xl:h-[700px] lg:h-[600px] bg-gradient-to-r from-[#5DB4D9] to-[#181C70] justify-center items-center py-[10px]">
            <h2 className="font-bold text-lg text-center text-white">
              Des données fiables et à jour
            </h2>
            <div className="grid grid-rows-3">
              <div className="grid grid-rows-1 grid-flow-col gap-1 mt-[30px]">
                <div className="ml-[20px]">
                  {/* image */}
                  <Image 
                  src="/Météo(1).png" 
                  alt="Météo" 
                  width={470} 
                  height={150} 
                  className="2xl:w-[100%]"/>
                </div>
                <div className="2xl:ml-[50px] 2xl:w-[750px] lg:w-[450px]">
                  {/*Text*/}
                  <Link href="https://www.meteomadagascar.mg/">
                    <h3 className="font-bold text-[16px] mb-1 hover:text-blue-700">
                      {Texte[0]}
                    </h3>
                  </Link>
                  <p className="text-[11px] mb-1">
                    {Texte[1]}
                  </p>
                  <p className="text-[12px] fond-extralight">
                    {formattedDate}
                  </p>
                </div>
              </div>
              <div className="grid grid-rows-1 grid-flow-col 2xl:ml-[30px] lg:ml-[20px] mt-[15px]">
                <div className="2xl:w-[750px] lg:w-[450px]">
                  {/*Text*/}
                  <Link href="https://www.vesselfinder.com/fr/news/27730-Brunvoll-Propulsion-Chosen-for-ESVAGTs-Growing-Fleet-of-Service-Operation-Vessels">
                    <h3 className="font-bold text-[16px] mb-1 hover:text-blue-700">
                      {Texte[3]}
                    </h3>
                  </Link>
                  <p className="text-[11px] mb-1">
                    {Texte[4]}
                  </p>
                  <p className="text-[12px] fond-extralight">
                    {formattedDate}
                  </p>
                </div>
                <div>
                  {isMobile ? <Image 
                  src="/Carte(1).png" 
                  alt="Météo" width={470} 
                  height={150} 
                  className="2xl:w-[100%] 2xl:ml-[-30px]"/> : <Map />}
                </div>
              </div>
              <div className="grid grid-rows-1 grid-flow-col">
                <div className="ml-[20px]">
                {/* image */}
                  <Image 
                  src="/Port(1).png" 
                  alt="Météo" 
                  width={470} 
                  height={150} 
                  className="2xl:w-[100%]"/>
                </div>
                <div className="2xl:ml-[50px] 2xl:w-[750px] lg:w-[450px]">
                  {/*Text*/}
                  <Link href="https://www.vesselfinder.com/fr/ports/MGANM001">
                    <h3 className="font-bold text-[16px] mb-1 hover:text-blue-700">
                      {Texte[6]}
                    </h3>
                  </Link>
                  <div className="grid grid-rows-3 grid-flow-col">
                      <div className="grid grid-rows-1 2xl:gap-6 grid-flow-col">
                        <div className="text-[13px] mb-1 font-bold">{formatDate(yesterday)}</div>
                        <div className="text-[13px] mb-1 font-bold">26 °C</div>
                        <div className="text-[13px] mb-1 font-bold">
                          3.5 kn-1.8 m/s
                        </div>
                      </div>
                      <div className="grid grid-rows-1 2xl:gap-6 grid-flow-col">
                        <div className="text-[13px] mb-1 font-bold">{formatDate(today1)}</div>
                        <div className="text-[13px] mb-1 font-bold">23 °C</div>
                        <div className="text-[13px] mb-1 font-bold">
                          2.9 kn-1.5 m/s
                        </div>
                      </div>
                      <div className="grid grid-rows-1 2xl:gap-6 grid-flow-col">
                        <div className="text-[13px] mb-1 font-bold">{formatDate(tomorrow)}</div>
                        <div className="text-[13px] mb-1 font-bold">22 °C</div>
                        <div className="text-[13px] mb-1 font-bold">
                          3.1 kn-1.6 m/s
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ressource