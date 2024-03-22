import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Recherche() {
    const [message, setMessage] = useState('');
    const handleClick = () => {
        alert('Recherche en cours')
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
  return (
    <div className='w-full h-[190px] bg-gradient-to-r from-[#ADD9D4] to-[#999797] justify-center items-center py-[40px]'>
        
        <div className='w-[1000px] h-[120px] border border-white rounded-lg justify-center items-center ml-[70px] py-3'>
            <div className=''>
                <p className='text-white text-lg font-bold text-center '>
                    Rechercher des articles
                </p>
            </div>
            <div className="ml-[-310px] justify-center items-center drop-shadow relative inline-flex overflow-hidden rounded-full p-[2px] w-[1200px]">           
                <span className=" ml-[410px] bg-white inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-slate-700 backdrop-blur-3xl">
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    rows={1} // Nombre de lignes du textarea
                    cols={50} // Nombre de colonnes du textarea
                    placeholder="Ex: Incident Maritime de l'année 2023..."
                ></textarea>
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