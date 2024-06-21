"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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

import { useTranslation } from "react-i18next"
// import { useTranslation } from 'next-i18next';
//Ceci est à remplacer par une fonction qui génèrerai ces contenus de manière à ce que les 3 articles de presses les plus récentes du CMS soit à afficher
interface Component{
  title: string;
  href: string;
//    string;
  description: string;
  date: string;
}

export function MenuBuger() {
    const {t} = useTranslation();
    const titre = [
        `${t("Historique.Le CRFIM")}`,
        `${t("Historique.Evenements Clés")}`,
        `${t("Historique.Persepectives Futures")}`,
        `${t("FAQ.Présentation")}`,
        `${t("FAQ.Contact")}`,
        `${t("FAQ.Informations")}`,
        `${t("Partenaires.C.O.I")}`,
        `${t("Partenaires.U.E")}`,
        `${t("Partenaires.I.G.A.D")}`,
        `${t("Cadres juridique.Conventions Internationaux")}`,
        `${t("Cadres juridique.Legislation Nationale")}`,
        `${t("Cadres juridique.Protocoles d'Entente")}`,
        `${t("Evènements au CRFIM.Exercice Cutlass")}`,
        `${t("Evènements au CRFIM.Ministère du Transport")}`,
        `${t("Evènements au CRFIM.NMIFC and RMIFC")}`
        // "","","","","","","","","","","","","",""
    ]

    const description = [
    `${t("Historique.Le Centre Régionale de Fusion d'Informations Maritimes est ...")}`,
    `${t("Historique.Découvrez les évenements marquants du Centre ...")}`,
    `${t("Historique.Nos projets pour les prochaines années ...")}`,
    `${t("FAQ.Qu'est-ce que le Centre Régional de Fusion d'Informations ...")}`,
    `${t("FAQ.Comment puis-je contacter le CRFIM?")}`,
    `${t("FAQ.Comment puis-je obtenir des informations sur les conditions maritimes ...")}`,
    `${t("Partenaires.Commission de l'Océan Indien")}`,
    `${t("Partenaires.Union Européene")}`,
    `${t("Partenaires.Intergovernemental Authority on Development")}`,
    `${t("Cadres juridique.Conventions Internationaux auxquelles le CRFIM a par-...")}`,
    `${t("Cadres juridique.Collaboration avec les autorités nationales compétentes")}`,
    `${t("Cadres juridique.Protocoles d'Entente et Memoranda d'Entente")}`,
    `${t("Evènements au CRFIM.L'exercice Cutlass Express est un exercice naval ...")}`,
    `${t("Evènements au CRFIM.Visite du ministère du transport au sein du CRFIM ...")}`,
    `${t("Evènements au CRFIM.Visit by an American delegation to the National and ...")}`
    // "","","","","","","","","","","","",""
    ]

    const [itemListContent, setItemListContent] = useState<Component[]>([
    {
      title: `${titre[12]}`,
      href: "/contenu/tous",
      description:
        `${description[12]}`,
      date:"01/04/2024",
    },
    {
      title: `${titre[13]}`,
      href: "/contenu/tous",
      description:
        `${description[13]}`,
      date:"20/02/2024",

    },
    {
      title: `${titre[14]}`,
      href: "/contenu/tous",
      description:
        `${description[14]}`,
      date: "13/02/2024",
    }
      
    ]);
    
    const handleLinkHover = (content: Component[]) => {
        setItemListContent(content);
    };
    
    const [currentPage, setCurrentPage] = useState('accueil');
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    Menu 
                </AccordionTrigger>
                <AccordionContent>
                    {/* Contenu du navbar */}
                    <NavigationMenu className="justify-center">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <Link href="/">
                                <span className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"  onClick={() => setCurrentPage('accueil')}>
                                    {currentPage === 'accueil' && (
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
                                    )}
                                    <span className=" hover:bg-sky-950 hover:text-white bg-white  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                                        {t("navbar.Accueil")}
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
                                        {t("navbar.Qui sommes-nous ?")}
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
                                        title: `${titre[0]}`,
                                        href: "/infopages/historique",
                                        description:
                                        `${description[0]}`,
                                        date:"",
                                        
                                    },
                                    { //Evenements Clés
                                        title: `${titre[1]}`,
                                        href: "/infopages/historique",
                                        description:
                                        `${description[1]}`,
                                        date:"",
                                        
                                    },
                                    {
                                        //Persepectives Futures
                                        title: `${titre[2]}`,
                                        href: "/infopages/historique",
                                        description:
                                        `${description[2]}`,
                                        date: "",
                                        
                                    }
                                    ])}
                                    >
                                       {t("Qui sommes-nous ?.Historique")}
                                    </p>
                                    </Link>
                                    <Link href="/infopages/faq">
                                    <p className="text-sm font-bold hover:text-blue-500 hover:underline" 
                                    onMouseEnter={() => handleLinkHover([
                                    {
                                        // Qu'est-ce que le Centre Régional de Fusion d'Informations Maritimes (CRFIM) ?
                                        title: `${titre[3]}`,
                                        href: "/infopages/faq",
                                        description:
                                        `${description[3]}`,
                                        date:"",
                                                        },
                                    { //Comment puis-je contacter le CRFIM ?
                                        title: `${titre[4]}`,
                                        href: "/infopages/faq",
                                        description:
                                        `${description[4]}`,
                                        date:"",
                                                        },
                                    {
                                        //Comment puis-je obtenir des informations sur les conditions maritimes actuelles dans la région ?
                                        title: `${titre[5]}`,
                                        href: "/infopages/faq",
                                        description:
                                        `${description[5]}`,
                                        date: "",
                                                        }
                                    ])}>
                                        {t("Qui sommes-nous ?.FAQ")}
                                    </p>
                                    </Link>
                                    <Link href="/infopages/partnaire">
                                    <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                                    onMouseEnter={() => handleLinkHover([
                                        {
                                        // COI
                                        title: `${titre[6]}`,
                                        href: "/infopages/partnaire",
                                        description:
                                            `${description[6]}`,
                                        date:"",
                                        
                                        },
                                        { //UE
                                        title: `${titre[7]}`,
                                        href: "/infopages/partnaire",
                                        description:
                                            `${description[7]}`,
                                        date:"",
                                        
                                        },
                                        {
                                        //INGAD
                                        title: `${titre[8]}`,
                                        href: "/infopages/partnaire",
                                        description:
                                            `${description[8]}`,
                                        date: "",
                                        
                                        }
                                        ])}
                                    >
                                        {t("Qui sommes-nous ?.Partenaires")}
                                    </p>
                                    </Link>
                                    <Link href="/infopages/cadres">
                                    <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                                    onMouseEnter={() => handleLinkHover([
                                    {
                                        //Conventions Internationaux
                                        title: `${titre[9]}`,
                                        href: "/infopages/cadres",
                                        description:
                                        `${description[9]}`,
                                        date:"",
                                                        },
                                    { //Legislation Nationale
                                        title: `${titre[10]}`,
                                        href: "/infopages/cadres",
                                        description:
                                        `${description[10]}`,
                                        date:"",
                                                        },
                                    {
                                        //Protocoles d'Entente et Memoranda d'Entente
                                        title: `${titre[11]}`,
                                        href: "/infopages/cadres",
                                        description:
                                        `${description[11]}`,
                                        date: "",
                                                        }
                                    ])}
                                    >
                                        {t("Qui sommes-nous ?.Cadres juridique")}
                                    </p>
                                    </Link>
                                    <Link href="/contenu/tous">
                                    <p className="text-sm font-bold hover:text-blue-500 hover:underline"
                                    onMouseEnter={() => handleLinkHover([
                                    {
                                        title: `${titre[12]}`,
                                        href: "/contenu/tous",
                                        description:
                                        `${description[12]}`,
                                        date:"01/04/2024",
                                                        },
                                    {
                                        title: `${titre[13]}`,
                                        href: "/contenu/tous",
                                        description:
                                        `${description[13]}`,
                                        date:"20/02/2024",
                                                        },
                                    {
                                        title: `${titre[14]}`,
                                        href: "/contenu/tous",
                                        description:
                                        `${description[14]}`,
                                        date: "13/02/2024",
                                                        }
                                    ])}
                                    >
                                        {t("Qui sommes-nous ?.Evènements au CRFIM")}
                                    </p>
                                    </Link>
                                </div>
                                {itemListContent.map((component) => (
                                    <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
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
                                        {t("navbar.Ce que nous faisons ?")}
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
                                        {t("Ce que nous faisons ?.12 pillars")}
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        {t("Ce que nous faisons ?.Principaux domaines pris en Charges pas le Centre")}
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
                                        {t("navbar.Contact")}
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
                                            {t("navbar.Recherche")}
                                        </span>
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px]">
                                    <Command className="rounded-lg border shadow-md">
                                        <CommandInput placeholder= 
                                        {t("Recherche.Taper ici pour rechercher...")} 
                                        />
                                        <CommandList>
                                        {/* <CommandEmpty>{t("No results found.")}</CommandEmpty> */}
                                        <CommandGroup heading=
                                        {t("Recherche.Suggestions")}
                                        >
                                            <Link href="/contenu/tous">
                                            <CommandItem>
                                                <Calendar className="mr-2 h-4 w-4" />
                                                <span>{t("Recherche.Evenement")}</span>
                                            </CommandItem>
                                            </Link>
                                            <Link href="/infopages/faq">
                                            <CommandItem>
                                                <BadgeHelp className="mr-2 h-4 w-4" />
                                                <span>{t("Recherche.FAQ")}</span>
                                            </CommandItem>
                                            </Link>
                                            <Link href="/contenu/tous/tous">
                                            <CommandItem>
                                                <Album className="mr-2 h-4 w-4" />
                                                <span>{t("Recherche.Articles")}</span>
                                                <CommandShortcut>⌘A</CommandShortcut>
                                            </CommandItem>
                                            </Link>
                                        </CommandGroup>
                                        <CommandSeparator />
                                        <CommandGroup heading=
                                            {t("Recherche.Réglages")}
                                        >
                                            <CommandItem>
                                            <User className="mr-2 h-4 w-4" />
                                                <span>{t("Recherche.Profil")}</span>
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
                </AccordionContent>
            </AccordionItem>
        </Accordion>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
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