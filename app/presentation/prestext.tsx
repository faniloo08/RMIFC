"use client";
import { TextGenerateEffect } from '@/components/ui/text-generated-effect';
import React from 'react'
import Link from 'next/link';
const words = `Découvrez l'excellence dans la surveillance et la coordination maritimes.

Au cœur de l'océan, notre centre est un phare de sécurité et d'efficacité dans les eaux régionales. Forts de notre expertise, de nos technologies de pointe et de notre dévouement sans faille, nous veillons sur les mers avec vigilance et détermination.

Nos missions sont vastes et variées ...
`;

export function PresText() {
    return (
        <div>
            <TextGenerateEffect className='lg:h-[20rem] 2xl:h-[15rem] 2xl:w-[550px] lg:w-[360px] md:w-[180px] justify-center items-center ' words={words} />
            <Link href="/historique" className='text-cyan-400 underline text-sm 2xl:mt-[-100px] '>En savoir plus</Link>
        </div>
    )
    
}