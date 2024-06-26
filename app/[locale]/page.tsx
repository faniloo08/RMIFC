"use client"
import { useState, useEffect } from 'react';
import { MenuBar } from "./common/menubar/menu";
import { NavBar } from "./common/navbar/nav";
import { MenuBuger } from "./common/navbar/menuburger";
import Slide from "./homecomp/Slider/slide";
import Mase from "./homecomp/mase/mase";
import { PresText } from "./homecomp/presentation/prestext";
import Statistique from "./homecomp/statistique/statistique";
import Link from "next/link";
import Articles from "./homecomp/articles/articles";
import Callaction from "./homecomp/callaction/callaction";
import Exercices from "./homecomp/exercices/exercices";
import Recherche from "./homecomp/recherche/recherche";
import PersoCles from "./homecomp/personnagesCles/persoCles";
import Ressource from "./homecomp/ressources/ressource";
import Partenaire from "./homecomp/partenaires/partenaire";
import Vcr from "./homecomp/vcr/vcr";
import Newsletter from "./homecomp/newsletter/newsletter";
import Footer from "./common/footer/footer";
import Image from "next/image";
import TranslationsProvider from '@/components/ui/TranslationProvider';
import initTranslation from '../i18n';
interface HomeProps {
  params: {
    locale: string;
  };
}

export default function Home({ params: { locale } }: HomeProps) {
  const [t, setT] = useState<(key: string) => string>(() => (key: string) => key);
  const [ressources, setRessources] = useState('');
  const i18Namespaces =  ['common']
  useEffect(() => {
    const fetchDonnees = async () => {
      const { t, resources } = await initTranslation(locale, i18Namespaces);
      setT(() => t);
      setRessources(()  => resources)
    }
  fetchDonnees();
  }, []);
  //const { t } = useTranslation('common');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Utilise la largeur de 768px comme seuil pour les appareils mobiles
    };

    handleResize(); // Vérifie la taille de l'écran au chargement de la page
    window.addEventListener('resize', handleResize); // Écoute les changements de taille de l'écran

    return () => {
      window.removeEventListener('resize', handleResize); // Nettoie l'écouteur d'événements lors du démontage du composant
    };
  }, []);

  return (
    <TranslationsProvider ressources={ressources} locale={locale} namespaces={i18Namespaces}>
      <div className="overflow-x-hidden bg-[url('/Fond1.webp')] bg-cover flex bg-center min-h-screen items-center justify-center ">
        <div className="bg-white md:bg-[url('/HomePage2(1).png')] lg:bg-[url('/HomePage(2).png')] 2xl:bg-[url('/HomePage2.png')] bg-center bg-no-repeat items-center justify-center w-[90%] h-4/5 bg-cover">
          <div className="bg-cover grid grid-cols-1">
            <div className="mb-1">
              <MenuBar />
            </div>
            <div className="flex items-center justify-center">
              <div className="fixed z-50">
                {/* <NavBar /> */}
                {isMobile ? <MenuBuger/> : <NavBar/>}
              </div>
            </div>
          </div>
          <div className="bg-cover grid md:grid-cols-3 gap-3 items-center justify-center">
            <div className="bg-cover grid grid-cols-1 items-center justify-center md:col-span-2">
              <div className="relative mt-[50px] md:mt-[0px]">
                <div className="sm:mt-[0px] md:mt-[-195px] lg:mt-[0px] xl:mt-[0px] 2xl:mt-[50px] w-[92%] md:w-[90%] lg:w-[94%] xl:w-[91%] 2xl:w-[88%] ml-[20px]">
                  <Slide />
                </div>
                <div className="md:flex justify-center items-center relative mt-[30px] sm:mt-[10px] md:mt-[0px] ml-[25%] sm:ml-[35%] md:ml-[10%] lg:ml-[0%] 2xl:ml-[-5%]">
                  <Mase />
                </div>
                {/* Reseaux Sociaux */}
                <div className="grid grid-cols-2 grid-flow-row md:space-x-[-150px] 2xl:space-x-[-250px] ml-[30px] mt-[50px]">
                  {/* fb */}
                  <div className="">
                    <Link href="https://www.facebook.com/RMIFCenter">
                      <Image
                        src="/Ellipse4.png"
                        alt="FB"
                        width={50}
                        height={50}
                        className=" hover:text-white inline-flex cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl"
                      />
                    </Link>
                  </div>

                  {/*X*/}
                  <div className="">
                    <Link href="https://twitter.com/RMIFCenter">
                      <Image
                        src="/Ellipse5.png"
                        alt="X"
                        width={50}
                        height={50}
                        className="hover:text-white inline-flex cursor-pointer items-center justify-center rounded-full px-1 py-1 text-xl hover:text-2xl font-medium text-white backdrop-blur-3xl"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:hidden md:block md:mt-[0px] lg:mt-[10px] 2xl:mt-[-10px] w-[92%]">
              <div>
                <p className="text-sky-950 font-bold lg:text-[18px] md:text-[20px] text-[24px] mt-[35px] ">{t("Centre Régional de Fusion de Information Maritimes")}</p>
                <PresText />
              </div>
              <div className="lg: mt-[50px] xl:mt-[50px] 2xl:mt-[150px]">
                <Statistique />
              </div>
            </div>
          </div>
          <div className="bg-white bg-center items-center justify-center">

            <div className="2xl:mt-[50px] lg:mt-[50px] grid grid-flow-row grif-cols-1 lg:grid-cols-2 lg:space-x-[350px] 2xl:space-x-[600px]">
              <div className="ml-[28px] bg-[url('/fleche.png')] w-[228px] h-[52px] ">
                <span className="flex justify-center items-center mt-2 font-bold text-[#092933]">
                  <p className="text-center">
                    {t("Dernières Actualités")}
                  </p>
                </span>
              </div>
              <div>
                <Link href="/contenu/tous" className='text-cyan-400 underline text-sm ml-[50px] ' >
                  {t("toutes les actualités")}
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[30px]">
              <Articles />
            </div>
            <div className="mt-[50px]">
              <Recherche placeholder="" />
            </div>
            <div className="mt-[50px]">
              <Exercices />
            </div>
            <div className="mt-[50px]">
              <Callaction />
            </div>
            <div className="mt-[80px]">
              <PersoCles />
            </div>
            <div className="mt-[50px] bg-[url('/fleche.png')] ml-[28px] w-[228px] h-[52px] ">
              <span className="inline-flex justify-center items-center mt-2 ml-5 font-bold text-[#092933]">
                {t("Ressources")}
              </span>
            </div>
            <div className="mt-[50px]">
              <Ressource />
            </div>
            <div className="mt-[80px]">
              <Partenaire />
            </div>
            <div className="flex justify-center items-center mt-[50px]">
              <Vcr />
            </div>
            <div className="mt-[50px]">
              <Newsletter />
            </div>

            <div className="mt-[30px]">
              <Footer />
            </div>

          </div>
        </div>
      </div>
    </TranslationsProvider>
  );
}

//export default appWithTranslation(Home);