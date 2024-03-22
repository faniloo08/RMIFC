import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className='w-full h-[308px] bg-gradient-to-r from-[#163583] to-[#4FFFAA] justify-center items-center py-[30px]'>
      <div className="relative ml-[100px] grid grid-rows-2 grid-flow-col gap-1">
        <div className='col-start-1 col-end-3 mb-[-20px]'>
          <Image
              className="dark-logo"
              width={250}
              height={58}
              src={"/Logo1.png" }
              alt="RMIFC logo"
          />
        </div>
        <div className='col-end-6 col-span-2 relative ml-[30px] mb-[-20px]'>
          <div className='grid grid-rows-1 grid-flow-col gap-1 mr-[20px]'>
            <Link href="/">
              <img src="/Ellipse6.png" alt="LinkedIn" width={30} height={30}/>
            </Link>
            <Link href="https://www.facebook.com/RMIFCenter">
              <img src="/Ellipse4.png" alt="Facebook" width={30} height={30}/>
            </Link>
            <Link href="/">
              <img src="/Ellipse5.png" alt="Twitter" width={30} height={30}/>
            </Link>
          </div>
        </div>
        <div className="col-start-1 col-end-5 grid grid-rows-1 grid-flow-col">
          <div className='grid grid-rows-4 grid-flow-col'>
            <div>
              <p className='text-white text-md font-bold mt-[-5px] relative mb-[5px]'>A propos</p>
            </div>
            <div>
              <Link href="/">
                <p className='text-sm text-white underline hover:text-blue-500'>Historique</p>
              </Link>
            </div>
            <div>
              <Link href="/">
                <p className='text-sm text-white underline hover:text-blue-500'>Missions et Valeurs</p>
              </Link>
            </div>
            <div>
              <Link href="/">
                <p className='text-sm text-white underline hover:text-blue-500'>Objectifs</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <p className='text-white text-md font-bold mt-[-5px] relative mb-[7px]'>Mentions Légales</p>
            </div>
            <div>
              <Link href="/">
                <p className='text-sm text-white underline hover:text-blue-500 mb-[2px]'>Informations su les droits d'auteurs</p>
              </Link>
            </div>
            <div>
              <Link href="/">
                <p className='text-sm text-white underline hover:text-blue-500 mb-[2px]'>Politiques de Confidentialité</p>
              </Link>
            </div>
            <div>
              <Link href="/">
                <p className='text-sm text-white underline hover:text-blue-500 mb-[2px]'>Conditions d'utilisation</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <p className='text-white text-md font-bold mt-[-5px] relative mb-[7px]'>Contact</p>
            </div>
            <div>
              <p className='text-sm text-white w-[200px]'>Ankaditoho, Soanierana, Antananarivo</p>
            </div>
            <div>
              <Link href="/">
                <p className='text-sm text-white underline hover:text-blue-500 mb-[2px]'> +261 34 05 414 12</p>
              </Link>
            </div>
            <div>
              <Link href="https://mail.google.com/mail/">
                <p className='text-sm text-white underline hover:text-blue-500 mb-[2px]'>assistante.communication@crfimmadagascar.org</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <p className='text-white text-md font-bold mt-[-5px] relative mb-[7px]'>Liens</p>
            </div>
            <div>
              <Link href="https://cfimmadagascar.org/">
                <p className='text-sm text-white underline hover:text-blue-500 mb-[2px]'>CFIM</p>
              </Link>
            </div>
            <div>
              <Link href="https://www.meteomadagascar.mg/meteo-madagascar/a-propos-de-meteo/">
                <p className='text-sm text-white underline hover:text-blue-500 mb-[2px]'>Météorologie</p>
              </Link>
            </div>
            <div>
              <Link href="https://www.primature.gov.mg/index.php/primature/organismes-rattaches/">
                <p className='text-sm text-white underline hover:text-blue-500 mb-[2px]'>Primature Malgache</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className='text-xs text-white text-center mt-[25px] border-t pt-1'>©2024, Fanilo Rabemanantsoa. Tous droits réservés</p>    
    </div>
  )
}

export default Footer