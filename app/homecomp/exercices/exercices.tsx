import * as React from "react";
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


  //génération de l'apperçu : 
  // const generatePreview = (content: any): string => {
  //     // Tu peux mettre ici la logique de génération d'aperçu que tu veux
  //     // Par exemple, tu peux simplement retourner les premiers 100 caractères du contenu
  //     const preview = content.slice(0, 10);
  //     return preview + '..'
  // };


  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <div>
      <div>
        <p className="justify-center items-center text-center font-bold text-lg">
          EXERCICES REALISES
        </p>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden">
        <Carousel setApi={setApi} className="md:w-full md:h-full">
          <CarouselContent>
            {groupedItems.map((group, index) => (
              <CarouselItem key={index}>
                <BentoGrid className="max-w-4xl mx-auto">
                  {group.map((item, i) => (
                    <BentoGridItem
                      key={i}
                      title={item.title}
                      date={item.date}
                      header={item.header}
                      icon={item.icon}
                      link={item.link}
                    />
                  ))}
                </BentoGrid>
              </CarouselItem>
            ))}
        </CarouselContent>
        </Carousel>
      </div>
      <div className="py-4 text-center text-sm text-muted-foreground">
        Page {current} of {count}
      </div>
    </div>

  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    
  </div>
);
const items = [
  {
    title: "Exercice CUTLASS EXPRESS",
    date: "01/03/24",
    header: <Image src="/A1.jpg" alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02D2dZQcbiXg7HzuCT77956JecdVJgZFdvAPnnFoJeBTmBuKgr74s8fDv8eZYjJWVbl&show_text=true&width=500"
  },
  {
    title: "Formation sur le 'Maritime Domain Awareness'",
    date: "16/10/23",
    header:<Image src="/B1.jpg" alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid03AvBL76ondEthbHejn7nDjECRNE2TyrtvsEfrp8PPXM4yy9KXYqZJ1hdnbg8kdfel&show_text=true&width=500"
  },
  {
    title: "Exercice TTX WIOPOLREX",
    date: "27/07/23",
    header: <Image src="/B2.jpg" alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid03AvBL76ondEthbHejn7nDjECRNE2TyrtvsEfrp8PPXM4yy9KXYqZJ1hdnbg8kdfel&show_text=true&width=500"
  },
  {
    title: "Conférence « The southern Drug Route Partnership »",
    date: "20/04/23",
    header: <Image src="/B3.jpg" alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRMIFCenter%2Fposts%2Fpfbid02qhLXCdNZ6mC2FGqAWbBaQbkQoNEjeRjTpxwH6kPexqkvWvpeMwQhHJn1D8gPfAPl&show_text=true&width=500"
  },
  {
    title: "The Pursuit of Knowledge",
    date: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: ""
  },
  {
    title: "The Joy of Creation",
    date: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: ""
  },
  {
    title: "The Spirit of Adventure",
    date: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: ""
  },
];
