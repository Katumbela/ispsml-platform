"use client" 

import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
// import { I18nextProvider } from 'react-i18next';
import i18n from '@/infra/i18n';
import { usePathname } from 'next/navigation'; // importar usePathname
// import { LanguageProvider } from "@/contexts/lang-context";
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // obter o pathname
  const lang = typeof pathname === 'string' && pathname.startsWith('/en') ? 'en' : 'pt'; // determinar a língua a partir da rota

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang); // mudar a língua no i18n
      localStorage.setItem('lang', lang); // armazenar a língua atual
    }
  }, [lang]);

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint is 1024px
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return (
    <html lang={lang}>
      <head>
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" /> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        
        <link rel="stylesheet" media="all" href="//fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i" />
         <link rel="stylesheet" media="all" href="//fonts.googleapis.com/css2?family=Raleway:wght@900&amp;display=swap" />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* <LanguageProvider> */}
          
        {/* <I18nextProvider i18n={i18n}> */}
          {isLargeScreen ? (

            <>

              {loading ? <Loader /> : children}

            </>) : (
            <div className="flex items-center justify-center h-screen text-lg font-medium text-center text-red-600">
              Esta plataforma ainda não está disponível para estes tamanhos de tela, use um computador para aceder.
            </div>
          )}
        {/* </I18nextProvider> */}
        
        {/* </LanguageProvider> */}
      </body>
    </html>
  );
}
