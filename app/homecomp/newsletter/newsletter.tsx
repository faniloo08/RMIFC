import React, {useState} from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input';
import { translate } from '@/lib/translate';


function Newsletter() {
    var [confirmation, setConfirmation] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const handleClick = () => {
        setConfirmation(confirmation = 'Veuillez confirmer votre email via le lien envoyé')
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
    const Texte = [
        `${translate("Vous abonner à notre Newsletter")}`,
        `${translate("S'abonner")}`
    ]
  return (
    <div className="w-full h-[190px] flex bg-center  justify-center items-center py-[40px]">
        
        <div className="bg-center bg-no-repeat w-[85%] bg-cover h-[120px] border border-[#85268D] rounded-lg justify-center items-center">
            <div className="flex items-center justify-center">
                <div className="bg-white sm:w-[450px] h-[50px] flex justify-center items-center mt-[-20px] py-[10px]">
                    <p className="text-black text-xs md:text-lg font-bold text-center">
                        {Texte[0]}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="sm:px-2 justify-center items-center drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] w-[80%]">
                    <span onChange={handleChange} className="bg-white inline-flex h-[50px] w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-slate-700 backdrop-blur-3xl">
                        <Input type="email" placeholder={translate("Entrer votre addresse email...")} className="bg-white w-full md:ml-[50px]" value={message}/>
                    </span>
                    <div>
                        <button className="i h-full w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-whitenline-flex animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#081C31,45%,#195697,55%,#081C31)] bg-[length:200%_100%] text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick}>
                            {Texte[1]}
                        </button>
                        
                    </div>
                </div>
                <Link href="/">
                    <div className="text-xs justify-center items-center text-center">
                        {confirmation}
                    </div>
                </Link>
            </div>
            
        </div>
    </div>

  )
}

export default Newsletter