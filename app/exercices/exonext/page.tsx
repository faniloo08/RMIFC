"use client"
import Image from "next/image";
import { NavBar } from "@/app/navbar/nav";
import {MenuBar} from "@/app/menubar/menu";
import Slide from "@/app/Slider/slide";
import Mase from "@/app/mase/mase";
import { PresText } from "@/app/presentation/prestext";
import Statistique from "@/app/statistique/statistique";
import Link from "next/link";
import Articles from "@/app/articles/articles";
import Callaction from "@/app/callaction/callaction";
import Exercices from "@/app/exercices/exonext";
import Recherche from "@/app/recherche/recherche";
import PersoCles from "@/app/personnagesCles/persoCles";
import Ressource from "@/app/ressources/ressource";
import Partenaire from "@/app/partenaires/partenaire";
import Vcr from "@/app/vcr/vcr";
import Newsletter from "@/app/newsletter/newsletter";
import Footer from "@/app/footer/footer";
import { PaginationDemo } from "@/app/pagination/pagination1";

export default function Home() {
  return (
    <>
      <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        
        <div className="bg-[url('/HomePage(2).png')] bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
          <div className="bg-cover grid grid-cols-1">
              <div> 
                <MenuBar/>
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <NavBar/>
                </div> 
              </div>
          </div>
          <div className=" ml-[20px] bg-cover grid grid-cols-2 items-center justify-center">
            <div className="bg-cover grid grid-cols-1  items-center justify-center">
              < div className="ml-3 relative mt-[50px]">
                <div className="">
                  <Slide/>
                </div> 
                <div className=" relative ml-[75px] mt-[-50px]">
                  <Mase/>
                </div>
                <div className=" relative ml-[30px] mt-[50px]">
                  <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <Link href="https://www.facebook.com/RMIFCenter">
                      <span className="bg-[url('/Ellipse4.png')] hover:text-white inline-flex h-[30px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
                        
                      </span>
                    </Link>
                  </button>
                </div>
                <div className=" relative ml-[125px] mt-[-38px]">
                  <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <Link href="/">
                      <span className=" bg-[url('/Ellipse5.png')] hover:text-white inline-flex h-[30px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
                        
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className=" relative ml-[165px] mt-[-220px]">
                <p className="text-sky-950 font-bold text-[24px] relative mt-[35px] ">Centre Régional de Fusion de Information Maritimes</p>
                <PresText/>
            </div>
            <div className="relative ml-[725px] mt-[-170px]">
              <Statistique/>
            </div>
          </div>
          <div className=" mt-[20px] bg-white bg-center items-center justify-center">
            <div>
              <div className="ml-[28px] bg-[url('/fleche.png')] w-[228px] h-[52px] ">
                <span className="inline-flex justify-center items-center mt-2 ml-4 font-bold text-[#092933]">
                  Dernières Actualités
                </span>
              </div>
              <Link href="/contenu/tous" className='text-cyan-400 underline text-sm ml-[920px] mt-[-100px]' >
                  voir toutes les actualités
              </Link>
            </div>
            <div className="ml[30px] mt-[30px]">
              <Articles/>
            </div>
            <div className="mt-[100px]">
              <Recherche/>
            </div>
            <div className="mt-[50px]">
              <Exercices/>
            </div>
            <div className="mt-[50px]">
              <PaginationDemo/>
            </div>
            <div className="mt-[50px]">
              <Callaction/>
            </div>
            <div className="mt-[80px]">
              <PersoCles/>
            </div>
            <div className="mt-[50px] bg-[url('/fleche.png')] ml-[28px] w-[228px] h-[52px] ">
              <span className="inline-flex justify-center items-center mt-2 ml-5 font-bold text-[#092933]">
                Ressources
              </span>
            </div>
            <div className="ml-[30px] mt-[50px]">
              <Ressource/>
            </div>
            <div className="ml-[30px] mt-[80px]">
              <Partenaire/>
            </div>
            <div className="ml-[30px] mt-[50px]">
              <Vcr/>
            </div>
            <div className="ml-[30px] mt-[50px]">
              <Newsletter/>
            </div>
            <div className="mt-[30px]">
              <Footer/>
            </div>
          </div> 
        </div>
        
      </div>
    </>
  );
}
