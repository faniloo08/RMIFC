import React from 'react'
import Link from 'next/link'
import { Dialog, 
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger, } 
from '@radix-ui/react-dialog'

import Formulaire from '../formulaire/formulaire'

function Callaction() {
  return (
    <div className='w-full h-[190px] bg-gradient-to-r from-[#112748] to-[#295FAE] justify-center items-center py-[40px]'>
        
        <div className='w-[1000px] h-[120px] border border-white rounded-lg justify-center items-center ml-[72px]'>
            <div className='w-[450px] h-[50px] bg-gradient-to-r from-[#1C3B68] to-[#1B4A92] justify-center items-center ml-[265px] mt-[-20px] py-[10px]'>
                <p className='text-white text-lg font-bold text-center'>
                    Nous faire parvenir des Informations
                </p>
            </div>
            <div className='ml-[70px]'>
                <p className='text-white text-md font-thin'>
                    Entraidons-nous.
                </p>
                <p className='text-white text-md font-bold mt-[-23px] ml-[125px]'>
                    Ensemble
                </p>
            </div>
            <div className='ml-[430px] mt-[-26px] mb-2'>
                <p className='text-white text-md font-thin'>
                    De
                </p>
                <p className='text-white text-md font-bold mt-[-23px] ml-[25px]'>
                    n'importe où
                </p>
            </div>            
            <div className='ml-[780px] mt-[-34px]'>
                <p className='text-white text-md font-thin'>
                    Et à
                </p>
                <p className='text-white text-md font-bold mt-[-23px] ml-[30px]'>
                   n'importe quand
                </p>
            </div>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px]">
                            <span className=" ml-[410px] hover:bg-white hover:text-black bg-sky-950  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                                Déposer une information
                            </span>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="relative mt-[-400px] ml-[280px] justify-center items-center sm:max-w-[425px]">
                        <Formulaire/>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>
  )
}

export default Callaction