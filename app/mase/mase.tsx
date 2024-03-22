"use client";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"  

import React, { useEffect, useState } from "react"

function Mase() {
    const images = [
        "/Mase1.png",
        "/Mase2.png",
        "/Mase3.png",
        "/SlideA.png",
        "/SlideB.png",
    ];
    const catégories = [
        "Arms Traffic",
        "Natural Events",
        "Marine Infrasture",
    ];
    const titres = [
        "Programme de luttes contre les trafics d'...",
        "Des mesures de sécurités ont été envi...",
        "Amélioration en cours pour l'année 2024",
        "MASE Title lié à la catégorie",
        "MASE Title lié à la catégorie",
    ];
    const dates = [
        "01/01/2024",
        "02/02/2024",
        "03/03/2024",
        "00/00/2024",
        "00/00/2024",
    ]

  return (
    <div>
        <div className="text-white mt-[-60px] ml-[2px] font-bold mb-2">
            Programme MASE
        </div>
        <div>
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-lg"
            >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="">
                    <Card className="bg-transparent border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-10  ">
                            <div className="mb-6 grid grid-cols-1">
                                <div>
                                <img src={images[`${index}`]} alt={`Image ${index + 1}`} className="w-full h-auto transition-transform duration-300 transform-gpu hover:scale-110"/>
                                </div>
                                <div>
                                    <p className="text-yellow-500 font-bold text-center">{catégories[`${index}`]}</p>
                                </div>
                                <div>
                                    <p className="text-center text-[13px] font-bold ">{titres[`${index}`]}</p>
                                </div>
                                <div>
                                    <p className="text-center font-light text-[13px] ">{dates[`${index}`]}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
    </div>
  );
}
 


export default Mase