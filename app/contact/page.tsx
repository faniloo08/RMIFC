"use client"
import React from 'react'
import { NavBar } from '../navbar/nav';
import { MenuBar } from '../menubar/menu';
import Footer from "../footer/footer";
import Link from 'next/link';
// import GoogleMapComponent from '@/components/ui/google-map';
import Image from 'next/image';

function Contact() {
  return (
    <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        <div className="bg-white bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
            <div className="bg-cover grid grid-cols-1">
                <div className="mb-1"> 
                    <MenuBar/>
                </div>
                <div className="flex items-center justify-center"> 
                    <div className="fixed z-50">
                        <NavBar/>
                    </div> 
                </div>
            </div>
            <div className="ml-[50px] mt-[50px] text-sm ">
                <Link href="/" className="mr-1 hover:underline hover:text-blue-500">
                    Accueil 
                </Link>
                    - Contact         
            </div>
            <div className="mt-[50px] ml-[10px] sm:ml-[50px]">
                <h1 className="text-[40px] font-bold">Contact</h1>
            </div>
            <div className="mt-[50px] ml-[10px] sm:ml-[50px] grid grid-rows-3 md:grid-flow-col gap-5">
                <div>
                    <p className="text-cyan-700 text-sm font-bold">Téléphone</p>
                    <p className="hover:underline">+261 34 05 414 12</p>
                </div>
                <div>
                    <p className="text-cyan-700 text-sm font-bold">Email</p>
                    <Link href="https://mail.google.com/mail/">
                        <p className="hover:underline text-xs sm:text-sm">assistante.communication@crfimmadagascar.org</p>
                    </Link>
                </div>
                <div className="grid grid-rows-1 grid-flow-col">
                    <Link href="/" >
                        <Image src="/Ellipse6.png" alt="LinkedIn" width={30} height={30}/>
                    </Link>
                    <Link href="https://www.facebook.com/RMIFCenter" className="sm:ml-[-100px]">
                        <Image src="/Ellipse4.png" alt="Facebook" width={30} height={30}/>
                    </Link>
                    <Link href="/" className="sm:ml-[-170px]">
                        <Image src="/Ellipse5.png" alt="Twitter" width={30} height={30}/>
                    </Link>
                </div>
                <div className="row-span-3">
                    <p className="text-cyan-700 text-sm font-bold">Adresse</p>
                    <p className="hover:underline mb-3 text-xs sm:text-md">
                        3G5G+V6C, Antananarivo.
                        Soanierana,Ankaditoho
                    </p>
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7547.471296333994!2d47.52388640226706!3d-18.943091663657594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07dfb7b450ceb%3A0xc7870ae0535c14d4!2sCentre%20R%C3%A9gional%20de%20Fusion%20d&#39;Information%20Maritime%20-%20CRFIM!5e0!3m2!1sfr!2smg!4v1711546167685!5m2!1sfr!2smg" width="500" height="250"   loading="lazy" className="w-[90%] 2xl:w-[90%] lg:w-[90%]"></iframe>
                    </div>
                </div>
            </div>

            <div className="mt-[50px]">
                <Footer/>
            </div>
            
        </div>
    </div>
  )
}

export default Contact