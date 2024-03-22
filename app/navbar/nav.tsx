"use client"

import * as React from "react"
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

//Ceci est à remplacer par une fonction qui génèrerai ces contenus de manière à ce que les 3 articles de presses les plus récentes du CMS soit à afficher
const components: { title: string; href: string; description: string; date: string; coverImage: string;}[] = [

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
  },
  // {
  //   title: "Scroll-area",
  //   href: "/docs/primitives/scroll-area",
  //   description: "Visually or semantically separates content.",
  //   date: "01/01/24"
  // },
  // {
  //   title: "Tabs",
  //   href: "/docs/primitives/tabs",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  // },
  // {
  //   title: "Tooltip",
  //   href: "/docs/primitives/tooltip",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
]

export function NavBar() {
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
            <ul className=" bg-white/50 grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] ">
              {components.map((component) => (
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
            <ul className="bg-white/50 grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
              <ListItem href="/" title="Maritime Incident">
                About categorie
              </ListItem>
              <ListItem href="/" title="Illicite Trafic">
                About categorie
              </ListItem>
              <ListItem href="/" title="Illegal Fishing">
                About categorie
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <NavigationMenuTrigger>
              <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className=" hover: hover:bg-white hover:text-black bg-sky-950  inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Contact
                </span>
              </button>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
            <ul className="bg-white/50 grid gap-4 p-4 md:w-[400px] lg:w-[500px] md:grid-cols-[1]">
              {/* <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li> */}
              <a href="/" className="hover:text-blue-600">
                email
              </a>
              <a href="/" className="hover:text-blue-600">
               telephone
              </a>
              <a href="/" className="hover:text-blue-600">
                social
              </a>
            </ul>
          </NavigationMenuContent>
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
          <div className="text-sm leading-none text-teal-400 font-bold text-center">{title}</div>
          {React.Children.map(children, (child, index) => (
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground text-center" key={index}>{child}</div>
          ))}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
