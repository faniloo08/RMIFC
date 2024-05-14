"use client"
import { NavBar } from "./common/navbar/nav";
import {MenuBar} from "./common/menubar/menu";
import Slide from "./homecomp/Slider/slide";
import Mase from "./homecomp/mase/mase";
import { PresText } from "./homecomp/presentation/prestext";
import Statistique from "./homecomp/statistique/statistique";
import Link from "next/link";
import Articles from "./homecomp/articles/articles";
import Callaction from "./homecomp/callaction/callaction";
import Exercices from "./homecomp/exercices/exercices";
import Recherche from "./homecomp/recherche/recherche";
import PersoCles from "./homecomp/personnagesCles/persoCles";
import Ressource from "./homecomp/ressources/ressource";
import Partenaire from "./homecomp/partenaires/partenaire";
import Vcr from "./homecomp/vcr/vcr";
import Newsletter from "./homecomp/newsletter/newsletter";
import Footer from "./common/footer/footer";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        <div className="bg-white md:bg-[url('/HomePage(2).png')] lg:bg-[url('/HomePage(2).png')] 2xl:bg-[url('/HomePage2.png')] bg-center bg-no-repeat items-center justify-center w-[85%] h-4/5 bg-cover">
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
          <div className=" ml-[20px] bg-cover grid md:grid-cols-2 items-center justify-center">
            <div className="bg-cover grid grid-cols-1  items-center justify-center">
              < div className="ml-3 relative mt-[50px]">
                <div className="sm:mt-[0px] md:mt-[-195px] lg:mt-[0px] xl:mt-[0px] 2xl:mt-[0px]">
                  <Slide/>
                </div> 
                <div className=" relative 2xl:ml-[120px] lg:ml-[75px] md:ml-[15px] sm:ml-[120px] mt-[-50px]">
                  <Mase/> 
                </div>
                {/* Reseaux Sociaux */}
                
                <div className="grid grid-cols-2 grid-flow-row md:space-x-[-150px] 2xl:space-x-[-250px] ml-[30px] mt-[50px]">
                  {/* fb */}
                  <div className="">
                      <Link href="https://www.facebook.com/RMIFCenter">
                        <Image 
                        src ="/Ellipse4.png"
                        alt="FB"
                        width={50}
                        height={50}
                        className=" hover:text-white inline-flex cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl"
                        />
                      </Link>
                  </div>
                    
                  {/*X*/}
                  <div className="">
                    <Link href="/">
                      <Image
                      src= "/Ellipse5.png"
                      alt="X"
                      width={50}
                      height={50}
                      className="hover:text-white inline-flex cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl"
                      />
                    </Link>
                  </div>
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
              <Recherche placeholder=""/>
            </div>
            <div className="mt-[50px]">
              <Exercices/>
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
            <div className="md:ml-[30px] mt-[50px]">
              <Ressource/>
            </div>
            <div className="md:ml-[30px] mt-[80px]">
              <Partenaire/>
            </div>
            <div className="md:ml-[30px] mt-[50px]">
              <Vcr/>
            </div>
            <div className="md:ml-[30px] mt-[50px]">
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
