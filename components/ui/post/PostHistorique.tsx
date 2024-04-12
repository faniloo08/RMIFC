"use client"
import React from 'react'
import { NavBar } from '@/app/navbar/nav';
import { MenuBar } from '@/app/menubar/menu';
import Footer from "@/app/footer/footer";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {slugify} from '@/lib/slugify'
import { Data } from '@react-google-maps/api';

interface PostData {
    title: string;
    // Ajoutez d'autres propriétés de données au besoin
}

interface PostHistoriqueProps {
    postData: PostData[];
}

const PostHistorique: React.FC<PostHistoriqueProps> = ({ postData }) => {
    const firstPost = postData[0];
    return(
    <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        <div className="bg-white bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
            <div className="bg-cover grid grid-cols-1">
                <div> 
                    <MenuBar/>
                </div>
                <div className="flex items-center justify-center"> 
                    <NavBar/>
                </div>
                <div className="mt-[30px] flex items-center justify-center">
                    <p className='text-[50px] font-bold'>
                        {firstPost.title}
                    </p>
                </div>
                {postData.slice(1, 5).map((data,index) => (
                <div key={index} className="grid grid-cols-2 items-center justify-center">
                    <div className='mt-[30px] ml-[50px] w-[600px]'>
                        {data.title}
                    </div>
                </div>
                ))}
                {/* Photos liées à l’article */}
                <p className='font-bold text-lg mt-[50px] ml-[50px]'>Galerie d'images</p>
                <div className="mt-[30px] ml-[50px] grid grid-cols-3 gap-1 items-center justify-center">
                    <div>
                        {/* Photo1 */}
                        <img src="/Hist1.png" alt="" width={300} height={250} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo2 */}
                        <img src="/Hist2.png" alt="" width={300} height={250} className='hover:scale-110'/>
                    </div>
                    <div>
                        {/* Photo3 */}
                        <img src="/Hist3.png" alt="" width={300} height={250} className='hover:scale-110'/>
                    </div>
                </div>
                
                <div className="mt-[50px]">
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostHistorique
