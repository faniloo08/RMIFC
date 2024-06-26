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
import Link from "next/link";

function Mase() {
    const images = [
        "/Mase1.png",
        "/Mase2.png",
        "/Mase3.png",
        "/Mase4.png",
        "/Mase5.png",
    ];
    const catégories = [
        "Action pour la Somalie",
        "Lutte contre la piraterie",
        "Flux financiers illicites",
        "Sécurité Maritime",
        "Réseau d’informations"
    ];
    const titres = [
        "Le plan d'action national du WiMS marque l'about...",
        "En 2022, « seulement » 300 actes de piraterie ...",
        "L'Afrique perd chaque année environ 88,6 mill ...",
        "De nouvelles propositions en faveur de trans...",
        "Les Centres régionaux de fusion de l’information...",
    ];
    const dates = [
        "01/01/2024",
        "02/02/2024",
        "03/03/2024",
        "01/06/2023",
        "00/00/2024",
    ]

  return (
    <div>
        <div className="text-white mt-[-60px] ml-[55px] font-bold mb-2 shadow-sm">
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
                        <CardContent className="flex aspect-square items-center justify-center p-10 ">
                            <Link href="https://www.commissionoceanindien.org/securite-maritime-mase/">
                                <div className="mb-6 grid grid-cols-1">
                                    <div>
                                    <img src={images[`${index}`]} alt={`Image ${index + 1}`} className="w-full h-auto transition-transform duration-300 transform-gpu hover:scale-110"/>
                                    </div>
                                    <div className="hover:text-[#7A1A1A]">
                                        <div>
                                            <p className= " hover:text-[#7A1A1A] text-yellow-500 font-bold text-center text-[13px]">{catégories[`${index}`]}</p>
                                        </div>
                                        <div>
                                            <p className= "text-center text-[14px] font-bold ">{titres[`${index}`]}</p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <p className="text-center font-light text-[13px] ">{dates[`${index}`]}</p>
                                    </div>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="mt-[-120px]"/>
            <CarouselNext className="mt-[-120px]" />
        </Carousel>
        </div>
    </div>
  );
}
 


export default Mase