// Supposons que tu as un dossier "locales" dans le dossier public contenant des fichiers comme "fr.json", "en.json", etc.
import { useLocale } from "@/context/LocalContext";
interface TranslationData {
    [key: string]: string;
  }
  
  export function translate(text: string): string {
    const { locale } = useLocale();
    try {
      const translations: TranslationData = require(`../public/locales/${locale}/common.json`);
      return translations[text] || text; // Retourne la traduction si elle existe, sinon retourne le texte original
    } catch (error) {
      console.error(`Unable to load or parse translations for locale "${locale}"`, error);
      return text; // En cas d'erreur, retourne le texte original
    }
  }
  