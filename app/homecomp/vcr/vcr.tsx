"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from 'next/image';

const Texte = [
  "Devenir Volontaire aux CRFIM Madagascar",
  "Devenez un héros des mers en rejoignant le Centre de Fusion d'Informations Maritimes. En tant que volontaire, vous contribuerez à la sécurité maritime mondiale en luttant contre les trafics illicites et en coordonnant des opérations avec des organisations internationales de premier plan.Rejoignez-nous pour protéger nos océans et assurer un avenir sûr pour tous.",
  "Télécharger le formulaire"
]
function Vcr() {
  const [isHovered, setIsHovered] = useState(false);
  const handleDownload = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSc0YNS8mpJ9nURTH-mY7eoMgCX7Sby4MoaML4Etr5zwKkHa6Q/viewform?usp=sf_link';
  };
  const images = [
    "/VCR.webp",
    "/VCR1.webp"
  ];
  return (
    <div className="w-[85%] sm:h-[300px] bg-gradient-to-r from-[#9BD95D] to-[#181C70] bg-cover flex bg-center justify-center items-center py-[40px]">
        <div className="grid md:grid-cols-2 grid-flow-row gap-3 w-[90%] justify-center items-center">
          <div className="hidden md:block">
          <ImagesSlider className=" drop-shadow flex h-[250px] justify-center items-center" images={images}>
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
          <div className="">
            <p className="text-white mt-[-20px] border-b pb-2 font-semibold">{Texte[0]}</p>
            <p className="text-sm  text-white font-light mt-[10px]">
                {Texte[1]}
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc0YNS8mpJ9nURTH-mY7eoMgCX7Sby4MoaML4Etr5zwKkHa6Q/viewform?usp=sf_link">
              <button className="mt-[20px] drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px]"                     onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleDownload}>
                    <Image src={isHovered ? "/Download1(1).png" : "/Download.png"} 
                    alt="Telecharger" 
                    width={25} height={25} 
                    className="mt-[10px]" 
                    />
                    <span className="hover:text-green-200 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                        {Texte[2]}
                    </span>
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Vcr