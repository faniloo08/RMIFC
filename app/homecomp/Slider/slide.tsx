"use client";
import { motion } from "framer-motion";
import React , {useState} from "react";
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [body, setBody] = useState('')
  const images = [
    "/SlideA.png",
    "/SlideB.png"
  ];
  const Texte = [
    "Le CRFIM est une organisation gouvernementale qui opère dans le secteur Maritime, en coopération avec plusieurs pays  et organisations internationales",
    "Centre Régional de Fusion d'Informations Maritimes",
    "Adresse email : assistante.communication@crfimmadagascar.org",
  ]
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    const nameInput = event.currentTarget.elements.namedItem('name') as HTMLInputElement; // Récupère l'élément input avec l'id "name"
    const nameValue = nameInput.value.trim(); // Récupère la valeur de l'input en supprimant les espaces vides avant et après
    
    const formEvent = event as React.FormEvent<HTMLFormElement>;

    // Récupérez l'élément de formulaire HTML
    const formElement = formEvent.currentTarget;

    // Créez l'objet FormData avec l'élément de formulaire HTML
    const formData = new FormData(formElement);
    try {

        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });

        if (!response.ok) {
            console.log("falling over")
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message'])

        alert('Message successfully sent');
    } catch (err) {
        console.error(err);
        alert("Error, please try resubmitting the form");
    }

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
    <ImagesSlider className="drop-shadow flex lg:h-[25rem] md:h-[20rem] sm:h-[20rem] h-[12rem] w-[17rem] sm:w-[30rem] md:w-[30rem] lg:w-[36rem] xl:w-[41rem] 2xl:w-[57rem] justify-center items-center" images={images}>
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
        <div className="w-[100px] md:w-[100px] lg:w-[210px] 2xl:w-[300px] px-2 lg:px-4 py-1 lg:py-2 backdrop-blur-sm border bg-gradient-to-r text-white lg:ml-[300px] 2xl:ml-[450px] lg:mt-[-50px] ml-[80px] text-center rounded-lg relative"style={{}}>
          <p className="lg:text-xs md:text-[10px] text-[6px]">
            {Texte[0]}
          </p>
          <Dialog>
              <DialogTrigger asChild>
                <button className="hover:bg-slate-500 lg:px-2 lg:py-2 py-[2px] px-[2px] backdrop-blur-sm border bg-gradient-to-r from-cyan-900 to-sky-950  border-emerald-500/20 text-white mx-auto text-center item-center justify-center rounded-[8px] lg:rounded-full relative mt-4">
                  <Link href="/">
                    <span className="text-[6px] 2xl:text-md lg:text-sm md:text-xs">Nous contacter</span>
                  </Link>
                  <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-teal-900 to-sky-950" />
                </button>
              </DialogTrigger>
              <DialogContent className="2xl:max-w-[600px] lg:max-w-[400px] items-center justify-center">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center mb-1">{Texte[1]}</CardTitle>
                    <CardDescription className="text-center">{Texte[2]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid w-full items-center gap-2">
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="name">Nom*</Label>
                          <Input id="name" placeholder="DOE John" autoComplete="name" required/>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="name">Email*</Label>
                          <Input id="email" placeholder="johndoe00@gmail.com" autoComplete="email" required/>
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
                          <Label htmlFor="message">Message</Label>
                          <Input id="text" placeholder="Votre message" />
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