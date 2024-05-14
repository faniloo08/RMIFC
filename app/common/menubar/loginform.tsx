import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NextResponse, NextRequest } from "next/server";
import {authHandler} from '@/lib/authentification';

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        //Vérification de l'entrée du nom de l'utilisateur
        if (!usernameOrEmail) {
            // Si le champ "Name" est vide, affiche une alerte
            alert("Veuillez remplir le champ Username.");
        }
        await authHandler(usernameOrEmail, password);
        setUsernameOrEmail('');
        alert("connected successfully");
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
                <Label htmlFor="usernameOrEmail">Nom d'utilisateur ou Email :</Label>
                <Input
                type="text"
                id="usernameOrEmail"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                required
                />
            </div>
            <div className="flex flex-col space-y-1">
                <Label htmlFor="password">Mot de passe :</Label>
                <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <div>
                <button type="submit" className=" outline relative rounded-full p-1 justify-center items-center ml-[110px] mt-[40px] hover:bg-gradient-to-r from-cyan-900 to-sky-950 hover:text-white">
                    Se connecter
                </button>
            </div>
            <div className="justify-end items-end mt-[10px] ml-[190px]">
                <Link href = "/" className="hover:underline text-xs text-blue-500">
                    Mot de passe oublié
                </Link>
            </div>
        </div>
    </form>
  );
};

export default LoginForm;
