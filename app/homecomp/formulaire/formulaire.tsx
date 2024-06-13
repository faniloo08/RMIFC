"use client"
import React, { useState, ChangeEvent } from 'react'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card2";
import {sendInfo} from '@/lib/sendInfo';

const Texte = [
  "Bienvenue sur la section de déposition d'information du CRFIM",
  "Si vous avez quelconque information à votre disposition qui vous semble pourrait nous être utile :  pêche illégale, entrées et sorties des bateaux, trafics, tourisme, et plus encore, veuillez la déposer ici"
]
function Formulaire() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [fonction, setFonction] = useState('');
  const [message, setMessage] = useState('');
  const [Photos, setPhotos] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        if (!nom) {
          alert("Veuillez saisir votre nom d'utilisateur avant d'envoyer le formulaire.");
          return; // Arrête l'exécution de la fonction
        }
        await sendInfo(nom, prenom, email, mdp, fonction, message, Photos);
        setNom('');
        setPrenom('');
        setEmail('');
        setMdp('');
        setFonction('');
        setMessage('');
        setPhotos(null);
        alert("Message Sent");
        window.location.reload();
      } catch (error) {
          console.error('An error occurred while sending the message:', error);
          alert("Message Not sent");
          window.location.reload();
      }
  };
  // Gérer le changement de fichier sélectionné
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Récupérer le premier fichier sélectionné
    if (file !== undefined) {
      setPhotos(file); // Mettre à jour le state avec le fichier sélectionné
    }
  };
    // const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //   setMessage(event.target.value);
    // };
      return (
        <Card className="relative flew items-center justify-center ">
          <CardHeader>
            <CardTitle className="text-center mb-1">{Texte[0]}</CardTitle>
            <CardDescription className="text-center">{Texte[1]}</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="infoForm" className="my-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 grid-flow-row ">
                <div className="mr-1">
                  {/* Nom à fonction */}
                  <div className="grid grid-cols-2 grid-flow-row space-y-2 mb-4">
                    <div className="mr-1">
                      <LabelInputContainer>
                        <Label htmlFor="nom">Nom</Label>
                        <Input id="firstname" placeholder="Tyler" type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
                      </LabelInputContainer>
                    </div>
                    <div >
                      <LabelInputContainer className="mt-[-12px]">
                        <Label htmlFor="nom">Prenom</Label>
                        <Input id="prenom" placeholder="Durden" type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                      </LabelInputContainer>
                    </div>
                  </div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Adresse email </Label>
                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="mdp">Mot de Passe</Label>
                    <Input id="mdp" placeholder="••••••••" type="password" value={mdp} onChange={(e) => setMdp(e.target.value)} />
                  </LabelInputContainer>
                </div>
                <div>
                  {/* fonction à message */}
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="fonction">Votre fonction</Label>
                    <Input
                      id="fonction"
                      placeholder="Personnel du ministère de la pêche"
                      type="text"
                      value={fonction} onChange={(e) => setFonction(e.target.value)}
                    />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Votre Message</Label>
                    <Input id="message" type="textarea" placeholder="Votre message ici..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-3">
                    <Label htmlFor="Photos">Importer une photo</Label>
                    <Input id="Photos" type="file" accept="image/*" onChange={handleImageChange} />
                  </LabelInputContainer>
                </div>
              </div>
              <div className="justify-center items-center ml-[350px]">
                <button
                  className=" relative bg-gradient-to-r from-cyan-900 to-sky-950 text-white rounded-lg p-1"
                  type="submit"
                >
                  Déposer &rarr;
                  <BottomGradient />
                </button>
              </div>
              <div/>
            </form>
          </CardContent>
          </Card>
      );
}
export default Formulaire
const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
   
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };