"use client"

import React, {useState, useEffect} from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Donnees } from '@/lib/donnes';

//Partie dynamique,interaction permanente avec le back-end
function Articles() {
    useEffect(() => {
        const fetchDonnees = async () => {
            // Appelez la fonction Donnees pour obtenir les données
            const titres  = await Donnees();

            //Exemple de titre  
            const Titre1  = titres[1].titre;
            console.log(Titre1);
            setTitre1(Titre1);

            const Titre2  = titres[2].titre;
            console.log(Titre2);
            setTitre2(Titre2);

            const Titre3  = titres[3].titre;
            console.log(Titre3);
            setTitre3(Titre3);

            //Exemple de Descri1ption
            const Descri1 = titres[1].description;
            console.log(Descri1);
            setDescri1(Descri1);

            const Descri2 = titres[2].description;
            console.log(Descri2);
            setDescri2(Descri2);

            const Descri3 = titres[3].description;
            console.log(Descri3);
            setDescri3(Descri3);

            //Exemple de Date1
            const Date1 = titres[1].date
            console.log(Date1);
            setDate1(Date1);

            const Date2 = titres[2].date
            console.log(Date2);
            setDate2(Date2);
            
            const Date3 = titres[3].date
            console.log(Date3);
            setDate3(Date3);

            //Exemple de slug
            const slug = titres[1].slug
            console.log(slug);
            setSlug(slug);
        };
        fetchDonnees();
    }, []);
    const [Titre1, setTitre1] = useState('');
    const [Titre2, setTitre2] = useState('');
    const [Titre3, setTitre3] = useState('');
    const [Descri1, setDescri1] = useState('');
    const [Descri2, setDescri2] = useState('');
    const [Descri3, setDescri3] = useState('');
    const [Date1, setDate1] = useState('');
    const [Date2, setDate2] = useState('');
    const [Date3, setDate3] = useState('');
    const  [slug, setSlug] = useState('');
    // const [Article1, setArticle1] = useState([]);
    // const [Article2, setArticle2] = useState([]);
    // const [Article3, setArticle3] = useState([]);
    // useEffect(() => {
    //     const fetchDonnees = async () => {
    //         try {
    //             const data = await Donnees();
    //             // Tri des articles par date
    //             const sortedArticles = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    //             // Obtenir les trois articles les plus récents
    //             const [Article1, Article2, Article3] = sortedArticles.slice(0, 3);
    //             // Mettre à jour les états correspondant aux articles
    //             setArticle1(Article1);
    //             setArticle2(Article2);
    //             setArticle3(Article3);
    //         } catch (error) {
    //             console.error("Erreur lors de la récupération des données:", error);
    //         }
    //     };
    //     fetchDonnees();
    // }, []);

    const router = useRouter();

    const handleClick = () => {
        // Modifier l'URL avec un query spécifique lorsque le lien est cliqué
        const searchParams = useSearchParams();
        const pathname = usePathname();
        const { replace } = useRouter()
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        params.set('query', slug);
        replace(`${pathname}?${params.toString()}`)
    };
  return (
    <div>
         <ul className="grid gap-3 p-2  lg:grid-cols-[.75fr_1fr]">
           {/* {Article1.map((article, index) => ( 
            <li className="row-span-2" key={index}>*/}
            <li className="row-span-2">
                {/* Article à la une */}
                <div className='ml-3 justify-center items-center' >
                    {/* Articles.cover */}
                    <img src='/Art1(1).png' className="lg:w-[100%] 2xl:w-[95%] rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"/>

                    <div className='lg:ml-[-10px] 2xl:ml-[50px]' >
                        {/* Article.Catégorie */}

                        <div className="drop-shadow-lg 2xl:w-[400px] lg:w-[330px] h-[225px] bg-white text-black mt-[-50px] md:ml-[60px] md:mt-[-150px] text-center rounded-[25px] relative justify-center items-center py-2"style={{}}>
                            <div className='md:hidden relative'>
                                <button className="bg-gradient-to-r from-[#DEE218] to-[#E37C1C]  px-4 py-1 text-sm text-white font-semibold rounded-full hover:text-[#DEE218] hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri1}</button>
                            </div>
                            <div >
                                <p className="hover:underline text-lg justify-center items-center font-bold py-4" onClick={handleClick}>
                                    {/*Articles phares title*/}
                                    <Link href="/contenu">
                                        {Titre1}
                                    </Link>
                                </p>
                                <p className='text-center p-3 mt-[-25px] text-xs md:text-[14px]'>
                                    {/* Articles.description */}
                                    Du 20 au 26 avril 2023, les Centres Régionaux de Fusion de l’Information Maritime (CRFIM) et ....
                                </p>
                            </div>
                            <div>
                                {/*Auteur*/}
                                <span className="ml-[-200px] bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                </span>
                                <p className='mt-[-50px] text-[13px]'>Faraniaina Estherie</p>
                                <p className='ml-[-37px] font-light text-sm'>{Date1}</p>
                            </div>
                            <div className='ml-[170px] mt-[-20px]'>
                                <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <Link href="/">
                                        <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                        
                                        </span>
                                    </Link>
                                </button>
                            </div>
                           
                        </div>  
                    </div>
                    {/* Article.Catégorie */}
                    <div className='hidden md:block relative 2xl:ml-[185px] lg:ml-[100px] lg:mt-[-240px]'>
                        <button className="bg-gradient-to-r from-[#DEE218] to-[#E37C1C]  px-4 py-1 text-sm text-white font-semibold rounded-full hover:text-[#DEE218] hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri1}</button>
                    </div>
                </div>
            </li>
            {/* ))} */}
            {/* {Article2.map((article, index) => ( 
            <li key={index}>*/}
            <li>
                {/*Art2*/}
                <div className='mb-1'>
                    <img src='/Art3(1).png' className=" 2xl:w-[33%] lg:w-225px 2xl:h-200px lg:h-165px rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"/>
                    <div className='relative 2xl:ml-[330px] lg:ml-[250px] 2xl:mt-[-210px] lg:mt-[-165px]'>
                        <button className="relative 2xl:mb-[20px] bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri2}</button>
                        <div className='2xl:mb-[20px]'>
                            <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                {/*Articles phares title*/}
                                <Link href="/contenu">
                                    {Titre2}
                                </Link>
                            </p>
                            <p className='text-[13px] py-1 2xl:w-[400px]lg:w-[320px]'>
                                {/* Articles.description */}
                                Entrevue avec l'équipe du CRFIM et la délégation du FBI.La délégation de l’ambassade des États-Unis ....
                            </p>
                        </div>
                        <div>
                            {/*Auteur*/}
                            <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                            </span>
                            <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                            <p className='ml-[50px] font-light text-[11px]'>{Date2}</p>
                        </div>
                        <div className='ml-[170px] mt-[-25px]'>
                            <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <Link href="/">
                                    <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                    
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            {/* ))} */}
            {/* {Article3.map((article, index) => ( 
            <li className='' key={index}>*/}
            <li className=''>
                {/*Art3*/}
                <div className='2xl:mt-[50px]'>
                    <img src='/Art2(1).png' className="2xl:w-[33%] lg:w-225px h-165px rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"/>
                    <div className='relative  2xl:ml-[330px] lg:ml-[250px] 2xl:mt-[-210px] lg:mt-[-165px] 2xl:mb-[20px] '>
                        <button className="bg-gradient-to-r 2xl:mb-[20px] from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri3}</button>
                        <div className='2xl:mb-[20px]' >
                            <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                {/*Articles phares title*/}
                                <Link href="/contenu">
                                    {Titre3}
                                </Link>
                            </p>
                            <p className='text-[13px] py-1 lg:w-[360px] 2xl:w-[550px]'>
                                {/* Articles.description */}
                                Les douanes du Qatar saisissent 90 kg de haschisch dissimulés dans une cargaison de pastèques ....
                            </p>
                        </div>
                        <div className=''>
                            {/*Auteur*/}
                            <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                            </span>
                            <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                            <p className='ml-[50px] font-light text-[11px]'>{Date3}</p>
                        </div>
                        <div className='ml-[170px] mt-[-25px]'>
                            <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <Link href="/">
                                    <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                    
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                
            </li>
            {/* ))} */}
        </ul>
        
        
        {/* Autres artciles */}

    </div>
  )
}

export default Articles