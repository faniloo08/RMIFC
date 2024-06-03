import type { Metadata } from "next";
import "../globals.css";
// import ColorSwitcher from "./color-switcher/ColorSwitcher";
import { cn } from "@/lib/utils"
import {MenuBar} from "../common/menubar/menu";
import Footer from "../common/footer/footer";

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
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className ="overflow-x-hidden bg-[url('/Fond1.webp')] bg-cover flex bg-center min-h-screen items-center justify-center ">
          <div className="bg-white bg-center bg-no-repeat w-[85%] h-4/5 items-center justify-center bg-cover">
            <div className="bg-cover grid grid-cols-1"> 
              <div className="mb-1"> 
                  <MenuBar/>
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
