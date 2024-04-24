import React, {useState} from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input';

function Newsletter() {
    var [confirmation, setConfirmation] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const handleClick = () => {
        setConfirmation(confirmation = 'Veuillez confirmer votre email via le lien envoyé')
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
  return (
    <div className='w-full h-[190px]  justify-center items-center py-[40px]'>
        
        <div className='2xl:w-[1480px] lg:w-[1000px] h-[120px] border border-[#85268D] rounded-lg justify-center items-center md:ml-[35px]'>
            <div className='bg-white sm:w-[450px] h-[50px] justify-center items-center 2xl:ml-[520px] lg:ml-[265px] mt-[-20px] py-[10px]'>
                <p className='text-black text-xs md:text-lg font-bold text-center'>
                    Vous abonner à notre Newsletter
                </p>
            </div>
            <div className="sm:px-2 ml-[-350px] 2xl:ml-[-50px] lg:ml-[-310px] justify-center items-center drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] md:w-[1200px]">
                <span onChange={handleChange} className=" ml-[410px] bg-white inline-flex h-[50px] w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-slate-700 backdrop-blur-3xl">
                    <Input type="email" placeholder="Entrer votre addresse email..." className='bg-white w-full md:ml-[50px]' value={message}/>
                </span>
                <div>
                    <button className="i h-full w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-whitenline-flex animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#081C31,45%,#195697,55%,#081C31)] bg-[length:200%_100%] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick}>
                        S'abonner
                    </button>
                    
                </div>
            </div>
            <Link href='/'>
                <div className='text-xs justify-center items-center text-center'>
                        {confirmation}
                </div>
            </Link>
        </div>
    </div>

  )
}

export default Newsletter