import React from 'react'
import { FlipWords } from '@/components/ui/flip-words'
import { useTranslation } from "react-i18next"

function Statistique() {
  const {t} = useTranslation();
  const Stat = [
    "",
    `${t("statistiques.Pays signataires")}`,
    `${t("statistiques.Centres régionaux")}`,
    `${t("statistiques.Formations dans l'année")}`,
    `${t("statistiques.Missions effectuées")}`
  ]
  const words = [
    `${t("statistiques.Surveillance Maritime")}`, `${t("statistiques.Opérations en Mer")}`, `${t("statistiques.Actions pour la MDA")}`
  ];

  return (
    <div className="w-[92%]">
      <div className="flex mb-[30px] 2xl:mb-[50px]  text-slate-950 font-bold text-[16px]">
          {t("statistiques.Visualisez les statistiques clés de nos activités")}
          <FlipWords words={words} />
        
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-3">
        <div>
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
            <span className=" bg-sky-950 hover:text-white inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
              7
            </span>
          </button>
          <p className="ml-[50px] mt-[-35px] text-sm text-white ">{Stat[1]}</p>
        </div>
     
        <div className="">
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
            <span className=" bg-sky-950 hover:text-white inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
              2
            </span>
          </button>
          <p className="ml-[50px] mt-[-35px] text-sm text-white ">{Stat[2]}</p>
        </div>

        <div className="">
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
            <span className=" bg-sky-950 hover:text-white inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
              +10
            </span>
          </button>
          <p className="ml-[50px] mt-[-35px] text-sm text-white ">{Stat[3]}</p>
        </div>

        <div className="">
          <button className=" drop-shadow relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#299EF2_0%,#A6138E_50%,#011764_100%)]" />
            <span className=" bg-sky-950 hover:text-white inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl">
              +50
            </span>
          </button>
          <p className="ml-[50px] mt-[-35px] text-sm text-white ">{Stat[4]}</p>
        </div>
      </div>
    </div>
  )
}

export default Statistique