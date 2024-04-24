"use client"

import React, { useState }  from "react"
import Link from "next/link"
import Image from 'next/image';

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
export function MenuBar() {
    const [language, setLanguage] = useState<string>('FR'); // État initial du bouton de langue

    const handleLanguageChange = () => {
      // Fonction pour basculer entre les langues
      setLanguage(language === 'FR' ? 'EN' : 'FR');
    };
    const [connexion, setConnexion] = useState<string>('Connexion');
    const [deconnexion, setDeconnexion] = useState<string>('Deconnexion');
    const handleConnexionChange = () => {
        // Fonction pour basculer entre les langues
        setConnexion(connexion === 'Connexion' ? 'Deconnexion' : 'Connexion');
        setDeconnexion(deconnexion === 'Deconnexion' ? 'Connexion' : 'Deconnexion');
    };

    return (
        <Menubar className="flex justify-between items-center">
        <MenubarMenu>
            {/* <MenubarTrigger>Logo</MenubarTrigger> */}
            
            <Link href="/">
                <Image
                className="dark-logo"
                width={250}
                height={58}
                src={"/Logo.png" }
                alt="RMIFC logo"
                />
            </Link>
        </MenubarMenu> 
        <div className="flex  space-x-1">
        <MenubarMenu>
            <MenubarTrigger>
                <button className="text-slate-900 text-xs hover:text-slate-400 font-bold p-1 rounded-lg"
                >
                    {/* Ajoute un gestionnaire de clic pour basculer entre les langues */}
                    {language}
                </button>
            </MenubarTrigger>
            <MenubarContent>
                <MenubarItem onClick={handleLanguageChange}  > 
                    {language === 'FR' ? 'EN' : 'FR'}<MenubarShortcut>{language === 'FR' ? '⌘E' : '⌘F'}</MenubarShortcut>
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu >
            <MenubarTrigger>     
                <button className="drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B70A0_0%,#393BB2_50%,#011764_100%)]" /> */}
                    <span className="text-xs hover:bg-cyan-900 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-sky-950 px-1 py-1 font-medium text-white backdrop-blur-3xl">
                        <Image
                        className="dark-logo"
                        width={30}
                        height={30}
                        src={"/connexion.png" }
                        alt="Connexion"
                        />
                        {connexion}
                    </span>
                </button> 
            </MenubarTrigger>
            <MenubarContent>
            <MenubarCheckboxItem onClick={handleConnexionChange}>{deconnexion}</MenubarCheckboxItem>
            </MenubarContent>
        </MenubarMenu>
        </div>
        </Menubar>
    )
}
