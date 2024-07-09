"use client";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"  
import {
    type UseEmblaCarouselType,
} from "embla-carousel-react"
type CarouselApi = UseEmblaCarouselType[1]
import React ,{ useState, useEffect } from 'react';
import {DataToTable} from '../../../../lib/prod';
import Link from "next/link";
import { useTranslation } from "react-i18next"
// import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
//import ReactMarkdown from 'react-markdown';

export const slide = [
    "https://backend.crfimmadagascar.org/uploads/pixelcut_export_f158ce40c4.jpeg",
    "https://backend.crfimmadagascar.org/uploads/pixelcut_export_1_4c52f851b5.jpeg",
    "https://backend.crfimmadagascar.org/uploads/pixelcut_export_9414ad0205.png"
];

interface Article {
    titre: string;
    description: string;
    date: string;
    cover: string; //=header
    article: string;
    slug: string;
}

export function UseImagesSlider() {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const pathname = usePathname();
  
    useEffect(() => {
      const fetchDonnees = async () => {
        const titres = await DataToTable(pathname);
        const urls = titres.map(article => article.cover);
        setImageUrls(urls);
      };
      fetchDonnees();
    }, [pathname]);
  
    return imageUrls;
  }
  
function Mase() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [articles, setArticles] = useState<Article[]>([]);
    const { t } = useTranslation();
    const pathname = usePathname();

    useEffect(() => {
        const fetchDonnees = async () => {
            const titres = await DataToTable(pathname);
            setArticles(titres);
            console.log('Articles fetched:', titres);
        };
        fetchDonnees();
    }, [pathname]);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const itemsPerPage = 5;//production des 5 derniers jours 
    const totalItems = Math.ceil(articles.length / itemsPerPage) * itemsPerPage;
    const displayArticles = articles.slice(0, totalItems);

    console.log(`Current: ${current}`);
    console.log('Articles in current slice:', displayArticles);

    return (
        <div className="">
            <div className="text-white mt-[-60px] ml-[55px] font-bold mb-2 shadow-sm lg:text-md text-xs">
                {t("mase.Production Hebdomadaire")}
            </div>
            <div>
                <Carousel
                    opts={{ align: "start" }}
                    className="w-1/2 md:max-w-md lg:max-w-lg 2xl:max-w-2xl"
                    setApi={setApi}
                >
                    <CarouselContent>
                        {displayArticles.map((article, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                                <div className="">
                                    <Card className="bg-transparent border-none">
                                        <CardContent className="flex aspect-square items-center justify-center p-10">
                                            <Link href={`/contenu/prod?query=${article.slug}`}>
                                                <div className="mb-6 grid grid-cols-1">
                                                    <div>
                                                        <img src={article.cover} alt={`Image ${index + 1}`} className="w-full h-auto transition-transform duration-300 transform-gpu hover:scale-110" loading="lazy" />
                                                    </div>
                                                    <div className="hover:text-[#7A1A1A]">
                                                        <div>
                                                            <p className="hover:text-[#7A1A1A] text-yellow-500 font-bold text-center text-[13px]">{article.titre}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-center text-[14px] font-bold ">{article.description}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-center font-light text-[13px] ">{article.date}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="mt-[-120px]" />
                    <CarouselNext className="mt-[-120px]" />
                </Carousel>
            </div>
        </div>
    );
}

export default Mase;