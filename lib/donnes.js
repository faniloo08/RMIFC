import { DataToTable } from "./api";

export async function Donnees(){
    const articles = await DataToTable(); // Récupérer les données
    return articles
}