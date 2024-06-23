"use client"

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import {DataToTable} from '@/lib/api';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'next-i18next';
import { usePathname} from 'next/navigation';

//Partie dynamique,interaction permanente avec le back-end
function Articles() {
    const [Titre1, setTitre1] = useState('');
    const [Titre2, setTitre2] = useState('');
    const [Titre3, setTitre3] = useState('');
    const [Descri1, setDescri1] = useState('');
    const [Descri2, setDescri2] = useState('');
    const [Descri3, setDescri3] = useState('');
    const [Article1, setArticle1] = useState('');
    const [Article2, setArticle2] = useState('');
    const [Article3, setArticle3] = useState('');
    const [Date1, setDate1] = useState('');
    const [Date2, setDate2] = useState('');
    const [Date3, setDate3] = useState('');
    const [Cover1, setCover1] = useState('');
    const [Cover2, setCover2] = useState('');
    const [Cover3, setCover3] = useState('');
    const [Slug1, setSlug1] = useState('');
    const [Slug2, setSlug2] = useState('');
    const [Slug3, setSlug3] = useState('');

    const pathname = usePathname();
    useEffect(() => {
        const fetchDonnees = async () => {
            // Appelez la fonction Donnees pour obtenir les données
            const titres  = await DataToTable(pathname);

            if (titres && titres.length >= 3) {
                setTitre1(titres[0].titre || '');
                setTitre2(titres[2].titre || '');
                setTitre3(titres[3].titre || '');

                setDescri1(titres[0].description || '');
                setDescri2(titres[2].description || '');
                setDescri3(titres[3].description || '');

                setArticle1(titres[0].article || '');
                setArticle2(titres[2].article || '');
                setArticle3(titres[3].article || '');

                setDate1(titres[0].date || '');
                setDate2(titres[2].date || '');
                setDate3(titres[3].date || '');

                setCover1(titres[0].cover || '');
                setCover2(titres[2].cover || '')
                setCover3(titres[3].cover || '')

                setSlug1(titres[0].slug || '');
                setSlug2(titres[2].slug || '');
                setSlug3(titres[3].slug || '');
            }
        };
        fetchDonnees();
    }, []);
    
    //génération de l'apperçu : 
    const generatePreview = (content: string): string => {
        // Tu peux mettre ici la logique de génération d'aperçu que tu veux
        // Par exemple, tu peux simplement retourner les premiers 100 caractères du contenu
        const preview = content.slice(0, 100);
        return preview
    };


    const handleClick = () => {
        
    };
    // const { t } = useTranslation('common');
  return (
    <div className="flex items-center justify-center">
        {/* lg:grid-cols-[.75fr_1fr] */}
        <div className="md:grid grid-cols-2 grid-flow-row gap-3 p-2 ">
            {/* Article à la une */}
            <div className="col-span-1 mb-4">
                {/* Articles.cover */}
                <img 
                src={Cover1} 
                alt=""
                width={450}
                height={350}
                className="xl:w-[95%] rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"
                loading="lazy"/>
                <div className="flex items-center justify-center" >
                    {/* Article.Catégorie */}
                    <div className=" drop-shadow-lg w-[80%] md:w-[75%] lg:w-[70%] xl:w-[60%] h-[245px] bg-white text-black 2xl:mt-[-65px] lg:mt-[-70px] md:mt-[-120px] text-center rounded-[25px] relative justify-center items-center py-2"style={{}}>
                       <div className="flex items-center justify-center mb-1">
                            <div className="flex items-center justify-center w-[80%] relative md:mt-[-20px]">
                                <div className="bg-gradient-to-r from-[#DEE218] to-[#E37C1C]  px-4 py-1 text-xs md:text-sm text-white font-semibold rounded-full hover:text-[#DEE218] hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri1}</div>
                            </div>
                       </div>
                        <div>
                            <p className="hover:underline text-lg justify-center items-center font-bold py-1 md:py-4" onClick={handleClick}>
                                {/*Articles phares title*/}
                                <Link href ={`/contenu?query=${Slug1}`}>
                                    {Titre1}
                                </Link>
                            </p>
                            <p className="text-center p-3 mt-[-25px] text-xs md:text-[14px]">
                                {/* Articles.description */}
                                <ReactMarkdown> 
                                    {generatePreview(Article1)}
                                </ReactMarkdown>
                                ...
                            </p>
                        </div>
                        <div>
                            {/*Auteur*/}
                            <Image
                            src="/Auteur1.png"
                            alt=""
                            width={40}
                            height={40}
                            className="ml-[-200px] inline-flex cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white"
                            />
                            <p className="mt-[-40px] text-[13px]">Faraniaina Estherie</p>
                            <p className="ml-[-37px] font-light text-sm">{Date1}</p>
                        </div>
                        <div className="ml-[170px] mt-[-25px]">
                            <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" id="share1">
                                <Link href="/">
                                    <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>  
                </div>
            </div>
            <div>
                {/*Art2*/}
                <div className="grid grid-cols-2 grid-flow-row lg:space-x-[-30px] mb-3 2xl:mb-[-30px]">
                    <div className="">
                        <img 
                            src={Cover2}
                            alt=""
                            width={225}
                            height={165}
                            className=" 2xl:w-[80%] lg:w-[85%] 2xl:h-200px lg:h-165px rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="relative ">
                        <div className="relative w-[50%] text-center 2xl:mb-[20px] bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-[14px] text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri2}</div>
                        <div className="2xl:mb-[20px]">
                            <p className=" mt-[10px] hover:underline text-[13px] justify-center items-center font-bold" >
                                {/*Articles phares title*/}
                                <Link href={`/contenu?query=${Slug2}`}>
                                    {Titre2}
                                </Link>
                            </p>
                            <p className="text-[11px] py-1 w-[90%]">
                                {/* Articles.description */}
                                <ReactMarkdown> 
                                    {generatePreview(Article2)}
                                </ReactMarkdown>
                                ...
                            </p>
                        </div>
                        <div>
                            {/*Auteur*/}
                            <Image
                            src="/Auteur1.png"
                            alt=""
                            width={40}
                            height={40}
                            className="inline-flex  cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white"
                            />
                            <p className="mt-[-40px] ml-[50px] text-[11px]">Faraniaina Estherie</p>
                            <p className="ml-[50px] font-light text-[11px]">{Date2}</p>
                        </div>
                        <div className="ml-[170px] mt-[-25px]">
                            <button className="drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" id="share2">
                                <Link href="/">
                                    <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                    
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/*Art3*/}
                <div className="grid grid-cols-2 grid-flow-row lg:space-x-[-30px] mb-1 2xl:mb-[-30px]">
                    <div>
                        <img
                            src={Cover3}
                            alt="" 
                            width={225}
                            height={165}
                            className=" 2xl:w-[80%] lg:w-[85%] 2xl:h-200px lg:h-165px rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"
                            loading="lazy"
                        />
                    </div>
                    <div className="relative">
                    <div className="relative w-[50%] text-center 2xl:mb-[20px] bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-[14px] text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri3}</div>
                        <div className="2xl:mb-[20px]" >
                            <p className=" mt-[10px] hover:underline text-[13px] justify-center items-center font-bold" >
                                {/*Articles phares title*/}
                                <Link href={`/contenu?query=${Slug3}`}>
                                    {Titre3}
                                </Link>
                            </p>
                            <p className="text-[11px] py-1 lg:w-[360px] 2xl:w-[550px]">
                                {/* Articles.description */}
                                <ReactMarkdown> 
                                    {generatePreview(Article3)}
                                </ReactMarkdown>
                                ...
                            </p>
                        </div>
                        <div className="">
                            {/*Auteur*/}
                            <Image
                            src="/Auteur1.png"
                            alt=""
                            width={40}
                            height={40}
                            className="inline-flex  cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white"
                            />
                            <p className="mt-[-40px] ml-[50px] text-[11px]">Faraniaina Estherie</p>
                            <p className="ml-[50px] font-light text-[11px]">{Date3}</p>
                        </div>
                        <div className="ml-[170px] mt-[-25px]">
                            <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" id="share3">
                                <Link href="/">
                                    <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                    
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Autres artciles */}
    </div>
  )
}

export default Articles