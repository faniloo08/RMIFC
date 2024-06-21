//import { appWithTranslation } from 'next-i18next';
//import { useTranslation } from 'next-i18next';
import { Metadata } from 'next';

import { cn } from '@/lib/utils';

// Importer vos styles ou polices ici
import './globals.css';
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
}>) 
{
  //const { t } = useTranslation('common');

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <title>{t('metadata.title')}</title> */}
        {/* <meta name="description" content={t('metadata.description')} />
        <link rel="icon" href={t('metadata.icons.icon')} /> */}
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}

// Envelopper RootLayout avec appWithTranslation
//export default appWithTranslation(RootLayout as React.ComponentType<any>);
