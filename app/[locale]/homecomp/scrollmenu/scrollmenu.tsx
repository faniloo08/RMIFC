"use client"

import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@radix-ui/react-menubar'
import Link from 'next/link'
import { useTranslation } from 'next-i18next';

export default function ScrollMenu() {
  const { t } = useTranslation('common');
  const tags = [
    `${t("Ce que nous faisons ?.Maritime Incident")}`,
    `${t("Ce que nous faisons ?.Arms Trafficking smuggling by sea")}`,
    `${t("Ce que nous faisons ?.Maritime Environment")}` ,
    `${t("Ce que nous faisons ?.Maritime Critical Infrastructure")}`,
    `${t("Ce que nous faisons ?.Maritime Cybercriminality")}`,
    `${t("Ce que nous faisons ?.Natural events and HADR")}`,
    `${t("Ce que nous faisons ?.Others")}`,
    `${t("Ce que nous faisons ?.Violent acts at sea")}`,
    `${t("Ce que nous faisons ?.Weapon proliferation (PSI)")}`,
    `${t("Ce que nous faisons ?.Yachting and Maritime Tourism")}`,
    `${t("Ce que nous faisons ?.Illegal unregulated and unreported fishing by sea")}`,
    `${t("Ce que nous faisons ?.Illegal Migration and Human trafficking by sea")}`
  ] 
  return (
    <ScrollArea className="h-[415px] rounded-md border">
      <div className="p-4">
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm font-bold text-slate-800 hover:underline hover:text-blue-600">
              <Link href="/infopages/categorie">
                {tag}
              </Link>
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}