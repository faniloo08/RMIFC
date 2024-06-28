"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const ImageGenerateEffect = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 3.5,
        delay: stagger(0.5),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="grid grid-flow-col gap-2">
        {images.map((image, idx) => {
          return (
              <motion.span
                key={image + idx}
                className="dark:text-white text-white opacity-0 text-sm md:text-xs"
              >
                  <img src={image} alt="PS" className="w-[50px] h-[35px] ml-1"/>

              </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
