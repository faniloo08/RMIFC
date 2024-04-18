import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function Recherche({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter()
  
    const handleSearch = useDebouncedCallback((term) => {
      console.log(`Searching... ${term}`);
    //   replace('/contenu?page=1');
      //URLSearchParams is a web API used to set search params
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`/contenu${pathname}?${params.toString()}`);
    },1000);

    const [message, setMessage] = useState('');
    const handleClick = () => {
        alert('Recherche en cours')
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
  return (
    <div className='w-full h-[190px] bg-gradient-to-r from-[#ADD9D4] to-[#999797] justify-center items-center py-[40px]'>
        
        <div className='lg:w-[1000px] 2xl:w-[1480px] h-[120px] border border-white rounded-lg justify-center items-center lg:ml-[70px] py-3'>
            <div className=''>
                <p className='text-white text-lg font-bold text-center '>
                    Rechercher des articles
                </p>
            </div>
            <div className="ml-[-310px] justify-center items-center drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] lg:w-[1200px] 2xl:w-[1680px]">           
                <span className=" ml-[410px] bg-white inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2 text-sm font-medium text-slate-700 backdrop-blur-3xl">
                <input
                    className="block w-full rounded-md border border-gray-200 py-[9px] text-sm placeholder:text-gray-500"
                    placeholder="Exercices 2023"
                    onChange={(e) => {
                    handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString()}
                />
                </span>
                <button className='relative ml-[-180px]' onClick={handleClick}>
                    <Image
                    width={30}
                    height={30}
                    src={"/Recherche.png" }
                    alt="Connexion"
                    />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Recherche