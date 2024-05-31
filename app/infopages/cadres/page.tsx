"use client"
import React ,{ useState, useEffect } from 'react'
import { NavBar } from "../../common/navbar/nav";
import {MenuBuger} from "../../common/navbar/menuburger";
import Link from 'next/link';
import Image from 'next/image';

const Contenu = [
    "Le Centre Régional de Fusion d'Informations Maritimes (CRFIM) opère en conformité avec les conventions et traités internationaux relatifs à la sécurité maritime, y compris",
    "La Convention des Nations Unies sur le droit de la mer (UNCLOS) :",
    "Cette convention établit les droits et les obligations des États en matière d'utilisation des océans et des ressources marines.",
    "La Convention internationale pour la sécurité des vies en mer (SOLAS)",
    "Cette convention établit des normes internationales pour la sécurité des navires, y compris les équipements de sécurité et les procédures d'exploitation.",
    "La Convention internationale pour la prévention de la pollution par les navires (MARPOL) :",
    "Cette convention vise à prévenir la pollution marine par les navires en établissant des normes pour le contrôle des rejets de polluants.",
    "Troisième Conférence sur linteropérabilité du système SHARE-IT, initiatives conjointes avec l'ONUDC, 21 Nov 2023, Thaïlande, Bangkok.",
    "Le CRFIM travaille en étroite collaboration avec les autorités nationales compétentes et se conforme aux lois et réglementations nationales relatives à la sécurité maritime et à la surveillance des eaux territoriales.",
    "La Commission de l'océan Indien (COI) et le gouvernement de la République de Madagascar ont signé deux accords de siège lors d'une cérémonie qui s'est tenue le 18 février au Palais d'Etat de Iavoloha en présence du président de la République Hery Rajaonarimampianina. ",
    "Le premier accord de siège, signé avec la ministre des Affaires étrangères, Béatrice Atallah,  porte sur l'installation d'une unité de coordination du programme régional de sécurité alimentaire et nutritionnelle qui sera conduit par la COI sur la période 2015-2020.",
    "« L'URSAN, Unité régionale pour la sécurité alimentaire et nutritionnelle, comme nous l'appelons désormais, aura pour mandat l'exécution des différentes facilités du Programme. Elle sera responsable de la mise en œuvre des mesures d'intervention prévues sous les différentes facilités pour apporter des incitations aux acteurs privés et publics des chaines de valeur », a expliqué Jean Claude de l'Estrac, Secrétaire général de la COI.",
    "Le second accord, entérine la décision du 30e Conseil de la COI décidant de l'implantation d'un centre régional de fusion de l'information maritime (CRFIM) dans la capitale malgache. Il a été signé avec le ministre de la Défense, Dominique Rakotozafy.",
    "La mise en place d'un centre régional de fusion de l'information maritime « découle des enjeux liés à l'émergence de l'océan Indien en tant que centre de gravité géostratégique ainsi que de la prise de conscience, par les Etats riverains, de leur vulnérabilité face aux menaces que constituent la piraterie, le terrorisme, les différentes sortes de trafics et le pillage de leurs ressources naturelles », a rappelé le président de la République. Et de préciser  que « l'Accord de siège se rapportant au CRFIM constitue l'aboutissement d'un long processus de négociations politique et diplomatique, tant à l'échelle bilatérale que régionale ».",
    "Signature des accords entre le Secrétaire général de la COI et les ministres malgaches des Affaires étrangères et de la Défense, 27 Juin 2019, Madagascar, Antananarivo.",
    "Béatrice Atallah, ministre des Affaires étrangères de Madagascar ; Jean Claude de l'Estrac, Secrétaire général de la COI ; S.E.M. Hery Rajaonarimampianina, président de la République ; Domonique Rakotozafy, ministre de la Défense, 27 Juin 2019, Madagascar, Antananarivo.",
    "Le CRFIM est signataire de protocoles d'entente et de mémorandums d'entente avec d'autres organisations régionales et internationales dans le but de renforcer la coordination et la collaboration en matière de sécurité maritime, de lutte contre la piraterie et d'autres menaces maritimes.",
    "Signature en ligne du Memorandum d'entente: Auxillum worldwide, CRCO, et  CRFIM joinent leurs forces, 19 dec 2023, Madagascar, Antananarivo.",
    "1. Accords relatifs à l'Océan Indien Occidentale",
    "2. Online Signing of the Memorandum of Understanding: Auxilium Worldwide, RCOC and RMIFC join forces",
    "3. Signature d'un protocole d'accord entre le CRCO et l'IFC-IOR",

]

const Titre = [
    "Conventions internationaux",
    "Législation Nationale",
    "Protocoles d'Ententes et Memoranda"
];

const Galerie = "Galerie d'images";

