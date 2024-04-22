import { DataToTable } from "./api2";

export async function Donnees(){
    const pages = await DataToTable(); // Récupérer les données
    // const titres = pages[3].titre; // Extraire les titres
    //const descriptions = pages[1].description;
    // const dates = pages.map(article => article.dates); 
    // // Extraire les descriptions
    // // Vous pouvez faire de même pour d'autres informations

    // return {
    //     titres: titres,
    //     descriptions: descriptions,
    //     // Ajoutez d'autres informations ici si nécessaire
    // };
    return pages
}