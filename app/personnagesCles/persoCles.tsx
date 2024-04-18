import React from 'react'
import { motion } from "framer-motion";
import {CardStack} from '@/components/ui/card-stack';
import { cn } from "@/lib/utils"; 
import { useState, useEffect } from "react";

function PersoCles() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % QUOTES.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='w-full h-[300px] bg-gradient-to-r from-[#208674] to-[#0B0A35] justify-center items-center py-[50px] px-[40px]'>
        <div className='ml-[30px]'>
          <p className=' italic font-bold text-[48px]'>
              "
          </p>
          <div className='grid grid-rows-1'>
              {/*1er personnage*/}
              <div>
                  <motion.div
                  className="text-xs md:text-md 2xl:w-[950px] lg:w-[500px] font-bold italic"
                  key={currentQuoteIndex}
                  initial={{ opacity: 0.0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                  >
                  {QUOTES[currentQuoteIndex].text}
                  </motion.div>
              </div>
              <div className="hidden sm:flex 2xl:ml-[550px] lg:ml-[320px] mt-[-150px] h-[50px]  items-center justify-center w-full">
                  <CardStack items={CARDS} />
              </div> 
          </div>
        </div>
    </div>
  )
}

export default PersoCles


   
const CARDS = [
    {
      id: 0,
      name: "RALAIARIVONY Alex",
      designation: "Capitaine de Vaisseau, Directeur du CRFIM",
      content: (
        <img src="/MrDr.png" alt="Mr le Directeur" width={150} height={200} />
      ),
    },
    {
      id: 1,
      name: "MAHATANTE Paubert",
      designation: "Ministre de la pêche et de l'économie bleu",
      content: (
        <img src="/Ministre.png" alt="Mr le Directeur" width={150} height={200} />
      ),
    },
    {
      id: 2,
      name: "MARIMOUTOU Vêlayoudom",
      designation: "Secrétaire général de la COI",
      content: (
        <img src="/COI.png" alt="Mr le Directeur" width={150} height={200} />
      ),
    },
];

const QUOTES = [
    {
        id:0,
        text: "Au CRFIM, nous nous engageons à assurer la sécurité et la sûreté des voies maritimes dans l'océan Indien, en collaborant étroitement avec nos partenaires nationaux et internationaux."
    },
    {
        id:1,
        text:"La coopération régionale est essentielle pour relever les défis complexes de la surveillance maritime. Nous sommes fiers de collaborer avec le CRFIM pour renforcer la coordination et l'échange d'informations entre les États membres de la Commission de l'Océan Indien."
    },
    {
        id:2,
        text:"La sécurité maritime est une priorité absolue pour notre gouvernement, et le travail du CRFIM dans le domaine de la surveillance et de l'échange d'informations joue un rôle essentiel dans la protection de nos eaux et de nos ressources marines."
    },  
];