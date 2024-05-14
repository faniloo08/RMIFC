import type { Metadata } from "next";
import "@/app/globals.css";
// import ColorSwitcher from "./color-switcher/ColorSwitcher";
import { cn } from "@/lib/utils"
import { NavBar } from "@/app/common/navbar/nav";
import {MenuBar} from "@/app/common/menubar/menu";
import Footer from "@/app/common/footer/footer";

// const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: `RMIFC | Regional Maritime Informations Fusion Center`,
  description: "RMIFC official website",
  icons: {
    icon: 'rmifc.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className ="overflow-x-hidden bg-[url('/Fond1.png')] bg-cover flex bg-center min-h-screen items-center justify-center ">
          <div className="bg-white bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
            <div className="bg-cover grid grid-cols-1"> 
              <div className="mb-1"> 
                  <MenuBar/>
              </div>
              <div className="flex items-center justify-center"> 
                  <div className="fixed z-50">
                      <NavBar/>
                  </div> 
              </div>
            </div>
            {children}
            <div className="mt-[50px]">
                <Footer/>
            </div>
          </div>
        </div>
      </body>
    {/* <ColorSwitcher/> */}
    </html>
    
  );
}