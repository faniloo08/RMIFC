"use client"

import React, {useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import ScrollMenu from "../../homecomp/scrollmenu/scrollmenu"


import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


import {
  Calendar,
  User,
  Album,
  BadgeHelp
} from "lucide-react"

import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
 } from "@/components/ui/command"
//Ceci est à remplacer par une fonction qui génèrerai ces contenus de manière à ce que les 3 articles de presses les plus récentes du CMS soit à afficher
interface Component{
  title: string;
  href: string;
  coverImage: string;
  description: string;
  date: string;
}

const componentsEC: { title: string; href: string; description: string; date: string; coverImage: string;}[] = [
  //Evenements aux CRFIM
  {
    title: "Exercice Cutlass",
    href: "/",
    description:
      "L’exercice Cutlass Express est un exercice naval ...",
    date:"01/04/2024",
    coverImage:"/A1.jpg",
  },
  {
    title: "Ministère du Transport",
    href: "/",
    description:
    "Visite du ministère du transport au sein du CRFIM ...",
    date:"20/02/2024",
    coverImage:"/A2.jpg",
  },
  {
    title: "NMIFC and RMIFC",
    href: "/",
    description:
    "Visit by an American delegation to the National and ...",
    date: "13/02/2024",
    coverImage:"/A3.jpg",
  }
]

