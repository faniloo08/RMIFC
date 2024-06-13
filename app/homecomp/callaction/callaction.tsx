import React from 'react'
import { Dialog, 
    DialogContent,
    DialogTrigger, } 
from '@radix-ui/react-dialog'

import Formulaire from '../formulaire/formulaire'

const Texte = ["n'importe où","n'importe quand"]
function Callaction() {
  return (
    <div className="w-full h-[190px] bg-cover flex bg-center bg-gradient-to-r from-[#112748] to-[#295FAE] justify-center items-center py-[40px]">
        <div className="bg-center bg-no-repeat w-[85%] bg-cover h-[120px] border border-white rounded-lg justify-center items-center">
            <div className="flex items-center justify-center">
                <div className="hidden sm:flex relative justify-center items-center w-[450px] h-[50px] bg-gradient-to-r from-[#1C3B68] to-[#1B4A92] mt-[-20px] py-[10px]">
                    <p className="text-white md:text-lg font-bold text-center">
                        Nous faire parvenir des Informations
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="md:grid grid-flow-row grid-cols-3">
                    <div className="flex items-center justify-center md:grid grid-flow-row grid-cols-2">
                        <div>
                            <p className="text-white text-md font-thin">
                                Entraidons-nous.
                            </p>
                        </div>
                        <div>
                            <p className="text-white text-md font-bold">
                                Ensemble
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:grid grid-flow-row grid-cols-2">
                        <div>
                            <p className="text-white text-md font-thin">
                                De
                            </p>
                        </div>
                        <div>
                            <p className="text-white text-md font-bold ml-[-90px]">
                                {Texte[0]}
                            </p>
                        </div>
                    </div>            
                    <div className="hidden md:grid grid-flow-row grid-cols-2">
                        <div>
                            <p className="text-white text-md font-thin ">
                                Et à
                            </p>
                        </div>
                        <div>
                            <p className="text-white text-md font-bold ml-[-80px]">
                                {Texte[1]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="mt-[10px] ">
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] hover:bg-white hover:text-black bg-sky-950 cursor-pointer items-center justify-center px-2 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                                Déposer une information
                            </button>
                        </DialogTrigger>
                        <DialogContent className=" bg-white/50 relative mt-[-400px] flex justify-center items-center rounded-lg">
                            <Formulaire/>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Callaction