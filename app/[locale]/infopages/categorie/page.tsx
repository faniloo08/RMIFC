"use client"
import React ,{ useState, useEffect } from 'react'
import { NavBar } from "../../common/navbar/nav";
import {MenuBuger} from "../../common/navbar/menuburger";
import Link from 'next/link';

import TranslationsProvider from '@/components/ui/TranslationProvider';
import initTranslation from '@/app/i18n';
interface HomeProps {
    params: {
      locale: string;
    };
  }


export default function Categorie({ params: { locale } }: HomeProps) {
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
        `${t("infopages:categorie.Maritime Incident")}`,
        `${t("infopages:categorie.Arms Trafficking smuggling by sea")}`,
        `${t("infopages:categorie.Maritime Environment")}`,
        `${t("infopages:categorie.Maritime Critical Infrastructure")}`,
        `${t("infopages:categorie.Maritime Cybercriminality")}`,
        `${t("infopages:categorie.Natural events and HADR")}`,
        `${t("infopages:categorie.Others")}`,
        `${t("infopages:categorie.Violent acts at sea")}`,
        `${t("infopages:categorie.Weapon proliferation (PSI)")}`,
        `${t("infopages:categorie.Yachting and Maritime Tourism")}`,
        `${t("infopages:categorie.Illegal unregulated and unreported fishing by sea")}`,
        `${t("infopages:categorie.Illegal Migration and Human trafficking by sea")}`,
    ]
    const Texte = [
        `${t("infopages:categorie.Le Centre Régional de Fusion d'Informations surveille et analyse les incidents maritimes afin de fournir une vue d'ensemble des activités dans les eaux régionales, facilitant ainsi la coordination des réponses en cas d'incidents.")}`,
        `${t("infopages:categorie.Le centre travaille en collaboration avec les autorités compétentes pour détecter, surveiller et prévenir le trafic d'armes et la contrebande par voie maritime, contribuant ainsi à renforcer la sécurité et la stabilité dans la région.")}`,
        `${t("infopages:categorie.Le Centre Régional de Fusion d'Informations surveille et évalue l'impact des activités humaines sur l'environnement maritime, contribuant ainsi à la préservation et à la protection des écosystèmes marins.")}`,
        `${t("infopages:categorie.Le centre identifie et surveille les infrastructures maritimes critiques, telles que les ports et les installations pétrolières, afin de prévenir les menaces potentielles et de garantir leur sécurité et leur fonctionnement continu.")}`,
        `${t("infopages:categorie.Le centre surveille les cybermenaces ciblant les infrastructures maritimes et coordonne les efforts pour protéger les systèmes informatiques critiques contre les attaques et les intrusions.")}`,
        `${t("infopages:categorie.Le centre surveille les événements naturels tels que les tempêtes et les tremblements de terre, et fournit une assistance humanitaire en cas de catastrophe (HADR) pour assurer une réponse efficace et coordonnée aux situations d'urgence.")}`,
        `${t("infopages:categorie.Cette catégorie englobe divers domaines d'intérêt qui ne sont pas spécifiquement couverts par les autres catégories, permettant au centre de surveiller et de répondre à une gamme étendue de menaces et de situations.")}`,
        `${t("infopages:categorie.Le centre surveille les activités criminelles et les actes de violence en mer, contribuant ainsi à garantir la sécurité et la sûreté des voies maritimes et des navires.")}`,
        `${t("infopages:categorie.Le centre surveille les activités liées à la prolifération des armes de destruction massive par voie maritime, en coordination avec le Programme de sécurité internationale (PSI) et d'autres partenaires internationaux.")}`,
        `${t("infopages:categorie.Le centre surveille et régule les activités de plaisance et de tourisme maritime pour garantir la sécurité des voyageurs et la protection des ressources marines dans les zones touristiques.")}`,
        `${t("infopages:categorie.Le centre travaille à détecter, surveiller et prévenir la pêche illégale, non réglementée et non déclarée en mer, contribuant ainsi à la préservation des ressources marines et à la durabilité des industries de la pêche.")}`,
        `${t("infopages:categorie.Le centre surveille les activités de migration illégale et de trafic d'êtres humains par voie maritime, en collaboration avec les autorités nationales et internationales pour prévenir ces activités criminelles et protéger les droits des migrants.")}`
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
    // <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
    <TranslationsProvider ressources={ressources} locale={locale} namespaces={i18Namespaces}>
        <div>
            <div className="bg-white bg-center bg-no-repeat items-center justify-center bg-cover">
                <div className="bg-cover grid grid-cols-1">
                    <div className="flex items-center justify-center"> 
                        <div className="fixed z-50">
                            {isMobile ? <MenuBuger/> : <NavBar />}
                        </div> 
                    </div>
                </div>
                <div className="mt-[30px] flex items-center justify-center">
                    <p className="text-[21px] md:text-[25px] lg:text-[40px] font-bold text-center">
                        {t("infopages:categorie.Les domaines pris en charges par le CRFIM dans le cadre du Maritime Domaine Awareness")}
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="mt-[30px] w-[85%]">
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                            {/* Contenu */}
                                {Titre[0]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[0]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[1]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[1]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[2]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[2]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[3]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[3]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[4]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[4]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[5]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[5]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[6]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[6]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[7]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[7]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[8]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[8]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[9]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[9]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[10]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[10]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] text-cyan-700 font-bold underline mb-2">
                                {Titre[11]}
                            </p>
                            <p className="text-xs sm:text-sm mb-3">
                                {Texte[11]}
                            </p>
                            <Link href="/contenu/tous">
                                <p className="text-xs sm:text-sm text-blue-500 hover:underline mb-3">
                                    {t("infopages:categorie.Voir les articles liés")}
                                </p>
                            </Link>
                        </div>
                        
                    </div>
                </div>               
                {/* <div className="mt-[50px]">
                    <Footer/>
                </div> */}
            {/* </div> */}
            </div>
        </div>
    </TranslationsProvider>

    // </div>
  )
}

//export default appWithTranslation(Categorie);