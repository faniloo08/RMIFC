"use client";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"  

import React from "react"
import Link from "next/link";
// import Image from "next/image";

function Mase() {
    const images = [
        "/Mase1.webp",
        "/Mase2.webp",
        "/Mase3.webp",
        "/Mase4.webp",
        "/Mase5.webp",
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
    <div className="">
        <div className="text-white mt-[-60px] ml-[55px] font-bold mb-2 shadow-sm lg:text-md text-xs">
            Programme MASE
        </div>
        <div>
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-1/2 md:max-w-md lg:max-w-lg 2xl:max-w-2xl"
            >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                    <div className="">
                    <Card className="bg-transparent border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-10 ">
                            <Link href="https://www.commissionoceanindien.org/securite-maritime-mase/">
                                <div className="mb-6 grid grid-cols-1">
                                    <div>
                                    <img src={images[`${index}`]} alt={`Image ${index + 1}`} className="w-full h-auto transition-transform duration-300 transform-gpu hover:scale-110" loading="lazy"/>
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