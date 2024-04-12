import { DataToTable } from "./api";

export async function Donnees(){
    const articles = await DataToTable(); // Récupérer les données
    // const titres = articles[3].titre; // Extraire les titres
    //const descriptions = articles[1].description;
    // const dates = articles.map(article => article.dates); 
    // // Extraire les descriptions
    // // Vous pouvez faire de même pour d'autres informations

    // return {
    //     titres: titres,
    //     descriptions: descriptions,
    //     // Ajoutez d'autres informations ici si nécessaire
    // };
    return articles
}