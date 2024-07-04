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


interface Article {
    titre: string;
    description: string;
    date: string;
    cover: string; //=header
    article: string;
    slug: string;
    // Ajoutez d'autres propriétés si nécessaire
}

    //génération de l'apperçu : 
    // const generatePreview = (content: string): string => {
    //     const preview = content.slice(0, 100);
    //     return preview
    //   };
    // const { t } = useTranslation('common');

export function imagesf() {
    const pathname = usePathname();
    //const [current, setCurrent] = React.useState(0);
    //const [articles, setArticles] = useState<Article[]>([]);
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        const fetchDonnees = async () => {
          const titres = await DataToTable(pathname);
          const urls = titres.map(article => article.cover);
          setImageUrls(urls);
        };
        fetchDonnees();
      }, [pathname]);
    
      console.log(imageUrls);
    // Retourner le tableau d'URL
    return imageUrls;
}  

function Mase() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    //const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
        return;
        }

        //setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    const {t} = useTranslation();
    const pathname = usePathname();
    const [articles, setArticles] = useState<Article[]>([]);
    
    useEffect(() => {
        const fetchDonnees = async () => {
            // Appelez la fonction Donnees pour obtenir les données
            const titres  = await DataToTable(pathname);
            setArticles(titres);
            console.log(titres)
    
        };
        fetchDonnees();
    }, []);

    const itemsPerPage = 5;
    //Toutes ces actions sont à remplacer par les articles écrits par les opérateurs
    // const catégories = [
    //     `${t("mase.Action pour la Somalie")}`,
    //     `${t("mase.Lutte contre la piraterie")}`,
    //     `${t("mase.Flux financiers illicites")}`,
    //     `${t("mase.Sécurité Maritime")}`,
    //     `${t("mase.Réseau d'informations")}`
    // ];
    // const titres = [
    //     `${t("mase.Le plan d'action national du WiMS marque l'about...")}`,
    //     `${t("mase.En 2022, « seulement » 300 actes de piraterie ...")}`,
    //     `${t("mase.L'Afrique perd chaque année environ 88,6 mill ...")}`,
    //     `${t("mase.De nouvelles propositions en faveur de trans...")}`,
    //     `${t("mase.Les Centres régionaux de fusion de l'information...")}`,
    // ];
    // const dates = [
    //     "01/01/2024",
    //     "02/02/2024",
    //     "03/03/2024",
    //     "01/06/2023",
    //     "00/00/2024",
    // ]

  return (
    <div className="">
        <div className="text-white mt-[-60px] ml-[55px] font-bold mb-2 shadow-sm lg:text-md text-xs">
            {t("mase.Production Hebdomadaire")}
        </div>
        <div>
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-1/2 md:max-w-md lg:max-w-lg 2xl:max-w-2xl"
            setApi={setApi}
            >
            <CarouselContent>
                {articles.slice((current - 1) * itemsPerPage, current * itemsPerPage).map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                    <div className="">
                    <Card className="bg-transparent border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-10 ">
                            <Link href={`/contenu/prod?query=${article.slug}`}>
                                <div className="mb-6 grid grid-cols-1">
                                    <div>
                                    <img src={article.cover} alt={`Image ${index + 1}`} className="w-full h-auto transition-transform duration-300 transform-gpu hover:scale-110" loading="lazy"/>
                                    </div>
                                    <div className="hover:text-[#7A1A1A]">
                                        <div>
                                            <p className= " hover:text-[#7A1A1A] text-yellow-500 font-bold text-center text-[13px]">{article.titre}</p>
                                        </div>
                                        <div>
                                            <p className= "text-center text-[14px] font-bold ">
                                                {/* <ReactMarkdown> 
                                                    {generatePreview(article.article)}
                                                </ReactMarkdown> */}
                                                {article.description}
                                            </p>
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
            <CarouselPrevious className="mt-[-120px]"/>
            <CarouselNext className="mt-[-120px]" />
        </Carousel>
        </div>
    </div>
  );
}
 


export default Mase