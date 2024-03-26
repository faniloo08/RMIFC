"use client"

import React, { Children, useEffect, useState } from "react"
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

import ScrollMenu from "../scrollmenu/scrollmenu"
import { Chicle, Chilanka } from "next/font/google"

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
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
                <span className=" hover:bg-sky-950 hover:text-white bg-white  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  Accueil
                </span>
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className=" hover:bg-sky-950 hover:text-white bg-white  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  Qui sommes-nous ?
                </span>
          </button>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" bg-white text-slate-800 grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] ">
              <div>
                <Link href="/">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
                  {
                    //Présentation du Centre
                    title: "Le CRFIM",
                    href: "/",
                    description:
                      "Le Centre Régionale de Fusion d'Informations Maritimes est ...",
                    date:"",
                    coverImage:"/Hist1.png",
                  },
                  { //Evenements Clés
                    title: "Evenements Clés",
                    href: "/",
                    description:
                    "Découvrez les évenements marquants du Centre ...",
                    date:"",
                    coverImage:"/Hist2.png",
                  },
                  {
                    //Persepectives Futures
                    title: "Persepectives Futures",
                    href: "/",
                    description:
                    "Nos projets pour les prochaines années ...",
                    date: "",
                    coverImage:"/Hist3.png",
                  }
                  ])}
                  >Historique</p>
                </Link>
                <Link href="/">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline" 
                  onMouseEnter={() => handleLinkHover([
                  {
                    // Qu'est-ce que le Centre Régional de Fusion d'Informations Maritimes (CRFIM) ?
                    title: "Présentation",
                    href: "/",
                    description:
                      "Qu'est-ce que le Centre Régional de Fusion d'Informations ...",
                    date:"",
                    coverImage:"/FAQ1.png",
                  },
                  { //Comment puis-je contacter le CRFIM ?
                    title: "Contact",
                    href: "/",
                    description:
                    "Comment puis-je contacter le CRFIM?",
                    date:"",
                    coverImage:"/FAQ3.png",
                  },
                  {
                    //Comment puis-je obtenir des informations sur les conditions maritimes actuelles dans la région ?
                    title: "Informations",
                    href: "/",
                    description:
                    "Comment puis-je obtenir des informations sur les conditions maritimes ...",
                    date: "",
                    coverImage:"/FAQ2.png",
                  }
                  ])}>
                  FAQ
                  </p>
                </Link>
                <Link href="/">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                   onMouseEnter={() => handleLinkHover([
                    {
                      // COI
                      title: "C.O.I",
                      href: "/",
                      description:
                        "Commission de l'Océan Indien ",
                      date:"",
                      coverImage:"/Partenaire3.png",
                    },
                    { //UE
                      title: "U.E",
                      href: "/",
                      description:
                      "Union Européene",
                      date:"",
                      coverImage:"/Partenaire2.png",
                    },
                    {
                      //INGAD
                      title: "I.G.A.D",
                      href: "/",
                      description:
                      "Intergovernemental Authority on Development",
                      date: "",
                      coverImage:"/Partenaire1.png",
                    }
                    ])}
                  >Partenaires</p>
                </Link>
                <Link href="/">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
                  {
                    //Conventions Internationaux
                    title: "Conventions Internationaux",
                    href: "/",
                    description:
                      "Conventions Internationaux auxquelles le CRFIM a par-...",
                    date:"",
                    coverImage:"/CD1.png",
                  },
                  { //Legislation Nationale
                    title: "Legislation Nationale",
                    href: "/",
                    description:
                    "Collaboration avec les autorités nationales compétentes",
                    date:"",
                    coverImage:"/CD3.png",
                  },
                  {
                    //Protocoles d'Entente et Memoranda d'Entente
                    title: "Protocoles d'Entente",
                    href: "/",
                    description:
                    "Protocoles d'Entente et Memoranda d'Entente",
                    date: "",
                    coverImage:"/CD2.png",
                  }
                  ])}
                  >Cadres juridique</p>
                </Link>
                <Link href="/">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
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
            <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className=" hover:bg-sky-950 hover:text-white bg-white  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  Ce que nous faisons ?
                </span>
          </button>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-white grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
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
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className=" hover: hover:bg-white hover:text-black bg-sky-950  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Contact
                </span>
              </button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className=" hover:bg-white hover:text-black bg-sky-950  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Recherche
                  </span>
              </button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
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
