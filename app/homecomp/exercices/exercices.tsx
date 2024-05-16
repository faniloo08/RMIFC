import * as React from "react";
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/exocard"
import {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel1"
import Link from 'next/link'
import Image from 'next/image';
type CarouselApi = UseEmblaCarouselType[1]


export default function Exercices() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const articleImages = ['/Ex1.png', '/Ex2.png', '/Ex3.png', '/Ex4.png','/Ex1.png', '/Ex4.png', '/Ex2.png', '/Ex3.png'];
  const articleTitles = ['Exercice CUTLASS EXPRESS', 'Formation sur le "Maritime Domain Awareness"', 'Exercice TTX WIOPOLREX', 'Conférence « The southern Drug Route Partnership »', 'Exercice AEREZREZ 1', 'Exercice AEREZREZ 2', 'Exercice AEREZREZ 3', 'Exercice AEREZREZ 4'];
  const articleDates = ['01/03/24', '16/10/23', '27/07/23', '20/04/23', '01/01/24', '01/01/24', '01/01/24', '01/01/24'];
  const articleLink = ["https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02D2dZQcbiXg7HzuCT77956JecdVJgZFdvAPnnFoJeBTmBuKgr74s8fDv8eZYjJWVbl&show_text=true&width=500", 
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid03AvBL76ondEthbHejn7nDjECRNE2TyrtvsEfrp8PPXM4yy9KXYqZJ1hdnbg8kdfel&show_text=true&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02iXQcUeAMH4yYThmPYSJkAjihKjLZFvMWFNCH5DjcWHDhv76BpBtgUxZmFR34q2hhl&show_text=true&width=500",
  "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02qhLXCdNZ6mC2FGqAWbBaQbkQoNEjeRjTpxwH6kPexqkvWvpeMwQhHJn1D8gPfAPl&show_text=true&width=500",
  "",
  "",
  "",
  ""
  ];

  return (
    <div>
      <div>
        <p className="justify-center items-center text-center font-bold text-lg">
          EXERCICES REALISES
        </p>
      </div>
      <div className="relative items-center justify-center overflow-hidden">
      <Carousel setApi={setApi} className="md:w-full md:h-full">
        <CarouselContent>
          {Array.from({ length: Math.ceil(articleImages.length / 4) }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="md:p-3 items-center justify-center">
                    <Card>
                      <CardContent className="grid grid-rows-2 grid-flow-col gap-4 justify-center items-center">
                        {Array.from({ length: 4 }).map((_, itemIndex: number) => {
                          const articleIndex = index * 4 + itemIndex;
                          if (articleIndex >= articleImages.length) {
                            return null; // Si l'indice dépasse la longueur du tableau, on ne rend rien
                          }
                          return (
                            <div key={itemIndex} className="justify-center items-center">
                              <div className="mt-[50px] ">
                                {/*Cover*/}
                                <Image 
                                src = {`${articleImages[index * 4 + itemIndex]}`}
                                alt = "image cover"
                                width={70}
                                height={70}
                                  className="inline-flex cursor-pointer items-center justify-center rounded-full text-xl hover:text-2xl font-medium text-white"
                                />
                                {/* Titre */}
                                <Link
                                  href={`${articleLink[articleIndex]}`}
                                  className="hover:text-sky-600"
                                >
                                  <p className="ml-[80px] mt-[-60px] font-bold text-sm">
                                    {articleTitles[articleIndex]}
                                  </p>
                                  <p className="ml-[80px] font-light text-sm">
                                    {articleDates[articleIndex]}
                                  </p>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <div className="hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      <div className="py-4 text-center text-sm text-muted-foreground">
        Page {current} of {count}
      </div>
    </div>
  );
}
