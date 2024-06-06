"use client"
import React ,{ useState, useEffect } from 'react'
import { NavBar } from "../../common/navbar/nav";
import {MenuBuger} from "../../common/navbar/menuburger";
// import Footer from "../footer/footer";
import Image from 'next/image';


const Contenu = [
    "Le domaine maritime est communément connu pour être un terrain vaste pour la propagation de la criminalité de différentes natures alors qu'il constitue le facteur clé de la fluidité des échanges et du commerce internationaux. L'exploitation durable et responsable du domaine maritime passe avant tout par la maîtrise de la sécurité et la sûreté maritimes. Compte tenu de sa transversalité, sa préservation incombe au niveau national à différentes structures étatiques et également à ses usagers. Or, une absence de collaboration des entités concernés dans sa gestion et son exploitation a été dénotée depuis toujours, affaiblissant ainsi tout son potentiel.",
    "Le Centre Régional de Fusion d'Informations Maritimes (CRFIM) a été fondé en 2017 en réponse à la nécessité croissante de renforcer la sécurité et la sûreté des eaux régionales autour de Madagascar. L'organisation a été établie dans le cadre d'une coopération étroite avec plusieurs partenaires internationaux, y compris la Commission de l'Océan Indien, l'Union Européenne, l'US Navy et d'autres institutions régionales et mondiales.",
    "Dans cette entreprise, le CRFIM compte parmi ses parties prenantes et collaborateurs, les départements ministériels et organismes publics et/ou privés œuvrant dans le domaine maritime siégeant au sein de son Conseil d'Administration ou des tiers dont les rapports sont régis officiellement par des protocoles d'accord d'échange et de partage de données.",
    "Nos missions sont vastes et variées : collecte et analyse de données, surveillance des activités maritimes, coordination des opérations de sauvetage sécurité et la sûreté maritime, la gestion des ressources marines, le suivi du trafic et des activités maritimes, la météorologie, les incidents maritimes. D'où la mise en place du programme M.A.S.E (Maritime Security)",
    "Date de création du centre",
    "Mises en place des infrastructures et des capacités opérationelles",
    "Signatures de l'accord de collaboration entre les gouvernements partenaires et les organisations impliqués",
    "Lancement officiel des opérations aux CRFIM",
    "Reconnaissance internationale du CRFIM",
    "Élargissement du mandat du CRFIM pour inclure la formation et le renforcement des capacités des acteurs régionaux dans le domaine de la sécurité maritime",
    "1. Maintenir la qualité de travail et la capacité opérationelle de nos employés",
    "2. Multiplier les efforts dans la promotion de la sécurité maritime ",
    "3. Elargissement des partenariats stratégiques",
    "4. Développement des initiatives innovantes",
    "5. Faire fâce aux défis émergents en matière de sécurité maritime "
];

const Galerie = "Galerie d'images";

function Historique() {
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
                    Historique
                </p>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">Le C.R.F.I.M</p>
                    {/* Contenu */}
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[0]}
                    </p>
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[1]}
                    </p>
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[2]}
                    </p>
                    <p className="text-xs md:text-sm">
                        {Contenu[3]}
                    </p>
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/histo1.webp" 
                    alt="" 
                    width={350} 
                    height={250} 
                    className="2xl:w-[85%]"/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center 2xl:mb-[30px]">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Les évènements clés */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">Les évènements clés</p>
                    {/* Contenu */}
                    <div className="grid sm:grid-cols-2 grid-flow-row">
                        <div>
                            <p className="text-blue-800 font-bold">
                                2017 :
                            </p>

                            <p className="text-xs md:text-sm">
                                {Contenu[4]}
                            </p>
                        </div>
                        <div className="mb-3">
                            <p className="text-blue-800 font-bold">
                                0000 :
                            </p>

                            <p className="text-xs md:text-sm">
                                {Contenu[5]}
                            </p>
                        </div>
                        <div className="mr-1 mb-3">
                            <p className="text-blue-800 font-bold">
                                0000 :
                            </p>

                            <p className="text-xs md:text-sm ">
                                {Contenu[6]}
                            </p>
                        </div>
                        <div className="mb-3">
                            <p className="text-blue-800 font-bold">
                                0000 :
                            </p>

                            <p className="text-xs md:text-sm">
                                {Contenu[7]} 
                            </p>
                        </div>
                        <div>
                            <p className="text-blue-800 font-bold">
                                0000 :
                            </p>

                            <p className="text-xs md:text-sm">
                                {Contenu[8]}
                            </p>
                        </div>
                        <div>
                            <p className="text-blue-800 font-bold">
                                0000 :
                            </p>

                            <p className="text-xs md:text-sm">
                                {Contenu[9]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/gris.webp" 
                    alt="" 
                    width={357} 
                    height={398} 
                    className="2xl:w-[85%]"/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px] mb-[30px]">
                    {/* Les perspectives futurs */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">Les perspectives futurs</p>
                    {/* Contenu */}
                    <div>
                        <p className="text-blue-800">
                            {Contenu[10]}
                        </p>
                    </div>
                    <div>
                        <p className="text-blue-800 ">
                            {Contenu[11]}
                        </p>
                    </div>
                    <div>
                        <p className="text-blue-800 ">
                            {Contenu[12]}
                        </p>
                    </div>
                    <div>
                        <p className="text-blue-800">
                            {Contenu[13]}
                        </p>
                    </div>
                    <div>
                        <p className="text-blue-800">
                            {Contenu[14]}
                        </p>
                    </div>
                </div>
                <div className="2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/gris.webp" 
                    alt="" 
                    width={357} 
                    height={398} 
                    className="2xl:w-[85%]"/>
                </div>
            </div>
            
            {/* Photos liées à l'article */}
            <p className="font-bold text-lg mt-[50px] sm:ml-[50px] ml-[10px]">{Galerie}</p>
            <div className="mt-[30px] 2xl:ml-[80px] lg:sm:ml-[50px] ml-[10px] grid grid-cols-3 2xl:gap-6 lg:gap-1 items-center justify-center">
                <div>
                    {/* Photo1 */}
                    <Image 
                    src="/Hist1.webp" 
                    alt="" 
                    width={300} 
                    height={250} 
                    className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo2 */}
                    <Image 
                    src="/Hist2.webp" 
                    alt="" 
                    width={300} 
                    height={250} 
                    className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo3 */}
                    <Image 
                    src="/Hist3.webp" 
                    alt="" 
                    width={300} 
                    height={250} 
                    className="hover:scale-110"/>
                </div>
            </div>

        </div>
    // </div>
  )
}

export default Historique