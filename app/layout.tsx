import type { Metadata } from "next";
import "./globals.css";
// import ColorSwitcher from "./color-switcher/ColorSwitcher";
import { cn } from "@/lib/utils"

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
       {children}
      </body>
    {/* <ColorSwitcher/> */}
    </html>
    
  );
}
