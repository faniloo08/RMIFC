import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'


function Partenaire() {
  return (
    <div>
        <div className='grid grid-rows-1 grid-flow-col gap-4 ml-[40px] w-[1000px] h-[125px] justify-center items-center py-[40px]'>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <img src="/Igad.png" alt="Intergovernmental Authority on Development" width={190} height={125}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className='mb-[5px] text-center text-xs w-[200px]'>Intergovernmental Authority on Development</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <img src="/EAC.png" alt="East African Community" width={190} height={125} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className='mb-[5px] text-center text-xs'>East African Community</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <img src="/Comesa.png" alt="Common Market for Eastern and Southern Africa" width={190} height={125} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className='mb-[5px] text-center text-xs w-[200px]'>Common Market for Eastern and Southern Africa</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <img src="/OI.png" alt="Comission de l'Océan Indien" width={190} height={125}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className='mb-[5px] text-center text-xs'>Comission de l'Océan Indien</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
            <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <img src="/UE.png" alt="Union Européenne" width={190} height={125}/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className='mb-[5px] text-center text-xs'>Union Européenne</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
        </div>
    </div>
  )
}

export default Partenaire