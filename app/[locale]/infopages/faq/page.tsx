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

export default function Faq({ params: { locale } }: HomeProps) {
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
        `${t("infopages:faq.Qu'est-ce que le C.R.F.I.M ?")}`,
        `${t("infopages:faq.Comment je peux contacter le CRFIM ?")}`,
        `${t("infopages:faq.Comment puis-je obtenir des informations sur les conditions maritimes actuelles dans la région ?")}`

    ];
    
    const Contenu = [
        `${t("infopages:faq.Le CRFIM est une organisation régionale basée à Madagascar, spécialisée dans la surveillance, l'analyse et le partage d'informations cruciales pour la sécurité maritime dans la région.")}`,
        `${t("infopages:faq.1. En consultant les bulletins météorologiques maritimes et les avis de navigation disponibles sur notre site web .")}`,
        `${t("infopages:faq.2. En contactant notre centre d'information maritime . ")}`,
        `${t("infopages:faq.3. En venant directement nous voir .")}`
    ];
    
    const Question = [
        `${t("infopages:faq.questions.Bonjour. Le CRFIM offre-t-il des formations en sécurité maritime ?")}`,
        "",
    ];
    
    const Reponse = [
        `${t("infopages:faq.questions.Oui, le CRFIM propose des programmes de formation et de renforcement des capacités pour les acteurs régionaux impliqués dans la sécurité maritime, y compris les forces de l'ordre, les autorités portuaires et d'autres parties prenantes.")}`,
        `${t("infopages:faq.questions.Le CRFIM vous répondra dans les plus brefs délais")}`
    ];
    const [liked, setLiked] = useState(false);
    const [liked1, setLiked1] = useState(false);
    const [comments, setComments] = useState<string[]>([]);
    const [commentText, setCommentText] = useState<string>('');
    
    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value);
    };
    
    const handleCommentSubmit = () => {
        if (commentText.trim() !== '') {
            setComments([...comments, commentText]);
            setCommentText('');
        }
    };

    const handleClick = () => {
        setLiked(!liked); 
    };
    const handleClick1 = () => {
        setLiked1(!liked1); 
    };
    const displayedComments = comments.slice(0, 2);
    
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
                    {t("infopages:faq.Foire aux questions")}
                </p>
            </div>
            <div className="grid">
                <div className="mt-[30px] ml-[10px] sm:ml-[50px]">
                    {/* Le CRFIM */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[0]}</p>
                    {/* Contenu */}
                    <p className="text-xs md:text-sm 2xl:w-[1480px] lg:w-[1000px]">
                        {Contenu[0]}
                    </p>
                </div>
            </div>
            <div className="grid mt-[30px]">
                <div className="mt-[30px] ml-[10px] sm:ml-[50px]">
                    {/* Les évènements clés */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2">{Titre[1]}</p>
                    {/* Contenu */}
                    <div className="grid md:grid-cols-2 grid-flow-row ">
                        <div className="mb-2">
                            <p className="text-blue-800 font-bold">
                                {t("infopages:faq.Par telephone ")}
                            </p>

                            <p className="text-xs md:text-sm">
                                +261 34 05 414 12
                            </p>
                        </div>
                        <div className="2xl:ml-[100px] mb-2">
                            <p className="text-blue-800 font-bold">
                                {t("infopages:faq.Par email ")}
                            </p>

                            <p className="text-xs md:text-sm">
                                assistante.communication@crfimmadagascar.org
                            </p>
                        </div>
                        <div className="mb-2">
                            <p className="text-blue-800 font-bold">
                                {/* {t("Sur les réseaux sociaux")} */}
                            </p>
                            <Link href="https://www.facebook.com/RMIFCenter">
                                <div className="grid grid-cols-2 text-xs md:text-sm">
                                <div>
                                    <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    
                                        <span className="bg-[url('/Ellipse4.png')] hover:text-white inline-flex h-[30px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
                                        
                                        </span>
                                    
                                    </button>
                                </div>
                                <div className="2xl:ml-[-350px] lg:ml-[-230px] mt-1 hover:text-blue-600">
                                    RMIFCenter
                                </div>
                                </div>
                            </Link>
                            <Link href="https://www.twiter.com/RMIFCenter">
                                <div className="grid grid-cols-2 text-xs md:text-sm">
                                <div>
                                    <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    
                                        <span className="bg-[url('/Ellipse5.png')] hover:text-white inline-flex h-[30px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
                                        
                                        </span>
                                    
                                    </button>
                                </div>
                                <div className=" 2xl:ml-[-350px] lg:ml-[-230px] mt-1 hover:text-blue-600">
                                    @rmifcenter-madagascar
                                </div>
                                </div>
                            </Link>
                        </div>
                        <div className="2xl:ml-[100px] mb-2">
                            <p className="text-blue-800 font-bold">
                                {t("infopages:faq.Adresse postale")}
                            </p>

                            <p className="text-xs md:text-sm 2xl:w-[800px] lg:w-[500px]">
                                {t("infopages:faq.Bâtiment CFIM, Rez de chaussé, Soanierana-Ankaditoho,Antananarivo, Madagascar ")}
                            </p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <div className="grid mt-[30px]">
                <div className="mt-[30px] ml-[10px] sm:ml-[50px]">
                    {/* Les perspectives futurs */}
                    {/* Titre */}
                    <p className="text-[20px] text-cyan-700 font-bold underline mb-2"> {Titre[2]}</p>
                    {/* Contenu */}
                    <div className="md:text-md text-xs">
                        <div>
                            <p className="text-blue-800">
                                {Contenu[1]}
                            </p>
                        </div>
                        <div>
                            <p className="text-blue-800 ">
                                {Contenu[2]}
                            </p>
                        </div>
                        <div>
                            <p className="text-blue-800 ">
                                {Contenu[3]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Questions-réposes */}
            <p className="font-bold text-lg mt-[50px] ml-[10px] sm:ml-[50px]">Questions</p>
            <div className="mt-[30px] ml-[10px] sm:ml-[50px] grid grid-row-3 gap-1 w-[80%]">
                <div>
                    {/*Photo de Profil*/}
                    <span className="bg-[url('/Connection.png')] inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                    </span>
                    {/* Titre */}
                    <p className="ml-[80px] mt-[-60px] font-bold text-xs md:text-sm">User1_Name@00</p>
                    <p className="ml-[80px] font-light text-xs md:text-sm w-[80%]"> {Question[0]}</p>
                    <p className="mt-[50px] ml-[80px] font-light text-xs">26/07/23</p>
                    <div className="grid grid-cols-2 grid-flow-row mt-[-15px] ml-[400px] w-[80%]">
                        <div>
                            <p className="font-light text-xs hover:text-sky-600">{t("infopages:faq.répondre")}</p>
                        </div>
                        {/* bouton j'aime */}
                        <div>
                            <button onClick={handleClick} className="w-30px h-30px ml-[-200px] mt-[-5px]">                        
                                <div className={`container ${liked ? 'bg-[url("/Coeur1.png")]' : 'bg-[url("/Coeur.png")]'}`}
                                    style={{width: '30px', height: '30px'}}>
                                </div>
                            </button>
                        </div>
                    </div>
                    
                </div>
                {/* Question-réponses */}
                <div className="ml-[10px] sm:ml-[50px] mt-1">
                    {/*Photo de Profil*/}
                    <span className="bg-[url('/rmifc.png')] inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                    </span>
                    {/* Titre */}
                    <p className="ml-[80px] mt-[-60px] font-bold text-xs md:text-sm">Crfim_madagascar</p>
                    <p className="ml-[80px] font-light text-xs md:text-sm w-[80%]">{Reponse[0]}</p>
                    <p className="mt-[50px] ml-[80px] font-light text-xs">26/07/23</p>
                    <div className="grid grid-cols-2 grid-flow-row mt-[-15px] ml-[400px]">
                        <div>
                            <p className="font-light text-xs hover:text-sky-600">{t("infopages:faq.répondre")}</p>
                        </div>
                        {/* bouton j'aime */}
                        <div>
                            <button onClick={handleClick1} className="w-30px h-30px ml-[-175px] mt-[-5px]">                        
                                <div className={`container ${liked1 ? 'bg-[url("/Coeur1.png")]' : 'bg-[url("/Coeur.png")]'}`}
                                    style={{width: '30px', height: '30px'}}>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Photo3 */}
                    
                </div>
            </div>
            <div className="ml-[10px] sm:ml-[50px] grid grid-row-3 gap-1 ">
            {displayedComments.length > 0 && (
                <div className="w-full">
                    {comments.map((comment, index) => (
                    <div key={index} className="mb-4 mt-[50px]">
                        <div>
                        {/*Photo de Profil*/}
                            <span className="bg-[url('/Connection.png')] inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                            </span>
                            {/* Nom de l'utilisateur */}
                            <p className="ml-[80px] mt-[-60px] font-bold text-xs md:text-sm">User2_Name@00</p>
                            {/* Commentaire */}
                            <p className="ml-[80px] font-light text-xs md:text-sm">{comment}</p>
                            {/* date */}
                            <p className="mt-[50px] ml-[80px] font-light text-xs">27/07/23</p>
                            {/* Action */}
                            <div className="grid grid-cols-2 grid-flow-row mt-[-15px] ml-[400px]">
                                <div>
                                    <p className="font-light text-xs hover:text-sky-600">{t("infopages:faq.répondre")}</p>
                                </div>
                                {/* bouton j'aime */}
                                <div>
                                    <button onClick={handleClick} className="w-30px h-30px ml-[-250px] mt-[-5px]">                        
                                        <div className={`container ${liked ? 'bg-[url("/Coeur1.png")]' : 'bg-[url("/Coeur.png")]'}`}
                                            style={{width: '30px', height: '30px'}}>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-[20px] ml-[10px] sm:ml-[50px]">
                            {/*Photo de Profil*/}
                                <span className="bg-[url('/rmifc.png')] inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                </span>
                                {/* Titre */}
                                <p className="ml-[80px] mt-[-60px] font-bold text-xs md:text-sm">Crfim_madagascar</p>
                                <p className="ml-[80px] font-light text-xs md:text-sm">{Reponse[1]}</p>
                                <p className="mt-[50px] ml-[80px] font-light text-xs">27/07/23</p>
                                {/* Action */}
                                
                                <div className="grid grid-cols-2 grid-flow-row mt-[-15px] ml-[400px]">
                                    <div>
                                        <p className="font-light text-xs hover:text-sky-600">{t("infopages:faq.répondre")}</p>
                                    </div>
                                    <div>
                                        <button onClick={handleClick1} className="w-30px h-30px ml-[-250px] mt-[-5px]">                        
                                            <div className={`container ${liked1 ? 'bg-[url("/Coeur1.png")]' : 'bg-[url("/Coeur.png")]'}`}
                                                style={{width: '30px', height: '30px'}}>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>
            {/* Commenter */}
            <div className="mt-4 flex">
                <div className="flex w-full items-center sm:space-x-2">
                    <input
                        type="text"
                        placeholder="Formuler une question..."
                        value={commentText}
                        onChange={handleCommentChange}
                        className="sm:ml-[10px] md:ml-[50px] w-[80%] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit" 
                        className="bg-blue-500 text-white font-bold p-2 rounded-full hover:bg-blue-700 text-xs sm:text-md"
                        onClick={handleCommentSubmit}
                    >
                        {t("infopages:faq.Envoyer")}
                    </button>
                </div>
            </div>
        </div>
    </TranslationsProvider>


    // </div>
  )
}
//export default appWithTranslation(infopages:faq);