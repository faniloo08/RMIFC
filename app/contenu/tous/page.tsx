"use client"

import {DataToTable} from '@/lib/api';
import { PaginationDemo } from '@/app/homecomp/pagination/pagination';
import React ,{ useState, useEffect } from 'react'
// import { NavBar } from '@/app/navbar/nav';
// import { MenuBar } from '@/app//menubar/menu';
// import Footer from "@/app/footer/footer";
import Link from 'next/link';
import { Search } from "lucide-react"
import Image from 'next/image';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import ReactMarkdown from 'react-markdown';

const Texte = [
    "Le Centre de fusion de l'information maritime (CRFIM) a été présenté 11e Foire Internationale de Madagascar (FIM) organisée à Antananarivo du 19 au 22 mai. Ce Centre a été mis en place dans le cadre des activités pilotées par la Commission de l'océan Indien (COI) dans le cadre du programme régional de sécurité maritime (MASE) sur financement européen. Installé à proximité de l'entrée du grand hall international, le stand présentant le CRFIM, ses objectifs et l'enjeu de l'échange d'information pour la sécurité et la sûreté maritimes a bénéficié d'une forte visibilité. ",
    "Le CRFIM permet d'échanger et de fusionner des informations maritimes sur une zone allant du cap de Bonne Esperance (Afrique du Sud) au détroit de Bab-El-Mandeb (Djibouti) afin de renforcer la sécurité et la sureté maritime dans la région, en luttant notamment contre les trafics et crimes commis en mer.",
]
function Contenus() {

    interface Article {
        titre: string;
        description: string;
        date: string;
        cover: string;
        article: string;
        slug: string;
        // Ajoutez d'autres propriétés si nécessaire
    }

    const [articles, setArticles] = useState<Article[]>([]);
    //Pour la pagination
    // const [articles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 4;


    // Change la page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    //Ces contenus vont être changés par les données dynamique du CMS
    useEffect(() => {
        const fetchDonnees = async () => {
            // Appelez la fonction Donnees pour obtenir les données
            const titres  = await DataToTable();

            setArticles(titres);

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

             const Date0 = titres[0].date
             console.log(Date0);
             setDate0(Date0);

             const Date3 = titres[3].date
             console.log(Date3);
             setDate3(Date3);
        };
        fetchDonnees();
    }, []);


    //Articles similaires
    const [Slug0, setSlug0] = useState('');
    const [Slug3, setSlug3] = useState('');
    const [Titre0, setTitre0] = useState('');
    const [Titre3, setTitre3] = useState('');
    const [Cover0, setCover0] = useState('');
    const [Cover3, setCover3] = useState('');
    const [Date0, setDate0] = useState('');
    const [Date3, setDate3] = useState('');
    //Test bouclage(2)
    const [Date] = useState('');
    const [Article] = useState('');


    //génération de l'apperçu : 
    const generatePreview = (content: string): string => {
        // Tu peux mettre ici la logique de génération d'aperçu que tu veux
        // Par exemple, tu peux simplement retourner les premiers 100 caractères du contenu
        const preview = content.slice(0, 100);
        return preview
    };
    
    
    // // Change la page
    // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    //Recherche d'articles
    const searchParams = useSearchParams();
    const { replace } = useRouter()
  
    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);
        if (searchParams) {
        const params = new URLSearchParams(searchParams || '');
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`/contenu?${params.toString()}`);
        };
    },2000);

  return (
    // <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        // <div className="bg-white bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
        <>    
        {/* Nav et menu bar */}
            {/* <div className="bg-cover grid grid-cols-1">
                <div className="mb-1"> 
                    <MenuBar/>
                </div>
                <div className="flex items-center justify-center"> 
                    <div className="fixed z-50">
                        <NavBar/>
                    </div> 
                </div>
            </div> */}
            
            {/* Les articles dynamiques */}
            <div className="grid md:grid-cols-3 grid-flow-row">
                <div className="col-span-2">
                    <div className="ml-[50px] mt-[30px] flex ">
                        <p className="md:text-[40px] lg:w-[630px] md:w-[300px] font-bold">
                            Tous les articles
                        </p>
                    </div>
                    {/* Articles */}
                    {articles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage).map((article, index) => (
                        <div key = {index} className="grid grid-cols-2 grid-flow-row ml-[50px] mt-[30px]">
                            <div className="lg:w-[650px] 2xl:w-[1200px]">
                                {/* cover */}
                                <img 
                                    src={article.cover}
                                    alt=""
                                    width={350} 
                                    height={180} 
                                    className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110 sm:w-[50%] md:w-[90%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] w-[50%]"
                                />
                            </div>
                            <div>
                                {/* Description */}
                                <div className="">
                                    <span className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{article.description}</span>
                                </div>
                                {/* Titre + Apperçu */}
                                <div className="" >
                                    <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                        {/*titre*/}
                                        <Link href={`/contenu?query=${article.slug}`}>
                                            {article.titre}
                                        </Link>
                                    </p>
                                    <p className="text-[13px] py-1 w-[320px]">
                                        {/* Apperçu */}
                                        <ReactMarkdown> 
                                            {generatePreview(article.article)}
                                        </ReactMarkdown>
                                        ...
                                    </p>
                                </div>
                                {/*Auteur + Date*/}
                                <div className="">
                                    <Image
                                    src="/Auteur1.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="inline-flex cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white"
                                    />
                                    <p className="mt-[-40px] ml-[50px] text-[11px]">Faraniaina Estherie</p>
                                    <p className="ml-[50px] font-light text-[11px]">{Date}</p>
                                </div>
                                {/* bouton de partage */}
                                <div className="ml-[200px] mt-[-25px]">
                                    <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        <Link href="/">
                                            <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                            
                                            </span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        )
                    )}
                    <div className="ml-[-300px] md:ml-[50px] mt-[30px]">
                        <PaginationDemo
                            articlesPerPage={articlesPerPage}
                            totalArticles={articles.length}
                            currentPage={currentPage}
                            paginate={paginate}

                        />
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
                    {/* Article1s similaires */}
                    <div className="mt-[70px] border-t pt-2">
                        <p className="font-bold text-lg">
                            Les plus populaires
                        </p>
                        <div className="mt-[30px]">
                            {/* Article1 */}
                            <div className="grid grid-cols-2 grid-flow-row ">
                                <div className="mr-2">
                                {/* cover */}
                                <img 
                                    src={Cover3}  
                                    alt="" 
                                    width={175} 
                                    height={150}/>
                                </div>
                                {/* cover */}
                                <div className="">
                                    <Link href={`/contenu?query=${Slug3}`} className="hover:text-[#00A2E8]">
                                        <p className="text-[13px] font-bold">
                                            {Titre3}
                                        </p>
                                        <p className=" text-[11px]">
                                            {Date3}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            {/* Article2 */}
                            <div className=" grid grid-cols-2 grid-flow-row mt-4">
                                <div className="mr-2">
                                {/* cover */}
                                <img 
                                    src={Cover0} 
                                    alt="" 
                                    width={175} 
                                    height={150}/>
                                </div>
                                {/* cover */}
                                
                                <div className="">
                                    <Link href={`/contenu?query=${Slug0}`} className="hover:text-[#00A2E8]">
                                        <p className="text-[13px] font-bold">
                                            {Titre0}
                                        </p>
                                        <p className="text-[11px]">
                                            {Date0}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recherche */}
            <div className="ml-[50px] grid grid-row-3 gap-1 ">
                <p className="font-bold text-lg mt-[90px] ">Rechercher des Articles</p>
                <div className="flex items-center" cmdk-input-wrapper="">
                    <input
                        className="block w-[95%] rounded-md border border-gray-200 py-[9px] text-sm placeholder:text-gray-500"
                        placeholder="Ex: operation-auxilium"
                        onChange={(e) => {
                        handleSearch(e.target.value);
                        }}
                        // defaultValue={searchParams.get('query')?.toString()}
                    />
                    <Search className="ml-[-50px] mr-2 h-4 w-4 shrink-0 opacity-50" />
                    
                </div>
            </div>

            {/* <div className="mt-[50px]">
                <Footer/>
            </div> */}
        </>  
        // </div>
    // </div>
  )
}

export default Contenus