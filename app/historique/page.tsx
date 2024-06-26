"use client"
import React from 'react'
import { NavBar } from '../navbar/nav';
import { MenuBar } from '../menubar/menu';
import Footer from "../footer/footer";
import Link from 'next/link';
import { Input } from '@/components/ui/input';


function Historique() {
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
                        Historique
                    </p>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] w-[600px]'>
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>Le C.R.F.I.M</p>
                        {/* Contenu */}
                        <p className='text-sm mb-1'>
                        Le domaine maritime est communément connu pour être un terrain vaste pour la propagation de la criminalité de différentes natures alors qu’il constitue le facteur clé de la fluidité des échanges et du commerce internationaux. L’exploitation durable et responsable du domaine maritime passe avant tout par la maîtrise de la sécurité et la sûreté maritimes. Compte tenu de sa transversalité, sa préservation incombe au niveau national à différentes structures étatiques et également à ses usagers. Or, une absence de collaboration des entités concernés dans sa gestion et son exploitation a été dénotée depuis toujours, affaiblissant ainsi tout son potentiel.
                        </p>
                        <p className='text-sm mb-1'>
                        Le Centre Régional de Fusion d'Informations Maritimes (CRFIM) a été fondé en 2017 en réponse à la nécessité croissante de renforcer la sécurité et la sûreté des eaux régionales autour de Madagascar. L'organisation a été établie dans le cadre d'une coopération étroite avec plusieurs partenaires internationaux, y compris la Commission de l'Océan Indien, l'Union Européenne, l'US Navy et d'autres institutions régionales et mondiales.
                        </p>
                        <p className='text-sm mb-1'>
                        Dans cette entreprise, le CRFIM compte parmi ses parties prenantes et collaborateurs, les départements ministériels et organismes publics et/ou privés œuvrant dans le domaine maritime siégeant au sein de son Conseil d’Administration ou des tiers dont les rapports sont régis officiellement par des protocoles d’accord d’échange et de partage de données.
                        </p>
                        <p className='text-sm'>
                        Nos missions sont vastes et variées : collecte et analyse de données, surveillance des activités maritimes, coordination des opérations de sauvetage sécurité et la sûreté maritime, la gestion des ressources marines, le suivi du trafic et des activités maritimes, la météorologie, les incidents maritimes.
                        D'où la mise en place du programme M.A.S.E (Maritime Security)
                        </p>
                    </div>
                    <div className='ml-[130px] '>
                        {/* Cover */}
                        <img src="/histo1.png" alt="" width={350} height={250}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] w-[600px]'>
                        {/* Les évènements clés */}
                        {/* Titre */}
                        <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>Les évènements clés</p>
                        {/* Contenu */}
                        <div className='grid grid-cols-2 grid-flow-row'>
                            <div>
                                <p className='text-blue-800 font-bold'>
                                    2017 :
                                </p>
    
                                <p className='text-sm'>
                                    Date de création du centre
                                </p>
                            </div>
                            <div className='mb-3'>
                                <p className='text-blue-800 font-bold'>
                                    0000 :
                                </p>

                                <p className='text-sm'>
                                    Mises en place des infrastructures et des capacités opérationelles
                                </p>
                            </div>
                            <div className='mr-1 mb-3'>
                                <p className='text-blue-800 font-bold'>
                                    0000 :
                                </p>

                                <p className='text-sm '>
                                    Signatures de l'accord de collaboration entre les gouvernements partenaires et les organisations impliqués
                                </p>
                            </div>
                            <div className='mb-3'>
                                <p className='text-blue-800 font-bold'>
                                    0000 :
                                </p>

                                <p className='text-sm'>
                                    Lancement officiel des opérations aux CRFIM 
                                </p>
                            </div>
                            <div>
                                <p className='text-blue-800 font-bold'>
                                    0000 :
                                </p>

                                <p className='text-sm'>
                                    Reconnaissance internationale du CRFIM
                                </p>
                            </div>
                            <div>
                                <p className='text-blue-800 font-bold'>
                                    0000 :
                                </p>

                                <p className='text-sm'>
                                    Élargissement du mandat du CRFIM pour inclure la formation et le renforcement des capacités des acteurs régionaux dans le domaine de la sécurité maritime
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[130px] '>
                        {/* Cover */}
                        <img src="/gris.png" alt="" width={357} height={398}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] w-[600px]'>
                        {/* Les perspectives futurs */}
                        {/* Titre */}
                        <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>Les perspectives futurs</p>
                        {/* Contenu */}
                        <div>
                            <p className='text-blue-800'>
                                1. Maintenir la qualité de travail et la capacité opérationelle de nos employés
                            </p>
                        </div>
                        <div>
                            <p className='text-blue-800 '>
                                2. Multiplier les efforts dans la promotion de la sécurité maritime 
                            </p>
                        </div>
                        <div>
                            <p className='text-blue-800 '>
                               3. Elargissement des partenariats stratégiques
                            </p>
                        </div>
                        <div>
                            <p className='text-blue-800'>
                                4. Développement des initiatives innovantes
                            </p>
                        </div>
                        <div>
                            <p className='text-blue-800'>
                                5. Faire fâce aux défis émergents en matière de sécurité maritime 
                            </p>
                        </div>
                    </div>
                    <div className='ml-[130px] '>
                        {/* Cover */}
                        <img src="/gris.png" alt="" width={357} height={398}/>
                    </div>
                </div>
               
                {/* Photos liées à l’article */}
                <p className='font-bold text-lg mt-[50px] ml-[50px]'>Galerie d'images</p>
                <div className="mt-[30px] ml-[50px] grid grid-cols-3 gap-1 items-center justify-center">
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
