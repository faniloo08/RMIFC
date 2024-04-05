"use client"
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card2";
function Formulaire() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Form submitted");
        e.currentTarget.submit();
      };
      
      const [message, setMessage] = useState('');

      const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
      };

      return (
        <Card className='relative'>
          <CardHeader>
            <CardTitle className="text-center mb-1">Bienvenue sur la section de déposition d'information du CRFIM</CardTitle>
            <CardDescription className="text-center">Si vous avez quelconque information à votre disposition qui vous semble pourrait nous être utile, veuillez la déposer ici</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="my-2" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">Nom</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Prenom</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Adresse email </Label>
                <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Mot de Passe</Label>
                <Input id="password" placeholder="••••••••" type="password" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="twitterpassword">Votre fonction</Label>
                <Input
                  id="fonction"
                  placeholder="Personnel du ministère de la pêche"
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="twitterpassword">Votre Message</Label>
                {/* <Input
                  id="fonction"
                  placeholder="..."
                  type="texta"
                /> */}
                <Input id="message" type="text" placeholder='Votre message ici...'/>
                
              </LabelInputContainer>
              <LabelInputContainer className="mb-3">
                <Label htmlFor="picture">Importer une photo</Label>
                <Input id="picture" type="file"/>
              </LabelInputContainer>
              <div className="justify-center items-center ml-[185px]">
                <button
                  className=" relative bg-gradient-to-r from-cyan-900 to-sky-950 text-white rounded-lg p-1"
                  type="submit"
                >
                  Déposer &rarr;
                  <BottomGradient />
                </button>
              </div>
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
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