"use client"

import * as React from "react"
import Link from "next/link"
import Image from 'next/image';

import { cn } from "@/lib/utils"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
export function MenuBar() {
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
    <div className="flex  space-x-3">
    <MenubarMenu>
        <MenubarTrigger>
        <button className="bg-gradient-to-r from-cyan-700 to-blue-900  hover:bg-cyan-900 text-white font-bold py-1 px-1 rounded-lg">
            FR
        </button>

        </MenubarTrigger>
        <MenubarContent>
            <MenubarItem>
                EN<MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
        </MenubarContent>
    </MenubarMenu>
    <MenubarMenu >
        <MenubarTrigger>        
            <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B70A0_0%,#393BB2_50%,#011764_100%)]" /> */}
                <span className=" hover:bg-cyan-900 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-sky-950 px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <Image
                    className="dark-logo"
                    width={30}
                    height={30}
                    src={"/Connection.png" }
                    alt="Connexion"
                    />
                    Connexion
                </span>
            </button> 
        </MenubarTrigger>
        <MenubarContent>
        <MenubarCheckboxItem>Deconnexion</MenubarCheckboxItem>

        </MenubarContent>
    </MenubarMenu>
    </div>
    </Menubar>
)
}
