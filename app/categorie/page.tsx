"use client"
import React from 'react'
import { NavBar } from '../navbar/nav';
import { MenuBar } from '../menubar/menu';
import Footer from "../footer/footer";
import Link from 'next/link';
import { Input } from '@/components/ui/input';

function Categorie() {
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
                        Les domaines pris en charges par le CRFIM
                    </p>
                </div>
                <div className="grid  items-center justify-center">
                    <div className='mt-[30px] w-[1000px]'>
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                            {/* Contenu */}
                                Maritime Incident
                            </p>
                            <p className='text-sm mb-3'>
                                Le Centre Régional de Fusion d'Informations surveille et analyse les incidents maritimes afin de fournir une vue d'ensemble des activités dans les eaux régionales, facilitant ainsi la coordination des réponses en cas d'incidents.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Arms Trafficking smuggling by sea
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre travaille en collaboration avec les autorités compétentes pour détecter, surveiller et prévenir le trafic d'armes et la contrebande par voie maritime, contribuant ainsi à renforcer la sécurité et la stabilité dans la région.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Maritime Environment
                            </p>
                            <p className='text-sm mb-3'>
                                Le Centre Régional de Fusion d'Informations surveille et évalue l'impact des activités humaines sur l'environnement maritime, contribuant ainsi à la préservation et à la protection des écosystèmes marins.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Maritime Critical Infrastructure
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre identifie et surveille les infrastructures maritimes critiques, telles que les ports et les installations pétrolières, afin de prévenir les menaces potentielles et de garantir leur sécurité et leur fonctionnement continu.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Maritime Cybercriminality
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre surveille les cybermenaces ciblant les infrastructures maritimes et coordonne les efforts pour protéger les systèmes informatiques critiques contre les attaques et les intrusions.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Natural events and HADR
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre surveille les événements naturels tels que les tempêtes et les tremblements de terre, et fournit une assistance humanitaire en cas de catastrophe (HADR) pour assurer une réponse efficace et coordonnée aux situations d'urgence.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Others
                            </p>
                            <p className='text-sm mb-3'>
                                Cette catégorie englobe divers domaines d'intérêt qui ne sont pas spécifiquement couverts par les autres catégories, permettant au centre de surveiller et de répondre à une gamme étendue de menaces et de situations.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Violent acts at sea
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre surveille les activités criminelles et les actes de violence en mer, contribuant ainsi à garantir la sécurité et la sûreté des voies maritimes et des navires.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Weapon proliferation (PSI)
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre surveille les activités liées à la prolifération des armes de destruction massive par voie maritime, en coordination avec le Programme de sécurité internationale (PSI) et d'autres partenaires internationaux.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Yachting and Maritime Tourism
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre surveille et régule les activités de plaisance et de tourisme maritime pour garantir la sécurité des voyageurs et la protection des ressources marines dans les zones touristiques.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Illegal unregulated and unreported fishing by sea
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre travaille à détecter, surveiller et prévenir la pêche illégale, non réglementée et non déclarée en mer, contribuant ainsi à la préservation des ressources marines et à la durabilité des industries de la pêche.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>
                                Illegal Migration and Human trafficking by sea
                            </p>
                            <p className='text-sm mb-3'>
                                Le centre surveille les activités de migration illégale et de trafic d'êtres humains par voie maritime, en collaboration avec les autorités nationales et internationales pour prévenir ces activités criminelles et protéger les droits des migrants.
                            </p>
                            <Link href="/contenu/tous">
                                <p className='text-sm text-blue-500 hover:underline mb-3'>
                                    Voir les articles liés
                                </p>
                            </Link>
                        </div>
                        
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

export default Categorie
