import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Image from 'next/image';
import Link from 'next/link';
const partenaire = [
    "Intergovernmental Authority on Development",
    "East African Community",
    "Common Market for Eastern and Southern Africa",
    "Comission de l'Océan Indien",
    "Union Européenne"
]
function Partenaire() {
  return (
    <div className='flex items-center justify-center'>
        <div className="grid grid-rows-1 grid-flow-col place-content-center gap-2  2xl:w-[1480px] lg:w-[1000px] h-[125px] justify-center items-center py-[40px]">
            <div className="relative justify-center items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="https://igad.int/">
                                <Image 
                                src="/Igad.webp" 
                                alt="Intergovernmental Authority on Development" 
                                width={180} 
                                height={125}/>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="mb-[5px] text-center text-xs w-[200px]">{partenaire[0]}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="relative justify-center items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="https://www.eac.int/">
                                <Image 
                                src="/EAC.webp" 
                                alt="East African Community" 
                                width={180} 
                                height={125} />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="mb-[5px] text-center text-xs">{partenaire[1]}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="relative justify-center items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="https://www.comesa.int/?lang=fr">
                                <Image 
                                src="/Comesa.webp" 
                                alt="Common Market for Eastern and Southern Africa" 
                                width={180} 
                                height={125} />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="mb-[5px] text-center text-xs w-[200px]">{partenaire[2]}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="relative justify-center items-center">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="https://www.commissionoceanindien.org/">
                            <Image 
                            src="/OI.webp" 
                            alt="Comission de l'Océan Indien" 
                            width={180} 
                            height={125}/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="mb-[5px] text-center text-xs">{partenaire[3]}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div className="relative justify-center items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="https://european-union.europa.eu/index_fr">
                                <Image 
                                src="/UE.webp" 
                                alt="Union Européenne" 
                                width={180} 
                                height={125}/>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="mb-[5px] text-center text-xs">{partenaire[4]}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    </div>
  )
}

export default Partenaire