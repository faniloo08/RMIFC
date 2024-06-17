"use client";
import { TextGenerateEffect } from '@/components/ui/text-generated-effect';
import React from 'react'
import Link from 'next/link';
import { translate } from '@/lib/translate';

export function PresText() {
    const words = `${translate("Découvrez l'excellence dans la surveillance et la coordination maritimes. Au cœur de l'océan, notre centre est un phare de sécurité et d'efficacité dans les eaux régionales. Forts de notre expertise, de nos technologies de pointe et de notre dévouement sans faille, nous veillons sur les mers avec vigilance et détermination. Nos missions sont vastes et variées ...")}`;
    return (
        <div>
            <TextGenerateEffect className="lg:h-[25rem] 2xl:h-[15rem] justify-center items-center " words={words} />
            <Link href="/infopages/historique" className="text-cyan-400 underline text-sm xl:mt-[-100px] lg:mt-[50px] mt-[0px]">{translate("En savoir plus")}</Link>
        </div>
    )
    
}