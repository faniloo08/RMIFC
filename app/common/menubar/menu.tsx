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
    MenubarTrigger
} from "@/components/ui/menubar"

import LoginForm from "./loginform";

import { 
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import { 
Card,
CardContent,
CardHeader,
CardTitle,
CardFooter
} from "@/components/ui/card3";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {registerUser} from '@/lib/registerUser';


export function MenuBar() {

    const Texte = [
        "Centre Régional de Fusion d'Informations Maritimes",
        "Connexion",
        "Inscription"
    ]

    //Info inscription
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [password, setPassword] = useState('');

    //info connexion

    const handleSubscription = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          if (!nom) {
            alert("Veuillez saisir votre nom d'utilisateur avant d'envoyer le formulaire.");
            return; // Arrête l'exécution de la fonction
          }
          await registerUser(username, email, nom, prenom, password);
          setUserName('');
          setEmail('');
          setNom('');
          setPrenom('');
          setPassword('');
          alert("Subscription done");
          window.location.reload();
        } catch (error) {
            console.error('An error occurred while processing the subscription:', error);
            alert("Failed to subscribe");
            window.location.reload();
        }
    };

    //Pour la connexion


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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
    
        const nameInput = event.currentTarget.elements.namedItem('name') as HTMLInputElement; // Récupère l'élément input avec l'id "name"
        const nameValue = nameInput.value.trim(); // Récupère la valeur de l'input en supprimant les espaces vides avant et après
    
        if (!nameValue) {
          // Si le champ "Name" est vide, affiche une alerte
          alert("Veuillez remplir le champ Username.");
        } else {
          // Sinon, le formulaire est valide, vous pouvez soumettre le formulaire ou effectuer d'autres actions ici
          // Par exemple, vous pouvez envoyer les données à un backend ou naviguer vers une autre page
          // Soumet le formulaire
          event.currentTarget.submit();
        };
        
        setUserNom(usernom)
    };
    const [usernom, setUserNom] = useState<string>('Connexion');

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
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
                <span className="text-slate-900 text-xs hover:text-slate-400 font-bold p-1 rounded-lg"
                > 
                    {/* Ajoute un gestionnaire de clic pour basculer entre les langues  */}
                    {language}
                 </span>
            </MenubarTrigger>
            <MenubarContent>
                <MenubarItem onClick={handleLanguageChange}  > 
                    {language === 'FR' ? 'EN' : 'FR'}<MenubarShortcut>{language === 'FR' ? '⌘E' : '⌘F'}</MenubarShortcut>
                </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu >
            <MenubarTrigger> 
                <Dialog>
                    <DialogTrigger asChild>
                        {/* Bouton de connexion */}
                        <span className="drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B70A0_0%,#393BB2_50%,#011764_100%)]" />  */}
                            <span className="text-xs hover:bg-cyan-900 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-sky-950 px-1 py-1 font-medium text-white backdrop-blur-3xl">
                                <Image
                                className="dark-logo"
                                width={30}
                                height={30}
                                src={"/connexion.png" }
                                alt="Connexion"
                                />
                                   {usernom} 
                            </span>
                        </span> 
                    </DialogTrigger> 
                    <DialogContent className="2xl:max-w-[600px] lg:max-w-[400px] items-center justify-center">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center mb-1">{Texte[1]}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <LoginForm/>
                            </CardContent>
                            <CardFooter>
                                <p className="font-bold italic text-sm ml-[30px] text-center">Pas encore de compte ? </p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <p className="font-bold italic text-sm text-cyan-900 hover:underline">Vous inscrire</p>
                                    </DialogTrigger>
                                    <DialogContent className="2xl:max-w-[600px] lg:max-w-[400px] items-center justify-center">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-center mb-1">{Texte[2]}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <form onSubmit={handleSubscription}>
                                                    <div className="grid w-full items-center gap-1">
                                                        <div className="flex flex-col space-y-1">
                                                            <Label htmlFor="name">Nom*</Label>
                                                            <Input id="name" placeholder="DOE" value={nom} onChange={(e) => setNom(e.target.value)} required/>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <Label htmlFor="name">Prenom </Label>
                                                            <Input id="name" placeholder="John" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <Label htmlFor="name">Email*</Label>
                                                            <Input id="email" placeholder="johndoe00@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <Label htmlFor="name">Nom d'utilisateur*</Label>
                                                            <Input id="name" placeholder="JohnyJo360" value={username} onChange={(e) => setUserName(e.target.value)} required/>
                                                        </div>
                                                        <div className="flex flex-col space-y-1">
                                                            <Label htmlFor="name">Mot de passe</Label>
                                                            <Input id="password" placeholder="" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="submit" className=" outline relative rounded-full p-1 justify-center items-center ml-[110px] mt-[10px] hover:bg-gradient-to-r from-cyan-900 to-sky-950 hover:text-white">
                                                            S'inscrire
                                                        </button>
                                                    </div>
                                                </form>
                                            </CardContent>
                                        </Card>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    </DialogContent>
                </Dialog>    
            </MenubarTrigger>
            <MenubarContent>
            <MenubarCheckboxItem  onClick={handleConnexionChange}>{deconnexion}</MenubarCheckboxItem>
            </MenubarContent>
        </MenubarMenu>
        </div>
        </Menubar>
    )
}
