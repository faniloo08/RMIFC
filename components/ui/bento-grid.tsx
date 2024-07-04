import { cn } from "@/lib/utils"
import Link from "next/link";
import Image from "next/image";
import { UrlObject } from "url";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  date,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  date?: string | React.ReactNode;
  header : string;
  icon?: React.ReactNode;
  link?: string;
}) => {
  if (!link) {
    // Gérer le cas où link est indéfini ou invalide
    return null;
  }

  // Transformer le link en objet Url si nécessaire
  const linkUrl: UrlObject | string = link;
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Link href={linkUrl}>
        <img src={header} alt="" width={200} height={120} className="rounded-lg ml-[15px]"/>
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-sm">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {date}
          </div>
        </div>
      </Link>
      
    </div>
  );
};
