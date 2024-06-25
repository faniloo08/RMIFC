"use client";
import React from 'react'
//import Image from 'next/image'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Search } from "lucide-react"
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { useTranslation } from "react-i18next";

function Recherche({ placeholder }: { placeholder: string }) {
    const {t} = useTranslation();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter()
    function slugify (text: string) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    }
    
    const handleSearch = useDebouncedCallback((term) => {
      console.log(`Searching... ${term}`);
      //replace('/contenu?page=1');
      //URLSearchParams is a web API used to set search params
    if (searchParams) {
      const params = new URLSearchParams(searchParams || '');
      params.set('page', '1');
      if (term) {
        params.set('query', slugify(term));
      } else {
        params.delete('query');
      }
      replace(`/contenu${pathname}?${params.toString()}`);
    };
  },2000);
    const placeholders = [
      `${t("recherche.OPERATION AUXILIUM")}`,
      `${t("recherche.Visite des participants du forum du réseau des procureurs au CRFIM")}`,
      `${t("recherche.Réunion avec le FBI")}`,
      `${t("recherche.EXERCICE CUTLASS EXPRESS 2023 du 6 au 17 mars")}`,
      `${t("recherche.Les douanes du Qatar saisissent 90 kg de haschisch dissimulés dans une cargaison de pastèques")}`,
    ];
   
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   console.log(e.target.value);
    // };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("submitted");
    };
  return (
    <div className=" flex bg-center bg-cover w-full h-[190px] bg-gradient-to-r from-[#ADD9D4] to-[#999797] justify-center items-center py-[40px]">
      <div className="bg-center bg-no-repeat w-[85%]  bg-cover h-[120px] border border-white rounded-lg justify-center items-center py-3">
          <div className="">
              <p className="text-white text-lg font-bold text-center ">
                  {t("recherche.Rechercher des articles")}
              </p>
          </div>
          <div className="flex justify-center items-cente" cmdk-input-wrapper="">
              {/* <input
                  className="block w-[80%] rounded-full justify-center items-center border border-gray-200 py-[9px] text-sm placeholder:text-gray-500"
                  placeholder="Ex: Operation Auxilium"
                  onChange={(e) => {
                  handleSearch(e.target.value);
                  }}
                  // defaultValue={searchParams.get('query')?.toString()}
              /> */}
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={(e) => {
                handleSearch(e.target.value);
                }}
                onSubmit={onSubmit}
              />
              <Search className="mt-[8px] ml-[-30px] mr-2 h-4 w-4 shrink-0 opacity-50"/>
          </div>
      </div>
    </div>
  )
}

export default Recherche