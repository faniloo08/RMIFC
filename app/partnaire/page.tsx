"use client"
import React from 'react'
import { NavBar } from '../navbar/nav';
import { MenuBar } from '../menubar/menu';
import Footer from "../footer/footer";
import Link from 'next/link';
import { Input } from '@/components/ui/input';

function Partenaires() {
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
                        Partenaires et organisations impliquées
                    </p>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] 2xl:w-[1000px] lg:w-[600px]'>
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <Link href="https://crcoseychelles.org/">
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>Le C.R.C.O</p>
                        </Link>
                        {/* Contenu */}
                        <p className='text-sm'>
                        Le Centre régional de coordination des opérations (CRCO) est créé par l'accord sur la coordination des opérations en mer. Il est situé aux Seychelles et chargé de planifier les opérations en mer, en collaboration avec le Centre régional de fusion de l'information maritime. Il accueille un officier de liaison de chacune des Parties et sa gouvernance est régie par les dispositions indiquées en annexe de l'accord.

                        </p>
                    </div>
                    <div className='2xl:ml-[400px] lg:ml-[130px] '>
                        {/* Cover */}
                        <img src="/SlideB.png" alt="" width={357} height={200}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] 2xl:w-[1000px] lg:w-[600px]'>
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <Link href="https://igad.int/">
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>L'I.Ga.D</p>
                        </Link>
                        
                        {/* Contenu */}
                        <p className='text-sm'>
                        Intergovernmental Authority on Development, (IGAD) est un groupement régional créé le 21 mars 1986 et associant sept pays est-africains : Djibouti, Éthiopie, Kenya, Somalie, Soudan, Soudan du Sud et Ouganda.
                        </p>
                    </div>
                    <div className='2xl:ml-[400px] lg:ml-[130px] mt-[20px]'>
                        {/* Cover */}
                        <img src="/Igad.png" alt="" width={200} height={150}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] 2xl:w-[1000px] lg:w-[600px]'>
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <Link href="https://www.eac.int/">
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>L'E.A.C</p>
                        </Link>
                        {/* Contenu */}
                        <p className='text-sm'>
                        La Communauté d'Afrique de l'Est ( EAC ) est une organisation intergouvernementale composée de huit pays d' Afrique de l'Est . Les États membres sont la République démocratique du Congo , la République fédérale de Somalie , les républiques du Burundi , du Kenya , du Rwanda , du Soudan du Sud , de l'Ouganda et de la Tanzanie.
                        </p>
                    </div>
                    <div className='2xl:ml-[400px] lg:ml-[130px] mt-[20px]'>
                        {/* Cover */}
                        <img src="/EAC.png" alt="" width={200} height={150}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] 2xl:w-[1000px] lg:w-[600px]'>
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <Link href="https://www.comesa.int/?lang=fr">
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>La C.O.M.E.S.A</p>
                        </Link>
                        {/* Contenu */}
                        <p className='text-sm'>
                        Le Marché commun de l'Afrique orientale et australe ( COMESA ) est une communauté économique régionale en Afrique composée de vingt et un États membres s'étendant de la Tunisie à l'Eswatini.
                        </p>
                    </div>
                    <div className='2xl:ml-[400px] lg:ml-[130px] mt-[20px]'>
                        {/* Cover */}
                        <img src="/Comesa.png" alt="" width={200} height={150}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] 2xl:w-[1000px] lg:w-[600px]'>
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <Link href="https://www.commissionoceanindien.org/">
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>La C.O.I</p>
                        </Link>
                        {/* Contenu */}
                        <p className='text-sm'>
                        La Commission de l'Océan Indien ( français : Commission de l'Océan Indien , COI ) est une organisation intergouvernementale qui relie les nations africaines de l'océan Indien : Comores , Madagascar , Maurice , la Réunion (une région d'outre-mer de la France ) et les Seychelles .
                        </p>
                    </div>
                    <div className='2xl:ml-[400px] lg:ml-[130px] mt-[20px]'>
                        {/* Cover */}
                        <img src="/OI.png" alt="" width={200} height={150}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] 2xl:w-[1000px] lg:w-[600px]'>
                        {/* Le CRFIM */}
                        {/* Titre */}
                        <Link href="https://european-union.europa.eu/index_fr">
                            <p className='text-[20px] text-cyan-700 font-bold underline mb-2'>L'U.E</p>
                        </Link>
                        
                        {/* Contenu */}
                        <p className='text-sm'>
                        L'Union européenne (UE) est une union politico-économique sui generis de vingt-sept États européens qui délèguent ou transmettent par traité l’exercice de certaines compétences à des organes communautaires.
                        </p>
                    </div>
                    <div className='2xl:ml-[400px] lg:ml-[130px] mt-[20px]'>
                        {/* Cover */}
                        <img src="/UE.png" alt="" width={200} height={150}/>
                    </div>
                </div>
                <p className='text-[20px] text-cyan-700 font-bold underline mb-2 mt-[30px] ml-[50px] w-[600px]'>Les pays signataires</p>
                <div className="mt-[30px] 2xl:ml-[100px] lg:ml-[50px] grid grid-cols-7 items-center justify-center">
                    <div>
                        {/* Photo1 */}
                        <img src="/Comores.jpg" alt="Comores" title="Comores" width={100} height={70} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo2 */}
                        <img src="/Djibouti.svg" alt="Djibouti" title="Djibouti" width={100} height={70} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo3 */}
                        <img src="/France.svg" alt="France" title="France" width={100} height={70} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo3 */}
                        <img src="/Kenya.png" alt="Kenya" title="Kenya" width={100} height={70} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo3 */}
                        <img src="/Madagascar.png" alt="Madagascar" title="Madagascar"  width={100} height={70} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo3 */}
                        <img src="/Mauritius.svg" alt="Mauritius" title="Mauritius" width={100} height={70} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo3 */}
                        <img src="/Seychelles.png" alt="Seychelles" title="Seychelles" width={100} height={70} className='hover:scale-110'/>
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

export default Partenaires
