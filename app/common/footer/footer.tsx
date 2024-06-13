import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { translate } from '@/lib/translate';


function Footer() {
  const Apropos = [
    `${translate("Historique")}`,
    `${translate("Missions et Valeurs")}`,
    `${translate("Objectifs")}`
  ]
  const Mentions = [
    "",
    `${translate("Informations sur les droits d'auteurs")}`,
    `${translate("Politiques de Confidentialité")}`,
    `${translate("Conditions d'utilisation")}`
  ]
  
  const Contact = [
    "Ankaditoho, Soanierana, Antananarivo",
    "+261 34 05 414 12",
    "assistante.communication@crfimmadagascar.org"
  
  ]
  
  const Liens = [
    `${translate("CFIM")}`,
    `${translate("Météorologie")}`,
    `${translate("Primature Malgache")}`
  ]
  return (
    <div className="w-full md:h-[308px] bg-gradient-to-r from-[#163583] to-[#4FFFAA] justify-center items-center py-[30px]">
      <div className="relative  sm:ml-[100px] grid grid-rows-2 grid-flow-col gap-1">
        <div className="col-start-1 col-end-3 mb-[-20px]">
          <Image
              className="dark-logo"
              width={250}
              height={58}
              src={"/Logo1.png" }
              alt="RMIFC logo"
          />
        </div>
        <div className="col-end-6 col-span-2 relative ml-[30px] mb-[-20px]">
          <div className="grid grid-rows-1 grid-flow-col gap-1 mr-[20px]">
            <Link href="/">
              <Image 
              src="/Ellipse6.png"
              alt="LinkedIn" 
              width={30} 
              height={30}/>
            </Link>
            <Link href="https://www.facebook.com/RMIFCenter">
              <Image 
              src="/Ellipse4.png" 
              alt="Facebook" 
              width={30} 
              height={30}/>
            </Link>
            <Link href="https://twitter.com/RMIFCenter">
              <Image 
              src="/Ellipse5.png" 
              alt="Twitter" 
              width={30} 
              height={30}/>
            </Link>
          </div>
        </div>
      </div>
      <div className=" ml-[20px] 2xl:ml-[120px] lg:ml-[60px] mt-[35px] grid md:grid-rows-1 md:grid-flow-col">
        <div className="grid grid-rows-4 grid-flow-col mb-1">
          <div>
            <p className="text-white text-xs md:text-md font-bold mt-[-5px] relative mb-[5px]">{translate("A propos")}</p>
          </div>
          <div>
            <Link href="/infopages/historique">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500">{Apropos[0]}</p>
            </Link>
          </div>
          <div>
            <Link href="/infopages/historique">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500">{Apropos[1]}</p>
            </Link>
          </div>
          <div>
            <Link href="/infopages/historique">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500">{Apropos[2]}</p>
            </Link>
          </div>
        </div>
        <div className='mb-1'>
          <div>
            <p className="text-white text-xs md:text-md font-bold mt-[-5px] relative mb-[7px]">{translate("Mentions Légales")}</p>
          </div>
          <div>
            <Link href="/">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500 mb-[2px]">{Mentions[0]}</p>
            </Link>
          </div>
          <div>
            <Link href="/">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500 mb-[2px]">{Mentions[1]}</p>
            </Link>
          </div>
          <div>
            <Link href="/">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500 mb-[2px]">{Mentions[2]}</p>
            </Link>
          </div>
        </div>
        <div className='mb-1'>
          <div>
            <p className="text-white text-xs md:text-md font-bold mt-[-5px] relative mb-[7px]">{translate("Contact")}</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-white w-[200px]">{Contact[0]}</p>
          </div>
          <div>
            <Link href="/">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500 mb-[2px]"> {Contact[1]}</p>
            </Link>
          </div>
          <div>
            <Link href="https://mail.google.com/mail/">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500 mb-[2px]">{Contact[2]}</p>
            </Link>
          </div>
        </div>
        <div className='mb-1'>
          <div>
            <p className="text-white text-xs md:text-md font-bold mt-[-5px] relative mb-[7px]">{translate("Liens")}</p>
          </div>
          <div>
            <Link href="https://cfimmadagascar.org/">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500 mb-[2px]">{Liens[0]}</p>
            </Link>
          </div>
          <div>
            <Link href="https://www.meteomadagascar.mg/meteo-madagascar/a-propos-de-meteo/">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500 mb-[2px]">{Liens[1]}</p>
            </Link>
          </div>
          <div>
            <Link href="https://www.primature.gov.mg/index.php/primature/organismes-rattaches/">
              <p className="text-xs sm:text-sm text-white underline hover:text-blue-500 mb-[2px]">{Liens[2]}</p>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs text-white text-center mt-[25px] border-t pt-1">©2024, RFIMC Inc. {translate("Tous droits réservés")}</p>    
    </div>
  )
}

export default Footer