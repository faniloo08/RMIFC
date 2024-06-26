"use client"

import {DataToTable} from '../../lib/api';
import {Donnees} from '../../lib/donnes'; //récupération des données.
// import {Donnees1} from '../../lib/tempdesc'; //description
// import {Donnees2} from '../../lib/tempdate'; //date
// import {Donnees3} from '../../lib/tempcont'; //contenu
import React ,{ useState, useEffect } from 'react'
import { NavBar } from '../navbar/nav';
import { MenuBar } from '../menubar/menu';
import Footer from "../footer/footer";
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Suspense } from 'react';
import { SkeletonCard } from './skeleton';

function Contenus() {
    //Ces contenus vont être changés par les données dynamique du CMS
    useEffect(() => {
        const fetchDonnees = async () => {
            // Appelez la fonction Donnees pour obtenir les données
            const titres  = await Donnees();

            //Exemple de titre  
            const grosTitre  = titres[3].titre;
            console.log(grosTitre);
            setGrosTitre(grosTitre);

            //Exemple de description
            const descri = titres[4].description;
            console.log(descri);
            setDescri(descri);

            //Exemple de date
            const date = titres[4].date
            console.log(date);
            setDate(date);
            
            //Exemple de contenu
            const article = titres[4].article;
            console.log(article);
            setArticle(article);
        };
        fetchDonnees();
    }, []);
    const [grosTitre, setGrosTitre] = useState('');
    const [descri, setDescri] = useState('');
    const [date, setDate] = useState('');
    const [article, setArticle] = useState('');

    //User interactions
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
                                {grosTitre}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 ml-[50px] space-x-[-220px]">
                            <div >
                                {/* Catégorie */}
                                <Link href="/contenu/tous">
                                    <button className="bg-gradient-to-r from-[#51C0FF] to-[#142356]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">{descri}</button>
                                </Link>
                            </div>
                            <div>
                                {/* Date */}
                                <p className='mt-[5px] font-light text-[13px]'>{date}</p>
                            </div>
                        </div>
                        <div className='ml-[50px] mt-[30px]'>
                            {/* Cover */}
                            <img src="/A1.jpg" alt="" width={600} height={350}/>
                            {/* <p className='mt-1 text-xs mb-1 text-center w-[300px]'>
                                Signature en ligne du Memorandum d'entente: Auxillum worldwide, CRCO, et  CRFIM joinent leurs forces, 19 dec 2023, Madagascar, Antananarivo.
                            </p> */}
                        </div>
                        <div className="items-center justify-center">
                            <div className='mt-[30px] ml-[50px] lg:w-[600px] md:w-[300px]'>
                                {/* Article */}
                                {/* <p className='font-bold mb-1'>
                                    Lorem ipsum dolor sit amet.
                                </p>
                                <p className='mb-1'>
                                Ut veniam ipsumAb velit nam sunt perferendis non suscipit sunt et galisum cumque. Et maiores dolore Qui architecto ea similique laudantium At placeat nulla ad eveniet tempora quo cumque doloribus non officiis reprehenderit.

                                In nihil omnis est illo consequaturet suscipit sed numquam galisum. Aut architecto cumque Et cupiditate est quibusdam exercitationem. Et fugit odio Sed minima aut aliquid assumenda et repellendus consequatur ut ipsa molestiae ab exercitationem mollitia. Eos distinctio ducimusEt laudantium 33 minus libero ut distinctio nihil ut odio doloremque ab libero sunt.
                                
                                </p>
                                <p className='mb-1'>
                                Ea voluptate eligendi et inventore doloremque rem Quis ullam non reprehenderit doloremque.
                                Eos aspernatur isteQui voluptas qui illo totam aut deleniti sunt et autem natus. Aut possimus sapiente Et facilis ut tempore omnis sit voluptatem dolore.
                                </p>
                                <p className='font-light italic'>
                                Non internos corporis.
                                Aut perspiciatis impedit ut earum ipsum.
                                Est adipisci error.
                                Quo dolorem pariatur qui voluptatem placeat qui rerum doloribus.
                                </p> */}
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
                                Articles similaires
                            </p>
                            <div className='mt-[50px] grid grid-cols-2'>
                                {/* Article1 */}
                                <div className='mr-2'>
                                    {/* cover */}
                                    <img src="/A2.jpg" alt="" width={195} height={175}/>
                                    <div className='mt-1'>
                                        <Link href="/contenu" className='hover:text-[#00A2E8]'>
                                            <p className='text-[13px] font-bold'>
                                                EXERCICE CUTLASS EXPRESS 2023 du 6 au 17 mars
                                            </p>
                                            <p className=' text-[11px]'>
                                            Comme chaque année, le CRFIM prend part à l'exercice multilatéral #CUTLASSEXPRESS organisé par l'...
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                {/* Article2 */}
                                <div className='ml-2'>
                                    {/* cover */}
                                    <img src="/A3.jpg" alt="" width={195} height={175}/>
                                    <div className='mt-1'>
                                        <Link href="/contenu" className='hover:text-[#00A2E8]'>
                                            <p className='text-[13px] font-bold'>
                                                OPERATION AUXILUM 2023 du 20 au 26 avril
                                            </p>
                                            <p className='text-[11px]'>
                                                Du 20 au 26 avril 2023, les Centres Régionaux de Fusion de l’Information Maritime (CRFIM)...
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='ml-[50px] mt-[30px]'>
                        {/*Auteur*/}
                        <span className="bg-[url('/Auteur2.png')] inline-flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                        </span>
                        {/* Nom */}
                        <p className='mt-[-50px] ml-[70px] text-[13px] font-bold'>Faraniaina Estherie</p>
                        {/* Poste */}
                        <p className='ml-[70px] font-light text-[11px]'>Assistante en communication</p>
                </div>
                {/* Bouton de partage */}
                <div className=" relative ml-[550px] mt-[-50px]">
                  <button className="hover:text-[#00A2E8]  inline-flex drop-shadow relative overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <Link href="/">
                        <div className='grid grid-flow-col grid-cols-2'>
                            <div>
                                <p className='text-sm'>partager</p>
                            </div>
                            <div>
                                <span className="hover:bg-[url('/share1.png')] ml-[-25px] bg-[url('/share.png')] hover:text-white inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
                                
                                </span>
                            </div>
                        </div>    
                    </Link>

                  </button>
                </div>
                {/* Photos liées à l’article */}
                <p className='font-bold text-lg mt-[50px] ml-[50px]'>Galerie d'images</p>
                <div className="mt-[30px] ml-[50px] grid grid-cols-3 gap-1 items-center justify-center">
                    <div>
                        {/* Photo1 */}
                        <img src="/CD3(1).jpg" alt="" width={300} height={250} className='hover:scale-110'/>
                        <p className='mt-1 text-xs mb-1 text-center w-[300px]'>
                            Signature en ligne du Memorandum d'entente: Auxillum worldwide, CRCO, et  CRFIM joinent leurs forces, 19 dec 2023, Madagascar, Antananarivo.
                        </p> 
                    </div>
                    <div>
                        {/* Photo2 */}
                        <img src="/CD3.jpg" alt="" width={300} height={250} className='hover:scale-110'/>
                        <p className='mt-1 text-xs mb-1 text-center w-[300px]'>
                            Signature en ligne du Memorandum d'entente: Auxillum worldwide, CRCO, et  CRFIM joinent leurs forces, 19 dec 2023, Madagascar, Antananarivo.
                        </p> 
                    </div>
                    <div>
                        {/* Photo3 */}
                        <img src="/B1.jpg" alt="" width={300} height={250} className='hover:scale-110'/>
                        <p className='mt-1 text-xs mb-1 text-center w-[300px]'>
                            Signature en ligne du Memorandum d'entente: Auxillum worldwide, CRCO, et  CRFIM joinent leurs forces, 19 dec 2023, Madagascar, Antananarivo.
                        </p> 
                    </div>
                </div>

                {/* Commentaires */}
                <div className="ml-[50px] grid grid-row-3 gap-1 ">
                    <p className='font-bold text-lg mt-[90px] mb-[50px]'>Commentaires</p>
                    {displayedComments.length > 0 && (
                    <div className="w-full">
                        {comments.map((comment, index) => (
                        <div key={index} className="mb-4">
                            <div>
                                {/*Photo de Profil*/}
                                <span className="bg-[url('/Connection.png')] inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                </span>
                                {/* Nom de l'utilisateur */}
                                <p className='ml-[80px] mt-[-60px] font-bold text-sm'>User_Name@00</p>
                                {/* Commentaire */}
                                <p className='ml-[80px] font-light text-sm'>{comment}</p>
                                {/* date */}
                                <p className='mt-[50px] ml-[80px] font-light text-xs'>27/07/23</p>
                                {/* Action */}
                                <div className='grid grid-cols-2 grid-flow-row mt-[-15px] ml-[400px]'>
                                    <div>
                                        <p className='font-light text-xs hover:text-sky-600'>répondre</p>
                                    </div>
                                    {/* bouton j'aime */}
                                    <div>
                                        <button onClick={handleClick} className='w-30px h-30px ml-[-250px] mt-[-5px]'>                        
                                            <div className={`container ${liked ? 'bg-[url("/Coeur1.png")]' : 'bg-[url("/Coeur.png")]'}`}
                                                style={{width: '30px', height: '30px'}}>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className='mt-[20px] ml-[50px]'>
                                    {/*Photo de Profil*/}
                                    <span className="bg-[url('/rmifc.png')] inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                    </span>
                                    {/* Titre */}
                                    <p className='ml-[80px] mt-[-60px] font-bold text-sm'>Crfim_madagascar</p>
                                    <p className='ml-[80px] font-light text-sm'>Le CRFIM vous remercie</p>
                                    <p className='mt-[50px] ml-[80px] font-light text-xs'>27/07/23</p>
                                    {/* Action */}
                                    
                                    <div className='grid grid-cols-2 grid-flow-row mt-[-15px] ml-[400px]'>
                                        <div>
                                            <p className='font-light text-xs hover:text-sky-600'>répondre</p>
                                        </div>
                                        <div>
                                            <button onClick={handleClick1} className='w-30px h-30px ml-[-250px] mt-[-5px]'>                        
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
                            className="ml-[50px] w-[900px] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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

                <div className="mt-[50px]">
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contenus

function Loading() {
    return <h2>🌀 Loading...</h2>;
}