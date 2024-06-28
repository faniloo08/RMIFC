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
        `${t("infopages:partnaire.Le C.R.C.O")}`,
        `${t("infopages:partnaire.L'I.Ga.D")}`,
        `${t("infopages:partnaire.L'E.A.C")}`,
        `${t("infopages:partnaire.La C.O.M.E.S.A")}`,
        `${t("infopages:partnaire.La C.O.I")}`,
        `${t("infopages:partnaire.L'U.E")}`
    ]
    
    const Contenu = [
        `${t("infopages:partnaire.Le Centre régional de coordination des opérations (CRCO) est créé par l'accord sur la coordination des opérations en mer. Il est situé aux Seychelles et chargé de planifier les opérations en mer, en collaboration avec le Centre régional de fusion de l'information maritime. Il accueille un officier de liaison de chacune des Parties et sa gouvernance est régie par les dispositions indiquées en annexe de l'accord.")}`,
        `${t("infopages:partnaire.Intergovernmental Authority on Development, (IGAD) est un groupement régional créé le 21 mars 1986 et associant sept pays est-africains : Djibouti, Éthiopie, Kenya, Somalie, Soudan, Soudan du Sud et Ouganda.")}`,
        `${t("infopages:partnaire.La Communauté d'Afrique de l'Est ( EAC ) est une organisation intergouvernementale composée de huit pays d' Afrique de l'Est . Les États membres sont la République démocratique du Congo , la République fédérale de Somalie , les républiques du Burundi , du Kenya , du Rwanda , du Soudan du Sud , de l'Ouganda et de la Tanzanie.")}`,
        `${t("infopages:partnaire.Le Marché commun de l'Afrique orientale et australe ( COMESA ) est une communauté économique régionale en Afrique composée de vingt et un États membres s'étendant de la Tunisie à l'Eswatini.")}`,
        `${t("infopages:partnaire.La Commission de l'Océan Indien ( français : Commission de l'Océan Indien , COI ) est une organisation intergouvernementale qui relie les nations africaines de l'océan Indien : Comores , Madagascar , Maurice , la Réunion (une région d'outre-mer de la France ) et les Seychelles .")}`,
        `${t("infopages:partnaire.L'Union européenne (UE) est une union politico-économique sui generis de vingt-sept États européens qui délèguent ou transmettent par traité l'exercice de certaines compétences à des organes communautaires.")}`
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
                    {t("infopages:partnaire.Partenaires et organisations impliquées")}
                </p>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <Link href="https://igad.int/">
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
                    src="/Igad.webp" 
                    alt="" 
                    width={200} 
                    height={150}/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <Link href="https://www.eac.int/">
                        <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[2]}</p>
                    </Link>
                    {/* Contenu */}
                    <p className="text-sm">
                        {Contenu[2]}
                    </p>
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/EAC.webp" 
                    alt="" 
                    width={200} 
                    height={150}/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <Link href="https://www.comesa.int/?lang=fr">
                        <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[3]}</p>
                    </Link>
                    {/* Contenu */}
                    <p className="text-sm">
                        {Contenu[3]}
                    </p>
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/Comesa.webp" 
                    alt="" 
                    width={200} 
                    height={150}/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <Link href="https://www.commissionoceanindien.org/">
                        <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[4]}</p>
                    </Link>
                    {/* Contenu */}
                    <p className="text-sm">
                        {Contenu[4]}
                    </p>
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/OI.webp" 
                    alt="" 
                    width={200} 
                    height={150}/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <Link href="https://european-union.europa.eu/index_fr">
                        <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[5]}</p>
                    </Link>
                    
                    {/* Contenu */}
                    <p className="text-sm">
                        {Contenu[5]}
                    </p>
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/UE.webp" 
                    alt="" 
                    width={200} 
                    height={150}/>
                </div>
            </div>
            <p className="text-[20px] text-cyan-700 font-bold underline mb-2 mt-[30px] ml-[50px] w-[600px]">{t("infopages:partnaire.Les pays signataires")}</p>
            <div className="mt-[30px] 2xl:ml-[100px] lg:ml-[50px] grid grid-cols-7 items-center justify-center">
                <div>
                    {/* Photo1 */}
                    <Image 
                    src="/Comores.webp"
                    alt="Comores" 
                    title="Comores" 
                    width={100} 
                    height={70} 
                    className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo2 */}
                    <Image 
                    src="/Djibouti.svg" 
                    alt="Djibouti" 
                    title="Djibouti" 
                    width={100} 
                    height={70} 
                    className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo3 */}
                    <Image 
                    src ="/France.svg" 
                    alt ="France" 
                    title ="France" 
                    width={100} 
                    height={70} 
                    className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo3 */}
                    <Image 
                    src="/Kenya.webp"
                    alt="Kenya" 
                    title="Kenya" 
                    width={100} 
                    height={70} 
                    className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo3 */}
                    <Image 
                    src="/Madagascar.webp" 
                    alt="Madagascar" 
                    title="Madagascar"  
                    width={100} 
                    height={70} 
                    className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo3 */}
                    <Image 
                    src="/Mauritius.svg" 
                    alt="Mauritius" 
                    title="Mauritius" 
                    width={100} 
                    height={70} 
                    className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo3 */}
                    <Image 
                    src="/Seychelles.webp" 
                    alt="Seychelles" 
                    title="Seychelles" 
                    width={100} 
                    height={70} 
                    className="hover:scale-110"/>
                </div>
            </div>

        </div>
    </TranslationsProvider>
  )
}
  
//export default appWithTranslation(Partenaires);