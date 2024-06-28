"use client"
import React ,{ useState, useEffect } from 'react'
import { NavBar } from "../../common/navbar/nav";
import {MenuBuger} from "../../common/navbar/menuburger";
import Link from 'next/link';
import Image from 'next/image';
import TranslationsProvider from '@/components/ui/TranslationProvider';
import initTranslation from '@/app/i18n';
interface HomeProps {
    params: {
      locale: string;
    };
  }

  
export default function Partenaires({ params: { locale } }: HomeProps)  {
    const [t, setT] = useState<(key: string) => string>(() => (key: string) => key);
    const [ressources, setRessources] = useState('');
    const i18Namespaces =  ['common','infopages']
    useEffect(() => {
      const fetchDonnees = async () => {
        const { t, resources } = await initTranslation(locale, i18Namespaces);
        setT(() => t);
        setRessources(()  => resources)
      }
    fetchDonnees();
    }, []);
    const Titre = [
        `${t("infopages:centres.Le C.R.C.O")}`,
        `${t("infopages:centres.Le C.F.I.M")}`,
       
    ]
    
    const Contenu = [
        `${t("infopages:centres.Le Centre régional de coordination des opérations (CRCO) est créé par l'accord sur la coordination des opérations en mer. Il est situé aux Seychelles et chargé de planifier les opérations en mer, en collaboration avec le Centre régional de fusion de l'information maritime. Il accueille un officier de liaison de chacune des Parties et sa gouvernance est régie par les dispositions indiquées en annexe de l'accord.")}`,
        `${t("infopages:centres.Le Centre de Fusion d'Informations Maritimes (CFIM) de Madagascar, créé bien avant le CRFIM, joue un rôle crucial dans la surveillance et la sécurité maritime nationale. Il facilite la collecte, l'analyse et le partage d'informations maritimes entre diverses agences pour lutter contre les menaces maritimes comme la pêche illégale, le trafic de drogue et la piraterie. Le CFIM travaille en étroite collaboration avec des partenaires nationaux et internationaux pour renforcer la sécurité et la sûreté des eaux malgaches, en promouvant une approche coordonnée et proactive.")}`

        // "","","","","",""
    ]
    const [isMobile, setIsMobile] = useState(false);

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
    // <div className ="overflow-x-hidden bg-[url('/Fond1.webp')] bg-cover flex bg-center min-h-screen items-center justify-center ">
    <TranslationsProvider ressources={ressources} locale={locale} namespaces={i18Namespaces}>
        <div className="bg-white bg-center bg-no-repeat items-center justify-center bg-cover">
            <div className="bg-cover grid grid-cols-1">
                <div className="flex items-center justify-center"> 
                    <div className="fixed z-50">
                        {isMobile ? <MenuBuger/> : <NavBar />}
                    </div> 
                </div>
            </div>
            <div className="mt-[30px] flex items-center justify-center">
                <p className="text-[50px] font-bold">
                    {t("infopages:centres.Les Centres affiliés au CRFIM")}
                </p>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center mb-4 mt-4">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRCO */}
                    {/* Titre */}
                    <Link href="https://crcoseychelles.org/">
                        <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[0]}</p>
                    </Link>
                    {/* Contenu */}
                    <p className="text-sm">
                        {Contenu[0]}
                    </p>
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/SlideB.webp" 
                    alt="" 
                    width={357} 
                    height={200}/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center mb-4">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRCO */}
                    {/* Titre */}
                    <Link href="https://cfimmadagascar.org/">
                        <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[1]}</p>
                    </Link>
                    {/* Contenu */}
                    <p className="text-sm">
                        {Contenu[1]}
                    </p>
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/CFIM.webp" 
                    alt="" 
                    width={357} 
                    height={200}/>
                </div>
            </div>
        </div>
    </TranslationsProvider>
  )
}
  
//export default appWithTranslation(Partenaires);