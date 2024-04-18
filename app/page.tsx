"use client"
import Image from "next/image";
import { NavBar } from "./navbar/nav";
import {MenuBar} from "./menubar/menu";
import Slide from "./Slider/slide";
import Mase from "./mase/mase";
import { PresText } from "./presentation/prestext";
import Statistique from "./statistique/statistique";
import Link from "next/link";
import Articles from "./articles/articles";
import Callaction from "./callaction/callaction";
import Exercices from "./exercices/exercices";
import Recherche from "./recherche/recherche";
import PersoCles from "./personnagesCles/persoCles";
import Ressource from "./ressources/ressource";
import Partenaire from "./partenaires/partenaire";
import Vcr from "./vcr/vcr";
import Newsletter from "./newsletter/newsletter";
import Footer from "./footer/footer";
import { PaginationDemo } from "./pagination/pagination1";

export default function Home() {
  return (
    <>
      <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        
        <div className="bg-white sm:bg-[url('/HomePage(2).png')] md:bg-[url('/HomePage(2).png')] lg:bg-[url('/HomePage(2).png')] 2xl:bg-[url('/HomePage2.png')] bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
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
                <div className="sm:mt-[0px] md:mt-[-195px] lg:mt-[0px] xl:mt-[0px] 2xl:mt-[0px]">
                  <Slide/>
                </div> 
                <div className=" relative 2xl:ml-[120px] lg:ml-[75px] ml-[55px]  mt-[-50px]">
                  <Mase/>
                </div>
                {/* Reseaux Sociaux */}
                {/* fb */}
                <div className=" relative ml-[30px] mt-[50px]">
                  <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <Link href="https://www.facebook.com/RMIFCenter">
                      <span className="bg-[url('/Ellipse4.png')] hover:text-white inline-flex h-[30px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
                        
                      </span>
                    </Link>
                  </button>
                </div>
                {/*X*/}
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
            <div className=" relative hidden sm:hidden md:block md:ml-[170px] lg:ml-[165px] 2xl:ml-[180px] md:mt-[0px] lg:mt-[10px] 2xl:mt-[-10px]">
              <div>
                  <p className="text-sky-950 font-bold md:text-[20px] text-[24px] relative mt-[35px] ">Centre Régional de Fusion de Information Maritimes</p>
                  <PresText/>
              </div>
              <div className="xl:mt-[50px] 2xl:mt-[150px] ">
                <Statistique/>
              </div>
            </div>
          </div>
          <div className="bg-white bg-center items-center justify-center">
            <div className="2xl:mt-[50px] lg:mt-[50px] grid grid-flow-row grif-cols-1 lg:grid-cols-2 lg:space-x-[350px] 2xl:space-x-[600px]">
              <div className="ml-[28px] bg-[url('/fleche.png')] w-[228px] h-[52px] ">
                <span className="inline-flex justify-center items-center mt-2 ml-4 font-bold text-[#092933]">
                  Dernières Actualités
                </span>
              </div>
              <div>
                <Link href="/contenu/tous" className='text-cyan-400 underline text-sm 2xl:ml-[1400px] lg:ml-[920px] ml-[50px] mt-[-150px]' >
                    voir toutes les actualités
                </Link>
              </div>
              
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
            <div className="sm:ml-[30px] mt-[50px]">
              <Ressource/>
            </div>
            <div className="sm:ml-[30px] mt-[80px]">
              <Partenaire/>
            </div>
            <div className="sm:ml-[30px] mt-[50px]">
              <Vcr/>
            </div>
            <div className="sm:ml-[30px] mt-[50px]">
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
