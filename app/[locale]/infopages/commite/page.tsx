"use client"
import React ,{ useState, useEffect } from 'react'
import { NavBar } from "../../common/navbar/nav";
import {MenuBuger} from "../../common/navbar/menuburger";
import Image from 'next/image';
import TranslationsProvider from '@/components/ui/TranslationProvider';
import initTranslation from '@/app/i18n';
interface HomeProps {
    params: {
      locale: string;
    };
  }


export default function Historique({ params: { locale } }: HomeProps) {
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
    
    const Contenu = [
        `${t("infopages:commité.Capitaine de vaisseau et Directeur du Centre Régional de Fusion d'Informations Maritimes (CRFIM), le Commandant Alex Ralaiarivony possède une vaste expérience dans le domaine de la sécurité maritime. Avec une carrière militaire distinguée et de nombreuses missions à son actif, il apporte un leadership fort et une expertise approfondie en matière de surveillance maritime et de gestion des opérations de sécurité. Sous sa direction, le CRFIM a renforcé ses capacités de fusion et de partage d'informations pour améliorer la sécurité et la sûreté dans la région.")}`,
        `${t("infopages:commité.Le Commandant Ralaiarivony est également reconnu pour son engagement envers la coopération internationale et la formation des personnels. Il a initié plusieurs programmes de collaboration avec des partenaires internationaux, visant à renforcer les capacités des forces maritimes dans l'Océan Indien. Son approche proactive et sa vision stratégique contribuent grandement à la mission du CRFIM de sécuriser les voies maritimes et de protéger les intérêts maritimes régionaux.")}`,
        `${t("infopages:commité.En tant que Directeur Adjoint du CRFIM et Officier de liaison international de France, Mr Nicolas joue un rôle clé dans la coordination des efforts de sécurité maritime entre la France et les pays de l'Océan Indien. Fort de son expérience en diplomatie et en relations internationales, il est un acteur essentiel dans la facilitation des échanges d'informations et dans l'élaboration de stratégies communes pour lutter contre les menaces maritimes.")}`,
        `${t("infopages:commité.Mr Nicolas apporte également son expertise en gestion de crise et en planification stratégique au sein du CRFIM. Son approche méthodique et sa capacité à naviguer dans des environnements complexes font de lui un atout précieux pour l'organisation. Son engagement à renforcer les partenariats internationaux et à promouvoir la sécurité maritime est inestimable pour la mission du CRFIM.")}`,
        `${t("infopages:commité.Mr Lavani Said, Officier de liaison international des Comores, est un professionnel expérimenté dans le domaine de la sécurité maritime et de la coopération internationale. Avec une solide formation en gestion des ressources maritimes et une connaissance approfondie des enjeux régionaux, il joue un rôle crucial dans la facilitation des communications et des opérations entre le CRFIM et les autorités comoriennes.")}`,
        `${t("infopages:commité.Son expertise en matière de surveillance maritime et de lutte contre les activités illicites en mer contribue à renforcer la sécurité dans la région. Mr Said est également un fervent défenseur de la coopération régionale, travaillant sans relâche pour renforcer les liens entre les pays de l'Océan Indien et pour promouvoir une approche collaborative de la sécurité maritime.")}`,
        `${t("infopages:commité.En tant qu'Officier de liaison international de Madagascar, Mr Ramanantsoa Aro apporte une riche expérience en sécurité maritime et en coordination inter-agences. Son parcours professionnel est marqué par un engagement constant à améliorer la sécurité des eaux malgaches et à promouvoir la coopération internationale. Il joue un rôle vital dans la transmission des informations et la coordination des efforts de sécurité entre Madagascar et le CRFIM.")}`,
        `${t("infopages:commité.Mr Aro est également reconnu pour ses compétences en gestion de crise et en planification stratégique. Sa capacité à anticiper les menaces et à élaborer des solutions efficaces fait de lui un pilier essentiel pour le CRFIM. Son travail contribue directement à la sécurité maritime régionale et à la protection des intérêts maritimes de Madagascar.")}`,
        `${t("infopages:commité.Mr Chris, Officier de liaison international du Kenya, est un expert en sécurité maritime avec une vaste expérience dans la surveillance et la gestion des ressources maritimes. Sa connaissance approfondie des défis et des opportunités dans les eaux kenyanes fait de lui un partenaire clé pour le CRFIM. Il joue un rôle crucial dans la coordination des efforts de sécurité maritime entre le Kenya et le CRFIM, facilitant la communication et le partage d'informations.")}`,
        `${t("infopages:commité.Sa capacité à travailler en collaboration avec diverses parties prenantes et à gérer des situations complexes est inestimable pour le CRFIM. Mr Chris est également engagé dans la promotion de la coopération régionale et l'amélioration des capacités de réponse aux menaces maritimes, contribuant ainsi à la sécurité et à la stabilité de la région.")}`,
    ];
    
    const Galerie = `${t("infopages:commité.Gallerie d'images")}`;

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
                    {t("infopages:commité.Le Commité technique")}
                </p>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">
                        {t("infopages:commité.Le Directeur du C.R.F.I.M")}
                    </p>
                    {/* Contenu */}
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[0]}
                    </p>
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[1]}
                    </p>
                </div>
                <div className=" 2xl:ml-[380px] lg:ml-[230px] ">
                    {/* Cover */}
                    <Image 
                    src="/DR.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                    <p className="mt-1 text-xs mb-1 text-center w-[150px]">
                        {t("infopages:commité.Capitaine de Vaisseau, Commandant Alex Ralairivony")}
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">
                        {t("infopages:commité.Le Directeur adjoint du C.R.F.I.M et OLI France")}
                    </p>
                    {/* Contenu */}
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[2]}
                    </p>
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[3]}
                    </p>
                </div>
                <div className=" 2xl:ml-[380px] lg:ml-[230px] ">
                    {/* Cover */}
                    <Image 
                    src="/OLI4.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                    <p className="mt-1 text-xs mb-1 text-center w-[150px]">
                        {t("infopages:commité.Officier de Liaison International de France, Monsieur Nicolas")}
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">
                        {t("infopages:commité.L'OLI Comores")}
                    </p>
                    {/* Contenu */}
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[4]}
                    </p>
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[5]}
                    </p>
                </div>
                <div className=" 2xl:ml-[380px] lg:ml-[230px] ">
                    {/* Cover */}
                    <Image 
                    src="/OLI1.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                    <p className="mt-1 text-xs mb-1 text-center w-[150px]">
                        {t("infopages:commité.Officer de Liaison International des Comores, Commandant Said Lavani")}
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">
                        {t("infopages:commité.L'OLI Madagascar")}
                    </p>
                    {/* Contenu */}
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[6]}
                    </p>
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[7]}
                    </p>
                </div>
                <div className=" 2xl:ml-[380px] lg:ml-[230px] ">
                    {/* Cover */}
                    <Image 
                    src="/OLI2.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                    <p className="mt-1 text-xs mb-1 text-center w-[150px]">
                        {t("infopages:commité.Officer de Liaison International de Madagascar, Commandant Aro Ramanantsoa")}
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-center justify-center">
                <div className="mt-[30px] sm:ml-[50px] ml-[10px] 2xl:w-[1000px] lg:w-[600px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">
                        {t("infopages:commité.L'OLI Kenya")}
                    </p>
                    {/* Contenu */}
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[8]}
                    </p>
                    <p className="text-xs md:text-sm mb-1">
                        {Contenu[9]}
                    </p>
                </div>
                <div className=" 2xl:ml-[380px] lg:ml-[230px] ">
                    {/* Cover */}
                    <Image 
                    src="/OLI3.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                    <p className="mt-1 text-xs mb-1 text-center w-[150px]">
                        {t("infopages:commité.Officer de Liaison International de Kenya, Monsieur Chris")}
                    </p>
                </div>
            </div>
            {/* Photos liées à l'article */}
            <p className="font-bold text-lg mt-[50px] sm:ml-[50px] ml-[10px]">{Galerie}</p>
            <div className="mt-[30px] 2xl:ml-[80px] lg:sm:ml-[50px] ml-[10px] grid grid-cols-3 2xl:gap-6 lg:gap-1 items-center justify-center">
                <div>
                    {/* Photo1 */}
                    <Image 
                    src="/DR.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                </div>
                <div>
                    {/* Photo1 */}
                    <Image 
                    src="/OLI4.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                </div>
                <div>
                    {/* Photo1 */}
                    <Image 
                    src="/OLI1.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                </div>
                <div>
                    {/* Photo1 */}
                    <Image 
                    src="/OLI2.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                </div>
                <div>
                    {/* Photo1 */}
                    <Image 
                    src="/OLI3.webp" 
                    alt="" 
                    width={150} 
                    height={50} 
                    className="2xl:w-[85%]"/>
                </div>
            </div>

        </div>
    </TranslationsProvider>
  )
}