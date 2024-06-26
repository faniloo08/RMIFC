
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
        <meta name="keywords" content="maritime, information, fusion center, RMIFC, CRFIM" />
        <meta name="author" content="CRFIM" />
        <meta property="og:title" content="RMIFC | Regional Maritime Informations Fusion Center" />
        <meta property="og:description" content="RMIFC official website" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://crfim.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://crfim.vercel.app" />
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "RMIFC",
            "url": "https://crfim.vercel.app",
            "logo": "https://crfim.vercel.app/path/to/logo.jpg",
            "sameAs": [
              "https://www.facebook.com/rmifc",
              "https://twitter.com/rmifc"
            ]
          }`}
        </script>
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}

// Envelopper RootLayout avec appWithTranslation
//export default appWithTranslation(RootLayout as React.ComponentType<any>);
