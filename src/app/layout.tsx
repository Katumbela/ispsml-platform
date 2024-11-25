"use client"

import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
// import { I18nextProvider } from 'react-i18next';
import i18n from '@/infra/i18n';
import { usePathname } from 'next/navigation'; // importar usePathname
// import { LanguageProvider } from "@/contexts/lang-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
