"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { Search } from "lucide-react"
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const {t} = useTranslation();
  const [city, setCity] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('City submitted:', city); // Ajout du log
    onSearch(city);
  };

  return (
    <div className="grid grid-row-1 gap-1 ">
      <div className="flex items-center" cmdk-input-wrapper="">
          <input
              className="block w-[100%] rounded-md shadow-md border border-gray-200 py-[9px] text-sm placeholder:text-gray-500"
              placeholder={t("ressources.Search City")}
              onChange={handleChange}
              // defaultValue={searchParams.get('query')?.toString()}
          />
          <Search className="ml-[-50px] mr-2 h-4 w-4 shrink-0 opacity-50" onClick={handleSubmit}/>
      </div>
    </div>
  );
}