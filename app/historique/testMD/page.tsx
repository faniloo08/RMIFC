"use client"
import React, {useState, useEffect} from 'react'
import { NavBar } from '../../navbar/nav';
import { MenuBar } from '../../menubar/menu';
import Footer from "../../footer/footer";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Donnees } from '@/lib/pages';
import ReactMarkdown from 'react-markdown';

function Historique() {
    useEffect(() => {
        const fetchDonnees = async () => {
            // Appelez la fonction Donnees pour obtenir les données
            const pages  = await Donnees();

            //Exemple de titre  
            const Titre1  = pages[1].titre;
            console.log(Titre1);
            setTitre1(Titre1); 

            //Exemple de contenu
            const Contenu1 = pages[1].contenu;
            console.log(Contenu1);
            setContenu1(Contenu1);
        };
        fetchDonnees();
    }, []);
    const [Titre1, setTitre1] = useState('');
    const  [Contenu1, setContenu1] = useState('');
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
                <div className="mt-[30px] flex items-center justify-center">
                    <p className='text-[50px] font-bold'>
                        {Titre1}
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 items-center justify-center">
                    {/* Contenu */}
                    <div className='ml-[50px] mt-[30px]'>
                        <ReactMarkdown>  
                            {Contenu1}
                        </ReactMarkdown>
                    </div>
                    <div className='grid grid-rows-3 grid-flow-col gap-3'>
                        <div className=' 2xl:ml-[280px] lg:ml-[130px] '>
                            {/* Cover 1*/}
                            <img src="/histo1.png" alt="" width={350} height={250} className='2xl:w-[85%]'/>
                        </div>
                        <div className=' 2xl:ml-[280px] lg:ml-[130px] '>
                            {/* Cover 2*/}
                            <img src="/gris.png" alt="" width={357} height={398} className='2xl:w-[85%]'/>
                        </div>
                        <div className='2xl:ml-[280px] lg:ml-[130px] '>
                            {/* Cover 3*/}
                            <img src="/gris.png" alt="" width={357} height={398} className='2xl:w-[85%]'/>
                        </div>
                    </div>
                </div>
                {/* Photos liées à l’article */}
                <p className='font-bold text-lg mt-[50px] sm:ml-[50px] ml-[10px]'>Galerie d'images</p>
                <div className="mt-[30px] 2xl:ml-[80px] lg:sm:ml-[50px] ml-[10px] grid grid-cols-3 2xl:gap-6 lg:gap-1 items-center justify-center">
                    <div>
                        {/* Photo1 */}
                        <img src="/Hist1.png" alt="" width={300} height={250} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo2 */}
                        <img src="/Hist2.png" alt="" width={300} height={250} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo3 */}
                        <img src="/Hist3.png" alt="" width={300} height={250} className='hover:scale-110'/>
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

export default Historique
