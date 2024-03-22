import React, {useState} from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils';

function Newsletter() {
    const [message, setMessage] = useState('');
    const handleClick = () => {
        alert('Redirection en cours ...')
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
  return (
    <div className='w-full h-[190px]  justify-center items-center py-[40px]'>
        
        <div className='w-[1000px] h-[120px] border border-[#85268D] rounded-lg justify-center items-center ml-[35px]'>
            <div className='bg-white w-[450px] h-[50px] justify-center items-center ml-[265px] mt-[-20px] py-[10px]'>
                <p className='text-black text-lg font-bold text-center'>
                    Vous abonner à notre Newsletter
                </p>
            </div>
            <div className="px-2 ml-[-310px] justify-center items-center drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] w-[1200px]">
                <span className=" ml-[410px] bg-white inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-slate-700 backdrop-blur-3xl">
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        rows={1} // Nombre de lignes du textarea
                        cols={50} // Nombre de colonnes du textarea
                        placeholder="Entrer votre addresse email..."
                    ></textarea>
                </span>
                <div>
                    <Link href="/">
                    <button className="i h-full w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-whitenline-flex animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#081C31,45%,#195697,55%,#081C31)] bg-[length:200%_100%] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick}>
                        S'abonner
                    </button>
                    </Link>
                </div>
            </div>
  
        </div>
    </div>

  )
}

export default Newsletter