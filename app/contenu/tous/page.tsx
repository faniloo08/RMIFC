"use client"

// import {DataToTable} from '../../lib/api';
import {Donnees} from '../../../lib/donnes';
import { PaginationDemo } from '@/app/pagination/pagination';
import React ,{ useState, useEffect } from 'react'
import { NavBar } from '@/app/navbar/nav';
import { MenuBar } from '@/app//menubar/menu';
import Footer from "@/app/footer/footer";
import Link from 'next/link';
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"



function Contenus() {
    //Ces contenus vont être changés par les données dynamique du CMS
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

            const Titre4  = titres[4].titre;
            console.log(Titre4);
            setTitre4(Titre4);

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

            const Descri4 = titres[4].description;
            console.log(Descri4);
            setDescri4(Descri4);

            //Exemple de Date
            const Date1 = titres[1].date
            console.log(Date1);
            setDate1(Date1);

            const Date2 = titres[2].date
            console.log(Date2);
            setDate2(Date2);
            
            const Date3 = titres[3].date
            console.log(Date3);
            setDate3(Date3);

            const Date4 = titres[4].date
            console.log(Date4);
            setDate4(Date4);

            //Exemple de Slug
            const Slug1 = titres[1].slug
            console.log(Slug1);
            setSlug1(Slug1);

            const Slug2 = titres[2].slug
            console.log(Slug2);
            setSlug2(Slug2);

            const Slug3 = titres[3].slug
            console.log(Slug3);
            setSlug3(Slug3);

            const Slug4 = titres[4].slug
            console.log(Slug4);
            setSlug4(Slug4);

        };
        fetchDonnees();
    }, []);
    const [Titre1, setTitre1] = useState('');
    const [Titre2, setTitre2] = useState('');
    const [Titre3, setTitre3] = useState('');
    const [Titre4, setTitre4] = useState('');
    const [Descri1, setDescri1] = useState('');
    const [Descri2, setDescri2] = useState('');
    const [Descri3, setDescri3] = useState('');
    const [Descri4, setDescri4] = useState('');
    const [Date1, setDate1] = useState('');
    const [Date2, setDate2] = useState('');
    const [Date3, setDate3] = useState('');
    const [Date4, setDate4] = useState('');
    const [Slug1, setSlug1] = useState('');
    const [Slug2, setSlug2] = useState('');
    const [Slug3, setSlug3] = useState('');
    const [Slug4, setSlug4] = useState('');
    // const Titre1 = Donnees
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
  return (
    <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        <div className="bg-white bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
            <div className="bg-cover grid grid-cols-1">
                <div className='mb-1'> 
                    <MenuBar/>
                </div>
                <div className="flex items-center justify-center"> 
                    <div className="fixed z-50">
                        <NavBar/>
                    </div> 
                </div>
            </div>
            
            <div className='grid md:grid-cols-3 grid-flow-row'>
                {/* Article1 */}
                <div className='col-span-2'>
                    <div className="ml-[50px] mt-[30px] flex ">
                        <p className='md:text-[40px] lg:w-[630px] md:w-[300px] font-bold'>
                            {/* Titre de l'Article1 cliqué */}
                            Tous les articles
                        </p>
                    </div>
                    {/* 1 */}
                    <div className='sm:ml-[50px] ml-[5px] mt-[30px]'>
                        <img src='/Auxilum.png' width={350} height={200} className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110 sm:w-[50%] md:w-[90%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] w-[50%]"/>
                        <div className='relative md:ml-[380px] md:mt-[-190px]'>
                            <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri1}</button>
                        </div>
                        <div className='md:ml-[380px]' >
                            <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                {/*Article1s phares title*/}
                                <Link href={`/contenu?query=${Slug1}`}>
                                    {Titre1}
                                </Link>
                            </p>
                            <p className='text-[13px] py-1 w-[320px]'>
                                {/* Article1s.Descri1ption */}
                                Du 20 au 26 avril 2023, les Centres Régionaux de Fusion de l’Information Maritime (CRFIM) et de Coordination des Opérations ....
                            </p>
                        </div>
                        <div className='md:ml-[380px]'>
                            {/*Auteur*/}
                            <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                            </span>
                            <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                            <p className='ml-[50px] font-light text-[11px]'>{Date1}</p>
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
                    <div className='sm:ml-[50px] ml-[5px] mt-[30px]'>
                        <img src='/Visite.png' width={350} height={200} className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110 sm:w-[50%] md:w-[90%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] w-[50%]"/>
                        <div className='relative md:ml-[380px] md:mt-[-190px]'>
                            <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri2}</button>
                        </div>
                        <div className='md:ml-[380px]' >
                            <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                {/*Article1s phares title*/}
                                <Link href={`/contenu?query=${Slug2}`}>
                                    {Titre2}
                                </Link>
                            </p>
                            <p className='text-[13px] py-1 w-[320px]'>
                                {/* Article1s.Descri1ption */}
                                Les participants du « forum du réseau des procureurs » a effectué une visite au sein du Centre Régional de fusion d’....
                            </p>
                        </div>
                        <div className='md:ml-[380px]'>
                        {/*Auteur*/}
                            <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                            </span>
                            <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                            <p className='ml-[50px] font-light text-[11px]'>{Date2}</p>
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
                    <div className='sm:ml-[50px] ml-[5px] mt-[30px]'>
                        <img src='/FBI.png' width={350} height={200} className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110 sm:w-[50%] md:w-[90%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] w-[50%]"/>
                        <div className='relative md:ml-[380px] md:mt-[-190px]'>
                            <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri3}</button>
                        </div>
                        <div className='md:ml-[380px]' >
                            <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                {/*Article1s phares title*/}
                                <Link href={`/contenu?query=${Slug3}`}>
                                    {Titre3}
                                </Link>
                            </p>
                            <p className='text-[13px] py-1 w-[320px]'>
                                {/* Article1s.Descri1ption */}
                                Entrevue avec l'équipe du CRFIM et la délégation du FBI\nLa délégation de l’ambassade des États-Unis située à Antananarivo et à Pretoria ....
                            </p>
                        </div>
                        <div className='md:ml-[380px]'>
                            {/*Auteur*/}
                            <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                            </span>
                            <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                            <p className='ml-[50px] font-light text-[11px]'>{Date3}</p>
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
                    <div className='sm:ml-[50px] ml-[5px] mt-[30px]'>
                        <img src='/Cutlass.png' width={350} height={200} className="rounded-md transition-transform duration-300 transform-gpu hover:scale-110 sm:w-[50%] md:w-[90%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] w-[50%]"/>
                        <div className='relative md:ml-[380px] md:mt-[-190px]'>
                            <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{Descri4}</button>
                        </div>
                        <div className='md:ml-[380px]' >
                            <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                {/*Article1s phares title*/}
                                <Link href={`/contenu?query=${Slug4}`}>
                                    {Titre4}
                                </Link>
                            </p>
                            <p className='text-[13px] py-1 w-[320px]'>
                                {/* Article1s.Descri1ption */}
                                Comme chaque année, le CRFIM prend part à l'exercice multilatéral #CUTLASSEXPRESS organisé par l’US Naval Force ....
                            </p>
                        </div>
                        <div className='md:ml-[380px]'>
                            {/*Auteur*/}
                            <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                            </span>
                            <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                            <p className='ml-[50px] font-light text-[11px]'>{Date4}</p>
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
                    <div className='ml-[-300px] md:ml-[50px] mt-[30px]'>
                        <PaginationDemo />
                    </div>
                </div>
                <div className='hidden md:block mt-[50px] mr-[50px]'>
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
                    {/* Article1s similaires */}
                    <div className='mt-[70px] border-t pt-2'>
                        <p className='font-bold text-lg'>
                            Les plus populaires
                        </p>
                        <div className='mt-[30px]'>
                            {/* Article11 */}
                            <div className='grid grid-cols-2 grid-flow-row '>
                                <div className='mr-2'>
                                    <img src="/Cutlass.png" alt="" width={175} height={150}/>
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
                            {/* Article12 */}
                            <div className=' grid grid-cols-2 grid-flow-row mt-4'>
                                <div className='mr-2'>
                                    <img src="/Auxilum.png" alt="" width={175} height={150}/>
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
                <p className='font-bold text-lg mt-[90px] '>Rechercher des Articles</p>
                <div className="flex items-center" cmdk-input-wrapper="">
                    <input
                        type="text"
                        placeholder="Taper ici..."
                        value={commentText}
                        onChange={handleCommentChange}
                        className="lg:w-[1050px] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <Search className="ml-[-50px] mr-2 h-4 w-4 shrink-0 opacity-50" />
                    
                </div>
            </div>

            <div className="mt-[50px]">
                <Footer/>
            </div>
            
        </div>
    </div>
  )
}

export default Contenus

// export async function Donnees(){
//     const Article1s = [await DataToTable()];
//     const titre = Article1s[2].titre;//gros titre
//     const catégorie = []; 
//     const Date1 = [];
//     const Article1 = [];
//     const couverture = [];
//     const auteur = [];
//     const photos = [];
//     const Article1sSimilaires = [];
//     return (
//        titre
//     )
// }