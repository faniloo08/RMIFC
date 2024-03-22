"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { ImagesSlider } from "@/components/ui/images-slider";

function Vcr() {
  const [isHovered, setIsHovered] = useState(false);
  const handleDownload = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSc0YNS8mpJ9nURTH-mY7eoMgCX7Sby4MoaML4Etr5zwKkHa6Q/viewform?usp=sf_link';
  };
  const images = [
    "/VCR.png",
    "/VCR1.png"
  ];
  return (
    <div className='ml-[40px] w-[1000px] h-[300px] bg-gradient-to-r from-[#9BD95D] to-[#181C70] justify-center items-center py-[40px]'>
        <div className='grid grid-rows-1 grid-flow-col'>
          <div className='ml-[20px] mt-[-20px]'>
          <ImagesSlider className=" drop-shadow flex h-[250px] w-[450px] justify-center items-center" images={images}>
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col justify-center items-center"
            >

            </motion.div>
          </ImagesSlider>
          </div>
          <div>
            <div className='w-[450px]'>
              <p className=' text-white mt-[-20px] scroll-m-20 border-b pb-2 font-semibold tracking-tight first:mt-0'>Devenir Volontaire aux CRFIM Madagascar</p>
              <p className='text-sm  text-white font-light mt-[10px]'>
                Devenez un héros des mers en rejoignant le Centre de Fusion d'Informations Maritimes. 
                En tant que volontaire, vous contribuerez à la sécurité maritime mondiale en luttant contre les trafics illicites et en coordonnant des opérations avec des organisations internationales de premier plan. 
                Rejoignez-nous pour protéger nos océans et assurer un avenir sûr pour tous.
              </p>
              <Link href='https://docs.google.com/forms/d/e/1FAIpQLSc0YNS8mpJ9nURTH-mY7eoMgCX7Sby4MoaML4Etr5zwKkHa6Q/viewform?usp=sf_link'>
                <button className="mt-[20px] drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px]"                     onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={handleDownload}>
                      <img src={isHovered ? "/Download1.png" : "/Download.png"} 
                      alt="Telecharger" 
                      width={25} height={25} 
                      className='mt-[10px]' 

                      />
                      <span className="hover:text-yellow-300 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                          Télécharger le formulaire
                      </span>
                </button>
              </Link>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Vcr