"use client";
import { motion } from "framer-motion";
import React , {useState} from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
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

import {messageFonc} from '@/lib/message';
import { sendEmail } from "@/lib/mailService";

export default function Slide() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('')

  const images = [
    "/SlideA.webp",
    "/SlideB.webp"
  ];
  const Texte = [
    "Le CRFIM est une organisation gouvernementale qui opère dans le secteur Maritime, en coopération avec plusieurs pays  et organisations internationales",
    "Centre Régional de Fusion d'Informations Maritimes",
    "Adresse email : assistante.communication@crfimmadagascar.org",
  ]
  // Modifie la fonction handleSubmit pour utiliser la fonction post
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      if (!nom) {
        alert("Veuillez saisir votre nom d'utilisateur avant d'envoyer le formulaire.");
        return; // Arrête l'exécution de la fonction
      }
      await messageFonc(nom, email, topic, message); 
      setNom('');
      setEmail('');
      setTopic('');
      setMessage('');
      alert("Message Sent");
      window.location.reload();
    } catch (error) {
        console.error('An error occurred while sending the message:', error);
        alert("Message Not sent");
        window.location.reload();
    }
  }
  
  // Définit une fonction pour mettre à jour l'état lorsque la sélection change
  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(event.target.value); // Met à jour l'état avec la valeur sélectionnée
  };

  return (
    <ImagesSlider className="drop-shadow-lg flex lg:h-[25rem] md:h-[20rem] sm:h-[20rem] h-[12rem] justify-center items-center" images={images}>
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
          duration: 0.5,
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
                {/* Appel au formulaire */}
                  <button className="hover:bg-slate-500 lg:px-2 lg:py-2 py-[2px] px-[2px] backdrop-blur-sm border bg-gradient-to-r from-cyan-900 to-sky-950  border-emerald-500/20 text-white mx-auto text-center item-center justify-center rounded-[8px] lg:rounded-full relative mt-4">
                    <span className="text-[6px] 2xl:text-md lg:text-sm md:text-xs">Nous contacter</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-teal-900 to-sky-950" />
                  </button>
              </DialogTrigger>
              <DialogContent className="2xl:max-w-[600px] lg:max-w-[400px] items-center justify-center">
                {/*Le formulaire*/}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center mb-1">{Texte[1]}</CardTitle>
                    <CardDescription className="text-center">{Texte[2]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form id="messageForm" onSubmit={handleSubmit} action={sendEmail}>
                      <div className="grid w-full items-center gap-2">
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="name">Nom*</Label>
                          <Input id="name" name="name" placeholder="DOE John" value={nom} onChange={(e) => setNom(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="email">Email*</Label>
                          <Input id="email" name="email" placeholder="johndoe00@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="topic">Topic</Label>
                          <Select name="topic">
                            <SelectTrigger id="framework">
                              <SelectValue placeholder="Select"  onChange={handleTopicChange}/>
                            </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectItem value="Informations">Informations</SelectItem>
                              <SelectItem value="Prendre rendez-vous">Prendre rendez-vous</SelectItem>
                              <SelectItem value="Services aux CRFIM">Services aux CRFIM</SelectItem>
                              <SelectItem value="Autres">Autres</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <Label htmlFor="message">Message</Label>
                          <Input id="text" name="message" placeholder="Votre message" value={message} onChange={(e) => setMessage(e.target.value)}/>
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
