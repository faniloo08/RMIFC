"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card1";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Slide() {
  const images = [
    "/SlideA.png",
    "/SlideB.png"
  ];
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    const nameInput = event.currentTarget.elements.namedItem('name') as HTMLInputElement; // Récupère l'élément input avec l'id "name"
    const nameValue = nameInput.value.trim(); // Récupère la valeur de l'input en supprimant les espaces vides avant et après

    if (!nameValue) {
      // Si le champ "Name" est vide, affiche une alerte
      alert("Veuillez remplir le champ Name.");
    } else {
      // Sinon, le formulaire est valide, vous pouvez soumettre le formulaire ou effectuer d'autres actions ici
      // Par exemple, vous pouvez envoyer les données à un backend ou naviguer vers une autre page
      // Soumet le formulaire
      event.currentTarget.submit();
    }
};
  return (
    <ImagesSlider className="drop-shadow flex lg:h-[25rem] md:h-[20rem] sm:h-[15rem] h-[12rem] w-[17rem] sm:w-[24rem] md:w-[30rem] lg:w-[36rem] xl:w-[41rem] 2xl:w-[57rem] justify-center items-center" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p> */}
        <div className="md:w-[100px] lg:w-[210px] 2xl:w-[300px] px-4 py-2 backdrop-blur-sm border bg-gradient-to-r text-white ml-[300px] mt-[-50px] text-center rounded-lg relative"style={{}}>
          <p className="lg:text-xs md:text-[6px]">
          Le CRFIM est une organisation gouvernementale qui opère dans le secteur Maritime, en coopération avec plusieurs pays  et organisations internationales
          </p>
          <Dialog>
              <DialogTrigger asChild>
                <button className="hover:bg-slate-500 px-2 py-2 backdrop-blur-sm border bg-gradient-to-r from-cyan-900 to-sky-950  border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                  <Link href="/">
                    <span className="2xl:text-md lg:text-sm md:text-xs">Nous contacter</span>
                  </Link>
                  <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-teal-900 to-sky-950" />
                </button>
              </DialogTrigger>
              <DialogContent className="2xl:max-w-[600px] lg:max-w-[400px] items-center justify-center">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center mb-1">Centre Régional de Fusion d'Informations Maritimes</CardTitle>
                    <CardDescription className="text-center">Adresse email : assistante.communication@crfimmadagascar.org</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid w-full items-center gap-2">
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="name">Nom*</Label>
                          <Input id="name" placeholder="DOE John" required/>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="name">Email*</Label>
                          <Input id="email" placeholder="johndoe00@gmail.com" required/>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="framework">Topic</Label>
                          <Select>
                            <SelectTrigger id="framework">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectItem value="next">Informations</SelectItem>
                              <SelectItem value="sveltekit">Prendre rendez-vous</SelectItem>
                              <SelectItem value="astro">Services aux CRFIM</SelectItem>
                              <SelectItem value="nuxt">Autres</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="name">Message</Label>
                          <Input id="text" placeholder="Votre message"/>
                        </div>
                      </div>
                      <button type="submit" className=" outline relative rounded-full p-1 ml-[250px] mt-[40px] hover:bg-gradient-to-r from-cyan-900 to-sky-950 hover:text-white">Envoyer</button>
                    </form>
                  </CardContent>
                 
                </Card>
              </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
