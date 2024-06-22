"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
//import { NextResponse, NextRequest } from "next/server";
import {authHandler} from '@/lib/authentification';
import { useTranslation } from "react-i18next"

const LoginForm = () => {
    const {t} = useTranslation();
    const InfoForm = [
        `${t("Connexion.Nom d'utilisateur ou Email")}`,
        `${t("Connexion.Mot de passe")}`,
    ]

    const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        //Vérification de l'entrée du nom de l'utilisateur
        if (!usernameOrEmail) {
            // Si le champ "Name" est vide, affiche une alerte
            alert(`${t("Connexion.Veuillez remplir le champ Username.")}`);
        }
        var isconnected = await authHandler(usernameOrEmail, password);
        if (isconnected) {
            localStorage.setItem('username', usernameOrEmail);
        } else {
            alert("Connexion failed");
        }
        setUsernameOrEmail('');
        // alert("connected successfully"); 
        window.location.reload();
    } catch (error) {
        console.error('An error occurred while processing the connexion:', error);
        alert("Connexion failed");
        window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-2">
            <div className="flex flex-col space-y-1">
                <Label htmlFor="usernameOrEmail">{InfoForm[0]}</Label>
                <Input
                type="text"
                id="usernameOrEmail"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                required
                />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="password">{InfoForm[1]}</Label>
                <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <div className="flex items-center justify-center">
                <button type="submit" className=" outline relative rounded-full p-1 justify-center items-center mt-[40px] hover:bg-gradient-to-r from-cyan-900 to-sky-950 hover:text-white">
                    {t("Connexion.Se connecter")}
                </button>
            </div>
            <div className="flex justify-end items-end mt-[10px]">
                <Link href = "/" className="hover:underline text-xs text-blue-500">
                    {t("Connexion.Mot de passe oublié")}
                </Link>
            </div>
        </div>
    </form>
  );
};

export default LoginForm;