function Cadres() {
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
        // <div className="bg-white bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
    <> 
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
                    Cadres juridiques
                </p>
            </div>
            
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[0]}</p>
                    {/* Contenu */}
                    <p className="text-sm mb-1">
                    {Contenu[0]}
                    </p>
                    <div>
                        <p className="text-sm mb-1 font-bold text-cyan-800">
                            {Contenu[1]}
                        </p>
                        <p className="text-sm mb-1">
                            {Contenu[2]}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm mb-1 font-bold text-cyan-800">
                            {Contenu[3]}
                        </p>
                        <p className="text-sm mb-1">
                            {Contenu[4]}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm mb-1 font-bold text-cyan-800">
                            {Contenu[5]}
                        </p>
                        <p className="text-sm mb-1">
                            {Contenu[6]}
                        </p>
                    </div>
                    
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/CD1.png" 
                    alt="" 
                    width={350} 
                    height={250}/>
                    <p className="mt-1 text-xs mb-1 text-center w-[350px]">
                        {Contenu[7]}
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Les évènements clés */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[1]}</p>
                    {/* Contenu */}
                    <p className="text-sm mb-1">
                        {Contenu[8]}
                    </p>
                    <p className="text-sm mb-1">
                        {Contenu[9]}
                    </p>
                    <p className="text-sm mb-1">
                        {Contenu[10]}
                    </p>
                    <p className="text-sm mb-1 italic text-slate-800">
                        {Contenu[11]}
                    </p>
                    <p className="text-sm mb-1">
                        {Contenu[12]}
                    </p>
                    <p className="text-sm mb-1 italic text-slate-800">
                        {Contenu[13]}
                    </p>
                </div>
                <div className="grid grid-cols-1 grid-flow-row  2xl:ml-[400px] lg:ml-[130px] ">
                    <div className="mb-4">
                        <Image 
                        src="/CD3(1).jpg" 
                        alt="" 
                        width={357} 
                        height={398}/>
                        <p className="mt-1 text-xs mb-1 text-center w-[350px]">
                            {Contenu[14]}
                        </p>
                    </div>
                    <div>
                        <Image 
                        src="/CD3.jpg" 
                        alt="" 
                        width={357} 
                        height={398}/>
                        <p className="mt-1 text-xs mb-1 text-center w-[350px]">
                            {Contenu[15]}
                        </p>
                    </div>
                    {/* Cover */}
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Les perspectives futurs */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[2]}</p>
                    {/* Contenu */}
                    <div className="text-sm mb-1">
                        {Contenu[16]}
                    </div>
                    <div>
                        <Link href="https://www.senat.fr/leg/exposes-des-motifs/pjl21-407-expose.html">
                            <p className="text-sm text-blue-800">
                                {Contenu[17]}
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://web.facebook.com/RMIFCenter/posts/pfbid0mgEVjDacSC8h3GmWB8R7GJ7FC4tBqCdAQcYCxqmrQ6rAKJZpRQB4XdWhEyK9U5FQl">
                            <p className="text-sm text-blue-800 ">
                                {Contenu[18]}
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.commissionoceanindien.org/securite-maritime-signature-dun-protocole-daccord-entre-le-crco-et-lifc-ior/">
                            <p className="text-sm text-blue-800 ">
                                {Contenu[19]}
                            </p>
                        </Link>
                    </div>
                    
                </div>
                <div className=" 2xl:ml-[280px] lg:ml-[130px] ">
                    {/* Cover */}
                    <Image 
                    src="/CD2.png" 
                    alt="" 
                    width={357} 
                    height={398}/>
                    <p className="mt-1 text-xs mb-1 text-center w-[350px]">
                        {Contenu[17]}
                    </p>
                </div>
            </div>
            
            {/* Photos liées à l'article */}
            <p className="font-bold text-lg mt-[50px] md:ml-[50px]">{Galerie}</p>
            <div className="mt-[30px] md:ml-[50px] grid 2xl:grid-cols-4 lg:grid-cols-3 gap-1 items-center justify-center">
                <div>
                    {/* Photo1 */}
                    <Image 
                    src="/CD1.png" 
                    alt="" 
                    width={300} 
                    height={250} className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo2 */}
                    <Image 
                    src="/CD2.png" 
                    alt="" 
                    width={300} 
                    height={250} className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo3 */}
                    <Image 
                    src="/CD3.jpg" 
                    alt="" 
                    width={300} 
                    height={250} className="hover:scale-110"/>
                </div>
                <div>
                    {/* Photo3 */}
                    <Image 
                    src="/CD3(1).jpg" 
                    alt=""
                     width={300} 
                    height={250} 
                    className="hover:scale-110"/>
                </div>
            </div>
        </div>
    </>
    // </div>
  )
}

export default Cadres
