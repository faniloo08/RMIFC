import React from 'react'
import { Dialog, 
    DialogContent,
    DialogTrigger, } 
from '@radix-ui/react-dialog'

import Formulaire from '../formulaire/formulaire'

const Texte = ["n'importe où","n'importe quand"]
function Callaction() {
  return (
    <div className="w-full h-[190px] bg-gradient-to-r from-[#112748] to-[#295FAE] justify-center items-center py-[40px]">
        
        <div className="2xl:w-[1480px] lg:w-[1000px] h-[120px] border border-white rounded-lg justify-center items-center md:ml-[72px]">
            <div className="hidden sm:block w-[450px] h-[50px] bg-gradient-to-r from-[#1C3B68] to-[#1B4A92] justify-center items-center 2xl:ml-[500px] lg:ml-[265px] mt-[-20px] py-[10px]">
                <p className="text-white text-lg font-bold text-center">
                    Nous faire parvenir des Informations
                </p>
            </div>
            <div className="2xl:ml-[220px]">
                <div className="ml-[70px]">
                    <p className="text-white text-md font-thin">
                        Entraidons-nous.
                    </p>
                    <p className="text-white text-md font-bold mt-[-23px] ml-[125px]">
                        Ensemble
                    </p>
                </div>
                <div className="hidden sm:block ml-[430px] mt-[-26px] mb-2">
                    <p className="text-white text-md font-thin">
                        De
                    </p>
                    <p className="text-white text-md font-bold mt-[-23px] ml-[25px]">
                        {Texte[0]}
                    </p>
                </div>            
                <div className="hidden sm:block ml-[780px] mt-[-34px]">
                    <p className="text-white text-md font-thin">
                        Et à
                    </p>
                    <p className="text-white text-md font-bold mt-[-23px] ml-[30px]">
                        {Texte[1]}
                    </p>
                </div>
            </div>
            <div className="ml-[-340px] sm:ml-[0px] mt-[10px] 2xl:ml-[220px]">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] ml-[410px] hover:bg-white hover:text-black bg-sky-950 cursor-pointer items-center justify-center px-2 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                            Déposer une information
                        </button>
                    </DialogTrigger>
                    <DialogContent className=" bg-white/50 relative mt-[-400px] ml-[100px] justify-center items-center sm:max-w-[500px] rounded-lg">
                        <Formulaire/>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>
  )
}

export default Callaction