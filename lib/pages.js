import { DataToTable } from "./api2";

export async function Donnees(){
    const pages = await DataToTable(); // Récupérer les données
    return pages
}