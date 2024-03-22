"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";

export default function Slide() {
  const images = [
    "/SlideA.png",
    "/SlideB.png"
  ];
  return (
    <ImagesSlider className=" drop-shadow flex h-[25rem] w-[41rem] justify-center items-center" images={images}>
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
        <div className=" w-[210px] px-4 py-2 backdrop-blur-sm border bg-gradient-to-r text-white ml-[300px] mt-[-50px] text-center rounded-lg relative"style={{}}>
          <p className="text-xs">
          Le CRFIM est une organisation gouvernementale qui opère dans le secteur Maritime, en coopération avec plusieurs pays  et organisations internationales
          </p>
          <button className="hover:bg-slate-500 px-2 py-2 backdrop-blur-sm border bg-gradient-to-r from-cyan-900 to-sky-950  border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <Link href="/">
              <span className="text-s">Nous contacter</span>
            </Link>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-teal-900 to-sky-950" />
          </button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
