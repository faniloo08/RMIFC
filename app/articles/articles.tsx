import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
//Partie dynamique,interaction permanente avec le back-end
function Articles() {
  return (
    <div>
         <ul className="grid gap-3 p-2  grid-cols-[.75fr_1fr]">
            <li className="row-span-2">
                {/* Article à la une */}
                <div className='ml-3 justify-center items-center'>
                    {/* Articles.cover */}
                    <img src='/Art1(1).png' className="w-450px h-350px rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"/>

                    <div className='ml-[-10px]' >

                        <div className="drop-shadow-lg w-[330px] h-[225px] bg-white text-black ml-[60px] mt-[-150px] text-center rounded-[25px] relative justify-center items-center py-2"style={{}}>
                            <div >
                                <p className="hover:underline text-lg justify-center items-center font-bold py-4" >
                                    {/*Articles phares title*/}
                                    <Link href="/contenu">
                                        Operation Auxilium
                                    </Link>
                                </p>
                                <p className='text-center p-3 mt-[-25px] text-[14px]'>
                                    {/* Articles.description */}
                                    Du 20 au 26 avril 2023, les Centres Régionaux de Fusion de l’Information Maritime (CRFIM) et ....
                                </p>
                            </div>
                            <div>
                                {/*Auteur*/}
                                <span className="ml-[-200px] bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                                </span>
                                <p className='mt-[-50px] text-[13px]'>Faraniaina Estherie</p>
                                <p className='ml-[-60px] font-light text-sm'>20/04/23</p>
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
                    <div className='relative ml-[150px] mt-[-240px]'>
                        <button className="bg-gradient-to-r from-[#DEE218] to-[#E37C1C]  px-4 py-1 text-sm text-white font-semibold rounded-full hover:text-[#DEE218] hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">Illegal Fishing</button>
                    </div>
                </div>
            </li>
            <li>
                {/*Art2*/}
                <div className='mb-1'>
                    <img src='/Art3(1).png' className="w-225px h-165px rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"/>
                    <div className='relative ml-[250px] mt-[-165px]'>
                        <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">Others</button>
                        <div >
                            <p className=" mt-[10px] hover:underline text-[15px] justify-center items-center font-bold" >
                                {/*Articles phares title*/}
                                <Link href="/contenu">
                                    Réunion avec la FBI
                                </Link>
                            </p>
                            <p className='text-[13px] py-1 w-[320px]'>
                                {/* Articles.description */}
                                Entrevue avec l'équipe du CRFIM et la délégation du FBI.La délégation de l’ambassade des États-Unis ....
                            </p>
                        </div>
                        <div>
                            {/*Auteur*/}
                            <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                            </span>
                            <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                            <p className='ml-[50px] font-light text-[11px]'>20/04/23</p>
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
            <li className=''>
                {/*Art3*/}
                <div>
                    <img src='/Art2(1).png' className="w-225px h-165px rounded-lg transition-transform duration-300 transform-gpu hover:scale-110"/>
                    <div className='relative ml-[250px] mt-[-165px]'>
                        <button className="bg-gradient-to-r from-[#2ADACF] to-[#1C54E3]  px-4 py-[5px] text-sm text-white font-semibold rounded-full hover:text-slate-800 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2">Arms Traficking</button>
                    </div>
                    <div className='ml-[250px]' >
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
                    <div className='ml-[250px]'>
                        {/*Auteur*/}
                        <span className="bg-[url('/Auteur1.png')] inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full  text-xl hover:text-2xl font-medium text-white">
                        </span>
                        <p className='mt-[-40px] ml-[50px] text-[11px]'>Faraniaina Estherie</p>
                        <p className='ml-[50px] font-light text-[11px]'>20/04/23</p>
                    </div>
                    <div className='ml-[420px] mt-[-25px]'>
                        <button className=" drop-shadow relative inline-flex overflow-hidden   focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <Link href="/">
                                <span className=" bg-[url('/share.png')] inline-flex h-[20px] w-[20px] cursor-pointer items-center justify-center px-1 py-1 text-xl hover:text-2xl font-medium text-white ">
                                
                                </span>
                            </Link>
                        </button>
                    </div>
                </div>
                
            </li>
        </ul>
        
        
        {/* Autres artciles */}

    </div>
  )
}

export default Articles