var url: string ;
const getUrlWithLocale = (pathname: string): string => {
    if (pathname.includes("/en")) {
        return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&locale=en`;
    } else if (pathname.includes("/fr")) {
        return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&locale=fr`;
    }
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&locale=fr`
}
// const urlLocal: string = `${url}&local=${locale}`;
async function getData(locale : string): Promise<any> {
    url = getUrlWithLocale(locale);
    try {
        const resp = await fetch(url, {
            method: 'GET',
            // mode: 'no-cors', //Définition du mode de requête sur 'no-cors'
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
    gallerie: string[];
}

export async function DataToTable(locale : string): Promise<Article[]> {
    const elements: any = await getData(locale);
    const articles: Article[] = [];
    const tableauDeDonnees: any[] = [];
    const tousLesTitres: string[] = [];
    const toutesLesDescriptions: string[] = [];
    const toutesLesDates: string[] = [];
    const toutesLesArticles: string[] = [];
    const tousLesSlugs: string[] = [];
    const tousLesCovers: string[] = [];
    const ImagesGallerie: any[] = [];
    //Pour la gallerie d'images
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    const image:string[] = [];
    let match;

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
            const articleContent = tableauDeDonnees[i][12][0].body;
            //Gallerie d'images
            while ((match = imageRegex.exec(articleContent)) !== null) {
                image.push(match[1]);
            }
            // console.log(image);
            ImagesGallerie.push(image);
            toutesLesArticles.push(articleContent);
        }
        console.log(ImagesGallerie);

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const coverUrl = tableauDeDonnees[i][10].data.attributes.url;
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
                gallerie: ImagesGallerie[i],
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