export function NavBar() {
  const [itemListContent, setItemListContent] = useState<Component[]>([
  {
    title: "Exercice Cutlass",
    href: "/",
    description:
      "L’exercice Cutlass Express est un exercice naval ...",
    date:"01/04/2024",
    coverImage:"/A1.jpg",
  },
  {
    title: "Ministère du Transport",
    href: "/",
    description:
    "Visite du ministère du transport au sein du CRFIM ...",
    date:"20/02/2024",
    coverImage:"/A2.jpg",
  },
  {
    title: "NMIFC and RMIFC",
    href: "/",
    description:
    "Visit by an American delegation to the National and ...",
    date: "13/02/2024",
    coverImage:"/A3.jpg",
  }

  ]);

  const handleLinkHover = (content: Component[]) => {
    setItemListContent(content);
  };
  
  const [currentPage, setCurrentPage] = useState('accueil');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <span className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"  onClick={() => setCurrentPage('accueil')}>
                {currentPage === 'accueil' && (
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
                )}
                  <span className=" hover:bg-sky-950 hover:text-white bg-white  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                    Accueil
                  </span>
            </span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"  onClick={() => setCurrentPage('qui sommes-nous')}>
                {currentPage === 'qui sommes-nous' && (
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
                )}
                  <span className=" hover:bg-sky-950 hover:text-white bg-white  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                    Qui sommes-nous ?
                  </span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" bg-white text-slate-800 grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] ">
              <div>
                <Link href="/infopages/historique">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
                  {
                    //Présentation du Centre
                    title: "Le CRFIM",
                    href: "/infopages/historique",
                    description:
                      "Le Centre Régionale de Fusion d'Informations Maritimes est ...",
                    date:"",
                    coverImage:"/Hist1.png",
                  },
                  { //Evenements Clés
                    title: "Evenements Clés",
                    href: "/infopages/historique",
                    description:
                    "Découvrez les évenements marquants du Centre ...",
                    date:"",
                    coverImage:"/Hist2.png",
                  },
                  {
                    //Persepectives Futures
                    title: "Persepectives Futures",
                    href: "/infopages/historique",
                    description:
                    "Nos projets pour les prochaines années ...",
                    date: "",
                    coverImage:"/Hist3.png",
                  }
                  ])}
                  >Historique</p>
                </Link>
                <Link href="/infopages/faq">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline" 
                  onMouseEnter={() => handleLinkHover([
                  {
                    // Qu'est-ce que le Centre Régional de Fusion d'Informations Maritimes (CRFIM) ?
                    title: "Présentation",
                    href: "/infopages/faq",
                    description:
                      "Qu'est-ce que le Centre Régional de Fusion d'Informations ...",
                    date:"",
                    coverImage:"/FAQ1.png",
                  },
                  { //Comment puis-je contacter le CRFIM ?
                    title: "Contact",
                    href: "/infopages/faq",
                    description:
                    "Comment puis-je contacter le CRFIM?",
                    date:"",
                    coverImage:"/FAQ3.png",
                  },
                  {
                    //Comment puis-je obtenir des informations sur les conditions maritimes actuelles dans la région ?
                    title: "Informations",
                    href: "/infopages/faq",
                    description:
                    "Comment puis-je obtenir des informations sur les conditions maritimes ...",
                    date: "",
                    coverImage:"/FAQ2.png",
                  }
                  ])}>
                  FAQ
                  </p>
                </Link>
                <Link href="/infopages/partnaire">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                   onMouseEnter={() => handleLinkHover([
                    {
                      // COI
                      title: "C.O.I",
                      href: "/infopages/partnaire",
                      description:
                        "Commission de l'Océan Indien ",
                      date:"",
                      coverImage:"/Partenaire3.png",
                    },
                    { //UE
                      title: "U.E",
                      href: "/infopages/partnaire",
                      description:
                      "Union Européene",
                      date:"",
                      coverImage:"/Partenaire2.png",
                    },
                    {
                      //INGAD
                      title: "I.G.A.D",
                      href: "/infopages/partnaire",
                      description:
                      "Intergovernemental Authority on Development",
                      date: "",
                      coverImage:"/Partenaire1.png",
                    }
                    ])}
                  >Partenaires</p>
                </Link>
                <Link href="/infopages/cadres">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
                  {
                    //Conventions Internationaux
                    title: "Conventions Internationaux",
                    href: "/infopages/cadres",
                    description:
                      "Conventions Internationaux auxquelles le CRFIM a par-...",
                    date:"",
                    coverImage:"/CD1.png",
                  },
                  { //Legislation Nationale
                    title: "Legislation Nationale",
                    href: "/infopages/cadres",
                    description:
                    "Collaboration avec les autorités nationales compétentes",
                    date:"",
                    coverImage:"/CD3.jpg",
                  },
                  {
                    //Protocoles d'Entente et Memoranda d'Entente
                    title: "Protocoles d'Entente",
                    href: "/infopages/cadres",
                    description:
                    "Protocoles d'Entente et Memoranda d'Entente",
                    date: "",
                    coverImage:"/CD2.png",
                  }
                  ])}
                  >Cadres juridique</p>
                </Link>
                <Link href="/contenu/tous">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
                  {
                    title: "Exercice Cutlass",
                    href: "/contenu/tous",
                    description:
                      "L’exercice Cutlass Express est un exercice naval ...",
                    date:"01/04/2024",
                    coverImage:"/A1.jpg",
                  },
                  {
                    title: "Ministère du Transport",
                    href: "/contenu/tous",
                    description:
                    "Visite du ministère du transport au sein du CRFIM ...",
                    date:"20/02/2024",
                    coverImage:"/A2.jpg",
                  },
                  {
                    title: "NMIFC and RMIFC",
                    href: "/contenu/tous",
                    description:
                    "Visit by an American delegation to the National and ...",
                    date: "13/02/2024",
                    coverImage:"/A3.jpg",
                  }
                  ])}
                  >Evènements aux CRFIM</p>
                </Link>
              </div>
              {itemListContent.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  coverImage={component.coverImage}
                >
                  {component.description}
                  {component.date}
                </ListItem>
              ))}

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setCurrentPage('ce que nous faisons')}>
                {currentPage === 'ce que nous faisons' && (
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
                )}
                <span className=" hover:bg-sky-950 hover:text-white bg-white  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  Ce que nous faisons ?
                </span>
          </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-white grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-bold text-cyan-700 ">
                      12 pillars
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Principaux domaines pris en Charges pas le Centre
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <ScrollMenu/>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/infopages/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setCurrentPage('contact')}>
                {currentPage === 'contact' && (
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
                )}
                <span className=" hover: hover:bg-white hover:text-black bg-sky-950  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Contact
                </span>
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Dialog>
              <DialogTrigger asChild>
                <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setCurrentPage('recherche')}>
                  {currentPage === 'recherche' && (
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
                  )}
                    <span className=" hover:bg-white hover:text-black bg-sky-950  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Recherche
                    </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Taper ici pour rechercher..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <Link href="/contenu/tous">
                      <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Evenement</span>
                      </CommandItem>
                    </Link>
                    <Link href="/infopages/faq">
                      <CommandItem>
                        <BadgeHelp className="mr-2 h-4 w-4" />
                        <span>FAQ</span>
                      </CommandItem>
                    </Link>
                    <Link href="/contenu/tous/tous">
                      <CommandItem>
                        <Album className="mr-2 h-4 w-4" />
                        <span>Articles</span>
                        <CommandShortcut>⌘A</CommandShortcut>
                      </CommandItem>
                    </Link>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Réglages">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profil</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
              </DialogContent>
          </Dialog>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; coverImage: string }
>(({ className, title, children, coverImage, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            " block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <img src={coverImage} alt={title} className="w-full h-[60px]"/>
          <div className="text-sm leading-none text-teal-600 font-bold text-center">{title}</div>
          {React.Children.map(children, (child, index) => (
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground text-center text-slate-800" key={index}>{child}</div>
          ))}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"