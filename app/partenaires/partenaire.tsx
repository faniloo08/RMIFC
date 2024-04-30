import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Image from 'next/image';

const partenaire = [
    "Intergovernmental Authority on Development",
    "East African Community",
    "Common Market for Eastern and Southern Africa",
    "Comission de l'Océan Indien",
    "Union Européenne"
]
function Partenaire() {
  return (
    <div>
        <div className="grid grid-rows-1 grid-flow-col 2xl:gap-6 lg:gap-4 md:ml-[40px] 2xl:w-[1480px] lg:w-[1000px] h-[125px] justify-center items-center py-[40px]">
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image 
                        src="/Igad.png" 
                        alt="Intergovernmental Authority on Development" 
                        width={190} 
                        height={125}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="mb-[5px] text-center text-xs w-[200px]">{partenaire[0]}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image 
                        src="/EAC.png" 
                        alt="East African Community" 
                        width={190} 
                        height={125} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="mb-[5px] text-center text-xs">{partenaire[1]}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image 
                        src="/Comesa.png" 
                        alt="Common Market for Eastern and Southern Africa" 
                        width={190} 
                        height={125} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="mb-[5px] text-center text-xs w-[200px]">{partenaire[2]}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image 
                        src="/OI.png" 
                        alt="Comission de l'Océan Indien" 
                        width={190} 
                        height={125}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="mb-[5px] text-center text-xs">{partenaire[3]}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image 
                        src="/UE.png" 
                        alt="Union Européenne" 
                        width={190} 
                        height={125}/>
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