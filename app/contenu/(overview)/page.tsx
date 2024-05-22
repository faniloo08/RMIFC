"use client"

import {DataToTable} from '../../../lib/api';
import { NavBar } from "../../common/navbar/nav";
import {MenuBuger} from "../../common/navbar/menuburger";
import React ,{ useState, useEffect } from 'react'

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Suspense } from 'react';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation'
//import { SkeletonCard } from '../skeleton';
import Image from 'next/image';

const Texte = [
    "Le Centre de fusion de l'information maritime (CRFIM) a été présenté 11e Foire Internationale de Madagascar (FIM) organisée à Antananarivo du 19 au 22 mai. Ce Centre a été mis en place dans le cadre des activités pilotées par la Commission de l'océan Indien (COI) dans le cadre du programme régional de sécurité maritime (MASE) sur financement européen. Installé à proximité de l'entrée du grand hall international, le stand présentant le CRFIM, ses objectifs et l'enjeu de l'échange d'information pour la sécurité et la sûreté maritimes a bénéficié d'une forte visibilité. ",
    "Le CRFIM permet d'échanger et de fusionner des informations maritimes sur une zone allant du cap de Bonne Esperance (Afrique du Sud) au détroit de Bab-El-Mandeb (Djibouti) afin de renforcer la sécurité et la sureté maritime dans la région, en luttant notamment contre les trafics et crimes commis en mer.",
]

const Galerie = "Galerie d'images";


