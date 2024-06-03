// import { FC } from "react";
import Image from "next/image";
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
        <div className="grid grid-cols-1 grid-flow-row place-items-center justify-center items-center"> 
            <div>
                <Image width={788} height={519} src="/404.png" alt="Error Images" />
                <h1 className="font-bold text-center">Page not found!</h1>
                <p className="text-center">
                    Sorry, but the page you were looking for could not be found.
                </p>
            </div>               
            <div className="mt-[30px] w-[200px] h-[35px] p-2 bg-blue-600 text-white text-sm font-bold rounded-lg justify-center items-center">
                <Link href="/" className="">                     
                    <p className="text-center">                           
                        Back to Homepage                         
                    </p>                   
                </Link>
            </div>
        </div>

       {/* <FooterOne /> */}    
</>
  )
}