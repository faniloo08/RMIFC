import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@radix-ui/react-menubar'
import Link from 'next/link'
import { translate } from '@/lib/translate'

export default function ScrollMenu() {

  const tags = [
    `${translate("Maritime Incident")}`,
    `${translate("Arms Trafficking smuggling by sea")}`,
    `${translate("Maritime Environment")}` ,
    `${translate("Maritime Critical Infrastructure")}`,
    `${translate("Maritime Cybercriminality")}`,
    `${translate("Natural events and HADR")}`,
    `${translate("Others")}`,
    `${translate("Violent acts at sea")}`,
    `${translate("Weapon proliferation (PSI)")}`,
    `${translate("Yachting and Maritime Tourism")}`,
    `${translate("Illegal unregulated and unreported fishing by sea")}`,
    `${translate("Illegal Migration and Human trafficking by sea")}`
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