function Contenus(

    {
        searchParams,
    }: {
        searchParams?: {
          query?: string;
          page?: string;
        };
    }) 
    {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    
    //Ces contenus vont être changés par les données dynamique du CMS
    useEffect(() => {
        const fetchDonnees = async () => {
            // Appelez la fonction Donnees pour obtenir les données
            const titres  = await DataToTable();
            // const slug = titres[4].slug;
            // console.log(slug);
            // setSlug(slug); 

            //Pour les articles similaires
            const Slug0 = titres[0].slug
            console.log(Slug0);
            setSlug0(Slug0);

            const Slug3 = titres[3].slug
            console.log(Slug3);
            setSlug3(Slug3);

            const Titre0 = titres[0].titre
            console.log(Titre0);
            setTitre0(Titre0);

            const Titre3 = titres[3].titre
            console.log(Titre3);
            setTitre3(Titre3);

            const Cover0 = titres[0].cover
            console.log(Cover0);
            setCover0(Cover0);

            const Cover3 = titres[3].cover
            console.log(Cover3);
            setCover3(Cover3);

            const Article0 = titres[0].article
            console.log(Article0);
            setArticle0(Article0);

            const Article3 = titres[3].article
            console.log(Article3);
            setArticle3(Article3);

            //pour les exploitation de slug
            var slugs = [];
            //Tirons tous les slugs : 
            
            for (var i = 0; i < titres.length; i++) {
                var slugart = titres[i].slug; 
                //setSlugart(slugart);
                slugs.push(slugart);
            }
            //console.log("slugs des articles : ", slugs);

            //Testons à quel slug correspond les urlparams
            for (var i = 0; i < slugs.length; i++) {
                if (query == slugs[i]) {
                    console.log("le slug du lien correspond au ",i+1,"ème slug");

                    //Fetcher les données correspondants

                    //Exemple de titre  
                    const grosTitre  = titres[i].titre;
                    console.log(grosTitre);
                    setGrosTitre(grosTitre);

                    //Exemple de description
                    const descri = titres[i].description;
                    //console.log(descri);
                    setDescri(descri);

                    //Exemple de date
                    const date = titres[i].date
                    //console.log(date);
                    setDate(date);

                    //Exemple de contenu
                    const article = titres[i].article;
                    //console.log(article);
                    setArticle(article);

                    //Couverture
                    const couverture = titres[i].cover;
                    //console.log(couverture);
                    setCouverture(couverture);


                    //Gallerie d'images
                    if (Array.isArray(titres[i].gallerie)) {
                        const gallerie = titres[i].gallerie;
                        console.log(gallerie);
                        setGallerie(gallerie);

                    } else {
                        console.error("titres[i].gallerie n'est pas un tableau :", titres[i].gallerie);
                    }
                    break;
                    //Forcer l'arret de la boucle
                    break;
                }
            }

           
        };
        fetchDonnees();
    }, []);
    const [grosTitre, setGrosTitre] = useState('');
    const [descri, setDescri] = useState('');
    const [date, setDate] = useState('');
    const [article, setArticle] = useState('');
    const [couverture, setCouverture] = useState('');
    const [gallerie, setGallerie] = useState<string[]>([]);
    const [Slug0, setSlug0] = useState('');
    const [Slug3, setSlug3] = useState('');
    const [Titre0, setTitre0] = useState('');
    const [Titre3, setTitre3] = useState('');
    const [Cover0, setCover0] = useState('');
    const [Cover3, setCover3] = useState('');
    const [Article0, setArticle0] = useState('');
    const [Article3, setArticle3] = useState('');

    //User interactions
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

    //génération de l'apperçu : 
    const generatePreview = (content: string): string => {
        // Tu peux mettre ici la logique de génération d'aperçu que tu veux
        // Par exemple, tu peux simplement retourner les premiers 100 caractères du contenu
        const preview = content.slice(0, 50);
        return preview
    };

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
    <>
        <div className="bg-white bg-center bg-no-repeat items-center justify-center bg-cover">
            <div className="bg-cover grid grid-cols-1">
                <div className="flex items-center justify-center"> 
                    <div className="fixed z-50">
                        {isMobile ? <MenuBuger/> : <NavBar />}
                    </div> 
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-flow-row">
                {/* Article */}
                <div className="col-span-2">
                    <div className=" md:ml-[50px] mt-[30px] flex ">
                        <p className="text-[25px] md:text-[40px] 2xl:w-[1000px] lg:w-[630px] md:w-[300px] font-bold">
                            {/* Titre de l'article cliqué */}
                            {grosTitre}
                        </p>
                    </div>
                    <div className="grid grid-cols-2  md:ml-[50px] space-x-[20px]">
                        <div >
                            {/* Catégorie */}
                            <Link href="/contenu/tous">
                                <button className="bg-gradient-to-r from-[#51C0FF] to-[#142356]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{descri}</button>
                            </Link>
                        </div>
                        <div>
                            {/* Date */}
                            <p className="ml-[250px] sm:ml-[0px] mt-[5px] font-light text-[13px]">{date}</p>
                        </div>
                    </div>
                    <div className=" md:ml-[50px] mt-[30px]">
                        {/* Cover */}
                        <img src={`${couverture}`} alt="" width={600} height={350} className="2xl:w-[90%]"/>
                        {/* <p className="mt-1 text-xs mb-1 text-center w-[300px]">
                            Signature en ligne du Memorandum d'entente: Auxillum worldwide, CRCO, et  CRFIM joinent leurs forces, 19 dec 2023, Madagascar, Antananarivo.
                        </p> */}
                    </div>
                    <div className="items-center justify-center">
                        <div className="mt-[30px] text-xs lg:text-[15px] md:text-md md:ml-[50px] 2xl:w-[920px] lg:w-[600px] md:w-[300px]">
                            {/* Article */}
                            <p>
                                <Suspense fallback={<Loading />}>
                                    <ReactMarkdown> 
                                        {article}
                                    </ReactMarkdown>
                                </Suspense>
                            </p>
                        </div>
                    
                    </div>
                </div>
                <div className="hidden md:block mt-[50px] mr-[50px]">
                    <Image 
                    src="/Piraterie.jpg" 
                    alt="" 
                    width={450} 
                    height={250} 
                    className="hover:scale-110"/>
                    {/* Texte */}
                    <div className="mt-[30px] lg:w-[330px] md:w-[150px] text-[15px]">
                        <p>
                            {Texte[0]}
                        </p>
                        <p className="mt-2">
                            {Texte[1]}
                        </p>
                    </div>
                    {/* Articles similaires */}
                    <div className="mt-[70px] border-t pt-2">
                        <p className="font-bold text-lg">
                            Articles similaires
                        </p>
                        <div className="mt-[50px] grid grid-cols-2">
                            {/* Article1 */}
                            <div className="mr-2">
                                {/* cover */}
                                <img
                                src={Cover3}
                                alt="" 
                                width={195} 
                                height={175}/>
                                <div className="mt-1">
                                    <Link href={`/contenu?query=${Slug3}`} className="hover:text-[#00A2E8]">
                                        <p className="text-[13px] font-bold">
                                            {Titre3}
                                        </p>
                                        <p className=" text-[11px]">
                                            <ReactMarkdown> 
                                                {generatePreview(Article3)}
                                            </ReactMarkdown>
                                            ...
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            {/* Article2 */}
                            <div className="ml-2">
                                {/* cover */}
                                <img 
                                src={Cover0} 
                                alt="" 
                                width={195} 
                                height={175}/>
                                <div className="mt-1">
                                    <Link href={`/contenu?query=${Slug0}`} className="hover:text-[#00A2E8]">
                                        <p className="text-[13px] font-bold">
                                            {Titre0}
                                        </p>
                                        <p className="text-[11px]">
                                            <ReactMarkdown> 
                                                {generatePreview(Article0)}
                                            </ReactMarkdown>
                                            ...
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className=" md:ml-[50px] mt-[30px]">
                    {/*Auteur*/}
                    <Image
                    src="/Auteur2.png"
                    alt=""
                    width={60}
                    height={60}
                    className="inline-flex cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white"
                    />
                    {/* Nom */}
                    <p className="mt-[-50px] ml-[70px] text-[13px] font-bold">Faraniaina Estherie</p>
                    {/* Poste */}
                    <p className="ml-[70px] font-light text-[11px]">Assistante en communication</p>
            </div>
            {/* Bouton de partage */}
            <div className=" relative ml-[550px] mt-[-50px]">
                <button className="hover:text-[#00A2E8]  inline-flex drop-shadow relative overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <Link href="/">
                    <div className="grid grid-flow-col grid-cols-2">
                        <div>
                            <p className="text-sm">partager</p>
                        </div>
                        <div>
                            <span className="hover:bg-[url('/share1.png')] ml-[-25px] bg-[url('/share.png')] hover:text-white inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
                            
                            </span>
                        </div>
                    </div>    
                </Link>

                </button>
            </div>
            {/* Photos liées à l'article */}
            <p className="font-bold text-lg mt-[50px]  md:ml-[50px]">{Galerie}</p>
            <div className="2xl:mt-[50px] lg:mt-[30px] 2xl:ml-[180px] lg: md:ml-[50px] grid md:grid-cols-3 gap-1 items-center justify-center">
                {gallerie.length > 0 ? (
                    gallerie.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={300}
                            height={250}
                            className="hover:scale-110"
                        />
                    ))
                ) : (
                    <p>Aucune image trouvée</p>
                )}
            </div> 

            {/* Commentaires */}
            <div className=" md:ml-[50px] grid grid-row-3 gap-1 ">
                <p className="font-bold text-lg mt-[90px] mb-[50px]">Commentaires</p>
                {displayedComments.length > 0 && (
                <div className="w-full">
                    {comments.map((comment, index) => (
                    <div key={index} className="mb-4">
                        <div>
                            {/*Photo de Profil*/}
                            <Image
                            src="/Connection.png"
                            alt=""
                            width={50}
                            height={50}
                            className="inline-flex cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white"
                            />
                            {/* Nom de l'utilisateur */}
                            <p className="ml-[80px] mt-[-60px] font-bold text-sm">User_Name@00</p>
                            {/* Commentaire */}
                            <p className="ml-[80px] font-light text-sm">{comment}</p>
                            {/* date */}
                            <p className="mt-[50px] ml-[80px] font-light text-xs">27/07/23</p>
                            {/* Action */}
                            <div className="grid grid-cols-2 grid-flow-row mt-[-15px] ml-[400px]">
                                <div>
                                    <p className="font-light text-xs hover:text-sky-600">répondre</p>
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
                            <div className="mt-[20px]  md:ml-[50px]">
                                {/*Photo de Profil*/}
                                <Image
                                src="/rmifc.png"
                                alt=""
                                width={50}
                                height={50}
                                className="inline-flex cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white"
                                />
                                {/* Titre */}
                                <p className="ml-[80px] mt-[-60px] font-bold text-sm">Crfim_madagascar</p>
                                <p className="ml-[80px] font-light text-sm">Le CRFIM vous remercie</p>
                                <p className="mt-[50px] ml-[80px] font-light text-xs">27/07/23</p>
                                {/* Action */}
                                
                                <div className="grid grid-cols-2 grid-flow-row mt-[-15px] ml-[400px]">
                                    <div>
                                        <p className="font-light text-xs hover:text-sky-600">répondre</p>
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
            <div className="mt-[30px] flex">
                <div className="flex w-full items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Votre Commentaire"
                        value={commentText}
                        onChange={handleCommentChange}
                        className=" md:ml-[50px] 2xl:w-[1400px] lg:w-[900px] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold p-2 rounded-full hover:bg-blue-700"
                        onClick={handleCommentSubmit}
                    >
                        Commenter
                    </button>
                </div>
            </div>
        </div>
    </>
    // </div>
  )
}

export default Contenus

function Loading() {
    return <h2>🌀 Loading...</h2>;
}