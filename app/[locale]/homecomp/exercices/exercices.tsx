"use client";

import React ,{ useState, useEffect } from 'react';
import {DataToTable} from '../../../../lib/oli';
import {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel1"
import Image from 'next/image';
type CarouselApi = UseEmblaCarouselType[1]
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { title } from "process";
import { useTranslation } from "react-i18next";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Exercices() {
  const {t} = useTranslation();
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


  const pathname = usePathname();

  interface Article {
    titre: string;
    description: string;
    date: string;
    cover: string; //=header
    article: string;
    slug: string;
    // Ajoutez d'autres propriétés si nécessaire
  }
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchDonnees = async () => {
        // Appelez la fonction Donnees pour obtenir les données
        const titres  = await DataToTable(pathname);

        setArticles(titres);

    };
    fetchDonnees();
}, []);

    //génération de l'apperçu : 
    const generatePreview = (content: string): string => {
      const preview = content.slice(0, 100);
      return preview
    };
  // const { t } = useTranslation('common');
  const itemsPerPage = 3;
  //Ces items sont à fetcher à partir de strapi, les articles écrits par les oli
  // const items = [
  //   {
  //     title: `${t("excercice.Exercice CUTLASS EXPRESS")}`,
  //     date: "01/03/24",
  //     header: <Image src="/A1.webp" alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>,
  //     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  //     link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02D2dZQcbiXg7HzuCT77956JecdVJgZFdvAPnnFoJeBTmBuKgr74s8fDv8eZYjJWVbl&show_text=true&width=500"
  //     //link : "/contenu/articles-oli"
  //   },
  //   {
  //     title: `${t("excercice.Formation sur le 'Maritime Domain Awareness'")}`,
  //     date: "16/10/23",
  //     header:<Image src="/B1.webp" alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>,
  //     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  //     //link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid03AvBL76ondEthbHejn7nDjECRNE2TyrtvsEfrp8PPXM4yy9KXYqZJ1hdnbg8kdfel&show_text=true&width=500"
  //     link : "/contenu/articles-oli"
  //   },
  //   {
  //     title: `${t("excercice.Exercice TTX WIOPOLREX")}`,
       
  //     date: "27/07/23",
  //     header: <Image src="/B2.webp" alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>,
  //     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  //     //link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid03AvBL76ondEthbHejn7nDjECRNE2TyrtvsEfrp8PPXM4yy9KXYqZJ1hdnbg8kdfel&show_text=true&width=500"
  //     link : "/contenu/articles-oli"
  //   },
  //   {
  //     title: `${t("excercice.Conférence « The southern Drug Route Partnership »")}`,
       
  //     date: "20/04/23",
  //     header: <Image src="/B3.webp" alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>,
  //     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  //     //link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02qhLXCdNZ6mC2FGqAWbBaQbkQoNEjeRjTpxwH6kPexqkvWvpeMwQhHJn1D8gPfAPl&show_text=true&width=500"
  //     link : "/contenu/articles-oli"
  //   },
  //   {
  //     title: `${t("La quête du savoir")}`,
       
  //     date: "Join the quest for understanding and enlightenment.",
  //     header: <Skeleton />,
  //     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  //     link: ""
  //   },
  //   {
  //     title: `${t("La joie de la création")}`,
       
  //     date: "Experience the thrill of bringing ideas to life.",
  //     header: <Skeleton />,
  //     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  //     link: ""
  //   },
  //   {
  //     title: `${t("L'esprit d'aventure")}`,
       
  //     date: "Embark on exciting journeys and thrilling discoveries.",
  //     header: <Skeleton />,
  //     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  //     link: ""
  //   },
  // ];

  // const groupedItems = [];
  // for (let i = 0; i < items.length; i += 3) {
  //   groupedItems.push(items.slice(i, i + 3));
  // }

  return (
    <div>
      <div>
        <p className="justify-center items-center text-center font-bold text-lg">
          {t("excercice.ARTICLES DES OFFICIERS DE LIAISON")}
        </p>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden">
        <Carousel setApi={setApi} className="md:w-full md:h-full">
          <CarouselContent>
            
              <CarouselItem>
                <BentoGrid className="max-w-4xl mx-auto">
                  {articles.slice((current - 1) * itemsPerPage, current * itemsPerPage).map((article, index) => (
                    <BentoGridItem
                      key = {index}
                      title = {article.titre}
                      date = {article.date}
                      header = {article.cover}
                      //icon={item.icon}
                      link = {`/contenu/articles-oli?query=${article.slug}`}
                    />
                  ))}
                </BentoGrid>
              </CarouselItem>
            
        </CarouselContent>
        </Carousel>
      </div>
      <div className="py-4 text-center text-sm text-muted-foreground">
        Page {current} {t("excercice.of")} {count}
      </div>
    </div>

  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-400 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    
  </div>
);
