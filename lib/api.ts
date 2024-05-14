const url: string = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`;

async function getData(): Promise<any> {
    try {
        const resp = await fetch(url, {
            method: 'GET',
            mode: 'no-cors', //Définition du mode de requête sur 'no-cors'
        });
        const result = await resp.json();
        if (resp.status === 200) {
            console.log('Success :', result);
        }
        return result;
    } catch (error) {
        console.log(`ERROR: ${error}`);
        return error;
    }
}

interface Article {
    titre: string;
    description: string;
    date: string;
    slug: string;
    cover: string;
    article: string;
}

export async function DataToTable(): Promise<Article[]> {
    const elements: any = await getData();
    const articles: Article[] = [];
    const tableauDeDonnees: any[] = [];
    const tousLesTitres: string[] = [];
    const toutesLesDescriptions: string[] = [];
    const toutesLesDates: string[] = [];
    const toutesLesArticles: string[] = [];
    const tousLesSlugs: string[] = [];
    const tousLesCovers: string[] = [];

    if (typeof elements === 'object' && elements !== null && elements.data) {
        elements.data.forEach((item: any) => {
            const objet = item.attributes;
            const ligne: any[] = [];
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

        console.log('Le tableau contenant les articles donne: ', tableauDeDonnees);

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const titre = tableauDeDonnees[i][0];
            tousLesTitres.push(titre);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const desc = tableauDeDonnees[i][1];
            toutesLesDescriptions.push(desc);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const slug = tableauDeDonnees[i][2];
            tousLesSlugs.push(slug);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const date = tableauDeDonnees[i][8];
            toutesLesDates.push(date);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const articleContent = tableauDeDonnees[i][11][0].body;
            toutesLesArticles.push(articleContent);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const coverUrl = tableauDeDonnees[i][9].data.attributes.url;
            const src = process.env.NEXT_PUBLIC_STRAPI_API_URL + coverUrl;
            tousLesCovers.push(src);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const article: Article = {
                titre: tousLesTitres[i],
                description: toutesLesDescriptions[i],
                date: toutesLesDates[i],
                slug: tousLesSlugs[i],
                cover: tousLesCovers[i],
                article: toutesLesArticles[i],
            };
            articles.push(article);
        }

        console.log("Tous les articles formatés donnent : ", articles);
        console.log(typeof articles);
        console.log(articles.length);
        return articles;
    } else {
        console.error("Les données retournées ne sont pas un objet ou ne contiennent pas de données.");
        return [];
    }
}

