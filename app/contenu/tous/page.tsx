"use client"

// import {DataToTable} from '../../lib/api';
import { PaginationDemo } from '@/app/pagination/pagination';
import React ,{ useState } from 'react'
import { NavBar } from '@/app/navbar/nav';
import { MenuBar } from '@/app//menubar/menu';
import Footer from "@/app/footer/footer";
import Link from 'next/link';
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"


function Contenus() {
    //Ces contenus vont être changés par les données dynamique du CMS
    // const GrosTitre = Donnees
    const [liked, setLiked] = useState(false);
    const [liked1, setLiked1] = useState(false);
    const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>('');
    
    const handleCommentChange = (e) => {
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
  return (
    <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        <div className="bg-white bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
            <div className="bg-cover grid grid-cols-1">
                <div> 
                    <MenuBar/>
                </div>
                <div className="flex items-center justify-center"> 
                    <NavBar/>
                </div>
                <div className='grid grid-cols-3 grid-flow-row'>
                    {/* Article */}
                    <div className='col-span-2'>
                        <div className="ml-[50px] mt-[30px] flex ">
                            <p className='text-[40px] lg:w-[630px] md:w-[300px] font-bold'>
                                {/* Titre de l'article cliqué */}
                                Tous les articles
                            </p>
                        </div>
                        {/* 1 */}
                        <div className='ml-[50px] mt-[30px]'>
                            <img src='/A2.jpg' width={350} height={200} className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110"/>
                            <div className='relative ml-[380px] mt-[-190px]'>
                                <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">Arms Traficking</button>
                            </div>
                            <div className='ml-[380px]' >
                                <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                    {/*Articles phares title*/}
                                    <Link href="/contenu">
                                        Opération Qatar
                                    </Link>
                                </p>
                                <p className='text-[13px] py-1 w-[320px]'>
                                    {/* Articles.description */}
                                    Les douanes du Qatar saisissent 90 kg de haschisch dissimulés dans une cargaison de pastèques ....
                                </p>
                            </div>
                            <div className='ml-[380px]'>
                                {/*Auteur*/}
                                <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                </span>
                                <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                                <p className='ml-[50px] font-light text-[11px]'>20/04/23</p>
                            </div>
                            <div className='ml-[600px] mt-[-25px]'>
                                <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <Link href="/">
                                        <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                        
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='ml-[50px] mt-[30px]'>
                            <img src='/A3.jpg' width={350} height={200} className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110"/>
                            <div className='relative ml-[380px] mt-[-190px]'>
                                <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">Arms Traficking</button>
                            </div>
                            <div className='ml-[380px]' >
                                <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                    {/*Articles phares title*/}
                                    <Link href="/contenu">
                                        Opération Qatar
                                    </Link>
                                </p>
                                <p className='text-[13px] py-1 w-[320px]'>
                                    {/* Articles.description */}
                                    Les douanes du Qatar saisissent 90 kg de haschisch dissimulés dans une cargaison de pastèques ....
                                </p>
                            </div>
                            <div className='ml-[380px]'>
                            {/*Auteur*/}
                                <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                </span>
                                <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                                <p className='ml-[50px] font-light text-[11px]'>20/04/23</p>
                            </div>
                            <div className='ml-[600px] mt-[-25px]'>
                                <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <Link href="/">
                                        <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                        
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='ml-[50px] mt-[30px]'>
                            <img src='/B1.jpg' width={350} height={200} className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110"/>
                            <div className='relative ml-[380px] mt-[-190px]'>
                                <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">Arms Traficking</button>
                            </div>
                            <div className='ml-[380px]' >
                                <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                    {/*Articles phares title*/}
                                    <Link href="/contenu">
                                        Opération Qatar
                                    </Link>
                                </p>
                                <p className='text-[13px] py-1 w-[320px]'>
                                    {/* Articles.description */}
                                    Les douanes du Qatar saisissent 90 kg de haschisch dissimulés dans une cargaison de pastèques ....
                                </p>
                            </div>
                            <div className='ml-[380px]'>
                                {/*Auteur*/}
                                <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                </span>
                                <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                                <p className='ml-[50px] font-light text-[11px]'>20/04/23</p>
                            </div>
                            <div className='ml-[600px] mt-[-25px]'>
                                <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <Link href="/">
                                        <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                        
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className='ml-[50px] mt-[30px]'>
                            <img src='/gris.png' width={350} height={200} className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110"/>
                            <div className='relative ml-[380px] mt-[-190px]'>
                                <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">Arms Traficking</button>
                            </div>
                            <div className='ml-[380px]' >
                                <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                    {/*Articles phares title*/}
                                    <Link href="/contenu">
                                        Opération Qatar
                                    </Link>
                                </p>
                                <p className='text-[13px] py-1 w-[320px]'>
                                    {/* Articles.description */}
                                    Les douanes du Qatar saisissent 90 kg de haschisch dissimulés dans une cargaison de pastèques ....
                                </p>
                            </div>
                            <div className='ml-[380px]'>
                                {/*Auteur*/}
                                <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                </span>
                                <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                                <p className='ml-[50px] font-light text-[11px]'>20/04/23</p>
                            </div>
                            <div className='ml-[600px] mt-[-25px]'>
                                <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <Link href="/">
                                        <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                        
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className='ml-[50px] mt-[30px]'>
                            <PaginationDemo />
                        </div>
                    </div>
                    <div className='mt-[50px] mr-[50px]'>
                        <img src="/Piraterie.jpg" alt="" width={450} height={250} className='hover:scale-110'/>
                        {/* Texte */}
                        <div className='mt-[30px] lg:w-[330px] md:w-[150px] text-[15px]'>
                            <p>
                                Le Centre de fusion de l’information maritime (CRFIM) a été présenté 11e Foire Internationale de Madagascar (FIM) organisée à Antananarivo du 19 au 22 mai. Ce Centre a été mis en place dans le cadre des activités pilotées par la Commission de l’océan Indien (COI) dans le cadre du programme régional de sécurité maritime (MASE) sur financement européen. Installé à proximité de l’entrée du grand hall international, le stand présentant le CRFIM, ses objectifs et l’enjeu de l’échange d’information pour la sécurité et la sûreté maritimes a bénéficié d’une forte visibilité. 
                            </p>
                            <p className='mt-2'>
                                Le CRFIM permet d’échanger et de fusionner des informations maritimes sur une zone allant du cap de Bonne Esperance (Afrique du Sud) au détroit de Bab-El-Mandeb (Djibouti) afin de renforcer la sécurité et la sureté maritime dans la région, en luttant notamment contre les trafics et crimes commis en mer.
                            </p>
                        </div>
                        {/* Articles similaires */}
                        <div className='mt-[70px] border-t pt-2'>
                            <p className='font-bold text-lg'>
                                Les plus populaires
                            </p>
                            <div className='mt-[30px]'>
                                {/* Article1 */}
                                <div className='grid grid-cols-2 grid-flow-row '>
                                    <div className='mr-2'>
                                        <img src="/A2.jpg" alt="" width={175} height={150}/>
                                    </div>
                                    {/* cover */}
                                    <div className=''>
                                        <Link href="/contenu" className='hover:text-[#00A2E8]'>
                                            <p className='text-[13px] font-bold'>
                                                EXERCICE CUTLASS EXPRESS 2023 du 6 au 17 mars
                                            </p>
                                            <p className=' text-[11px]'>
                                                03/06/2023
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                {/* Article2 */}
                                <div className=' grid grid-cols-2 grid-flow-row mt-4'>
                                    <div className='mr-2'>
                                        <img src="/A3.jpg" alt="" width={175} height={150}/>
                                    </div>
                                    {/* cover */}
                                    
                                    <div className=''>
                                        <Link href="/contenu" className='hover:text-[#00A2E8]'>
                                            <p className='text-[13px] font-bold'>
                                                OPERATION AUXILUM 2023 du 20 au 26 avril
                                            </p>
                                            <p className='text-[11px]'>
                                                04/02/2023
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Commentaires */}
                <div className="ml-[50px] grid grid-row-3 gap-1 ">
                    <p className='font-bold text-lg mt-[90px] '>Rechercher des articles</p>
                    <div className="flex items-center" cmdk-input-wrapper="">
                        <input
                            type="text"
                            placeholder="Votre Commentaire"
                            value={commentText}
                            onChange={handleCommentChange}
                            className="w-[1050px] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <Search className="ml-[-50px] mr-2 h-4 w-4 shrink-0 opacity-50" />
                        
                    </div>
                </div>

                <div className="mt-[50px]">
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contenus

// export async function Donnees(){
//     const articles = [await DataToTable()];
//     const titre = articles[2].titre;//gros titre
//     const catégorie = []; 
//     const date = [];
//     const article = [];
//     const couverture = [];
//     const auteur = [];
//     const photos = [];
//     const articlesSimilaires = [];
//     return (
//        titre
//     )
// }