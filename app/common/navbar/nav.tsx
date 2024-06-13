"use client"

import React, {useState } from "react"
import Link from "next/link"
import { translate } from "@/lib/translate";
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


export function NavBar() {
  const [itemListContent, setItemListContent] = useState<Component[]>([
  {
    title: "Exercice Cutlass",
    href: "/",
    description:
      "L’exercice Cutlass Express est un exercice naval ...",
    date:"01/04/2024",
    coverImage:"/A1.webp",
  },
  {
    title: "Ministère du Transport",
    href: "/",
    description:
    "Visite du ministère du transport au sein du CRFIM ...",
    date:"20/02/2024",
    coverImage:"/A2.webp",
  },
  {
    title: "NMIFC and RMIFC",
    href: "/",
    description:
    "Visit by an American delegation to the National and ...",
    date: "13/02/2024",
    coverImage:"/A3.webp",
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
                    {translate("Accueil")}
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
                    {translate("Qui sommes-nous ?")}
                  </span>
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" bg-white text-slate-800 grid gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] ">
              <div>
                <Link href="/infopages/historique">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
                  {
                    //Présentation du Centre
                    title: `${translate("Le CRFIM")}`,
                    href: "/infopages/historique",
                    description:
                      `${translate("Le Centre Régionale de Fusion d'Informations Maritimes est ...")}`,
                    date:"",
                    coverImage:"/Hist1.webp",
                  },
                  { //Evenements Clés
                    title: `${translate("Evenements Clés")}`,
                    href: "/infopages/historique",
                    description:
                    `${translate("Découvrez les évenements marquants du Centre ...")}`,
                    date:"",
                    coverImage:"/Hist2.webp",
                  },
                  {
                    //Persepectives Futures
                    title: `${translate("Persepectives Futures")}`,
                    href: "/infopages/historique",
                    description:
                    `${translate("Nos projets pour les prochaines années ...")}`,
                    date: "",
                    coverImage:"/Hist3.webp",
                  }
                  ])}
                  >{translate("Historique")}</p>
                </Link>
                <Link href="/infopages/faq">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline" 
                  onMouseEnter={() => handleLinkHover([
                  {
                    // Qu'est-ce que le Centre Régional de Fusion d'Informations Maritimes (CRFIM) ?
                    title: `${translate("Présentation")}`,
                    href: "/infopages/faq",
                    description:
                      `${translate("Qu'est-ce que le Centre Régional de Fusion d'Informations ...")}`,
                    date:"",
                    coverImage:"/FAQ1.webp",
                  },
                  { //Comment puis-je contacter le CRFIM ?
                    title: `${translate("Contact")}`,
                    href: "/infopages/faq",
                    description:
                    `${translate("Comment puis-je contacter le CRFIM?")}`,
                    date:"",
                    coverImage:"/FAQ3.webp",
                  },
                  {
                    //Comment puis-je obtenir des informations sur les conditions maritimes actuelles dans la région ?
                    title: `${translate("Informations")}`,
                    href: "/infopages/faq",
                    description:
                    `${translate("Comment puis-je obtenir des informations sur les conditions maritimes ...")}`,
                    date: "",
                    coverImage:"/FAQ2.webp",
                  }
                  ])}>
                  {translate("FAQ")}
                  </p>
                </Link>
                <Link href="/infopages/partnaire">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                   onMouseEnter={() => handleLinkHover([
                    {
                      // COI
                      title: `${translate("C.O.I")}`,
                      href: "/infopages/partnaire",
                      description:
                        `${translate("Commission de l'Océan Indien")}`,
                      date:"",
                      coverImage:"/Partenaire3.webp",
                    },
                    { //UE
                      title: `${translate("U.E")}`,
                      href: "/infopages/partnaire",
                      description:
                      `${translate("Union Européene")}`,
                      date:"",
                      coverImage:"/Partenaire2.webp",
                    },
                    {
                      //INGAD
                      title: `${translate("I.G.A.D")}`,
                      href: "/infopages/partnaire",
                      description:
                      `${translate("Intergovernemental Authority on Development")}`,
                      date: "",
                      coverImage:"/Partenaire1.webp",
                    }
                    ])}
                  >{translate("Partenaires")}</p>
                </Link>
                <Link href="/infopages/cadres">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
                  {
                    //Conventions Internationaux
                    title: `${translate("Conventions Internationaux")}`,
                    href: "/infopages/cadres",
                    description:
                      `${translate("Conventions Internationaux auxquelles le CRFIM a par-...")}`,
                    date:"",
                    coverImage:"/CD1.webp",
                  },
                  { //Legislation Nationale
                    title: `${translate("Legislation Nationale")}`,
                    href: "/infopages/cadres",
                    description:
                    `${translate("Collaboration avec les autorités nationales compétentes")}`,
                    date:"",
                    coverImage:"/CD3.webp",
                  },
                  {
                    //Protocoles d'Entente et Memoranda d'Entente
                    title: `${translate("Protocoles d'Entente")}`,
                    href: "/infopages/cadres",
                    description:
                    `${translate("Protocoles d'Entente et Memoranda d'Entente")}`,
                    date: "",
                    coverImage:"/CD2.webp",
                  }
                  ])}
                  >{translate("Cadres juridique")}</p>
                </Link>
                <Link href="/contenu/tous">
                  <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                  onMouseEnter={() => handleLinkHover([
                  {
                    title: `${translate("Exercice Cutlass")}`,
                    href: "/contenu/tous",
                    description:
                      `${translate("L'exercice Cutlass Express est un exercice naval ...")}`,
                    date:"01/04/2024",
                    coverImage:"/A1.webp",
                  },
                  {
                    title: `${translate("Ministère du Transport")}`,
                    href: "/contenu/tous",
                    description:
                    `${translate("Visite du ministère du transport au sein du CRFIM ...")}`,
                    date:"20/02/2024",
                    coverImage:"/A2.webp",
                  },
                  {
                    title: `${translate("NMIFC and RMIFC")}`,
                    href: "/contenu/tous",
                    description:
                    `${translate("Visit by an American delegation to the National and ...")}`,
                    date: "13/02/2024",
                    coverImage:"/A3.webp",
                  }
                  ])}
                  >{translate("Evènements aux CRFIM")}</p>
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
                  {translate("Ce que nous faisons ?")}
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
                      {translate("12 pillars")}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {translate("Principaux domaines pris en Charges pas le Centre")}
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
                  {translate("Contact")}
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
                      {translate("Recherche")}
                    </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder={translate("Taper ici pour rechercher...")} />
                <CommandList>
                  <CommandEmpty>{translate("No results found.")}</CommandEmpty>
                  <CommandGroup heading={translate("Suggestions")}>
                    <Link href="/contenu/tous">
                      <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{translate("Evenement")}</span>
                      </CommandItem>
                    </Link>
                    <Link href="/infopages/faq">
                      <CommandItem>
                        <BadgeHelp className="mr-2 h-4 w-4" />
                        <span>{translate("FAQ")}</span>
                      </CommandItem>
                    </Link>
                    <Link href="/contenu/tous/tous">
                      <CommandItem>
                        <Album className="mr-2 h-4 w-4" />
                        <span>{translate("Articles")}</span>
                        <CommandShortcut>⌘A</CommandShortcut>
                      </CommandItem>
                    </Link>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading={translate("Réglages")}>
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>{translate("Profil")}</span>
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
          <img src={coverImage} alt={title} className="w-full h-[60px]" loading="lazy"/>
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