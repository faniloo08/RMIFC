import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@radix-ui/react-menubar'
import Link from 'next/link'


export default function ScrollMenu() {
  const tags = [
    "Maritime Incident",
    "Arms Trafficking smuggling by sea",
    "Maritime Environment" ,
    "Maritime Critical Infrastructure",
    "Maritime Cybercriminality",
    "Natural events and HADR",
    "Others",
    "Violent acts at sea",
    "Weapon proliferation (PSI)",
    "Yachting and Maritime Tourism",
    "Illegal unregulated and unreported fishing by sea",
    "Illegal Migration and Human trafficking by sea"
  ] 
  return (
    <ScrollArea className="h-[415px] rounded-md border">
      <div className="p-4">
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm font-bold text-slate-800 hover:underline hover:text-blue-600">
              <Link href="/categorie">
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
