//Prendre les ressources à partir d'API.
const axios = require('axios');
require('dotenv').config();

const getWeatherData = async () => {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Antananarivo&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo :', error);
    return null;
  }
};
export async function DataToTable(){
    const elements = await getWeatherData();
    const tableauDeDonnees= [];
    if (typeof elements === 'object' && elements !== null && elements.main) {
        elements.data.forEach((item) => {
            const objet = item;
            const ligne= [];
            for (const propriete in objet) {
                ligne.push(objet[propriete]);
            }
            const existingIndex = tableauDeDonnees.findIndex(existingLigne => {
                return JSON.stringify(existingLigne) === JSON.stringify(ligne);
            });
            if (existingIndex === -1) {
                tableauDeDonnees.push(ligne);
            }
        });
        console.log('Le tableau contenant les données météo donne: ', tableauDeDonnees);
    } else {
        console.error("Les données retournées ne sont pas un objet ou ne contiennent pas de données.");
        return [];
    }  
}
module.exports = { DataToTable };