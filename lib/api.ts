// const url = 'https://backend.crfimmadagascar.org/api/articles?populate=*'


// async function getData(){

//     try{
//         const resp = await fetch(url)
//         const result = await resp.json()
//         if (resp.status === 200){
//             console.log('Success :',result)
//         }
//         return result
        
//     } catch(error){
//         console.log(`ERROR: ${error}`)
//         return error
//     }
    
// }

// var tableauDeDonnees = [];
// var tousLesTitres = [];
// var toutesLesDescriptions = [];
// var toutesLesDates = [];
// var toutesLesArticles = [];
// var tousLesSlugs = [];
// var tousLesCovers = [];

// interface Article {
//     titre: string;
//     description: string;
//     date: string;
//     slug: string;
// }

// export async function DataToTable(): Promise<Article[]> {
//     var elements = await getData();
//     var articles = [];
//     var article = {};
//     if(typeof elements === 'object' && elements !== null && elements.data) {
//         // Itérer directement sur elements.data
//         elements.data.forEach(item => {
//             // Traiter chaque élément et ajouter les attributs à tableauDeDonnees
//             var objet = item.attributes;
//             var ligne = [];
//             for (var propriete in objet) {
//                 ligne.push(objet[propriete]);
//             }
//              // Vérifier si la ligne existe déjà dans le tableauDeDonnees
//             var existingIndex = tableauDeDonnees.findIndex(existingLigne => {
//                 // Comparaison des lignes
//                 return JSON.stringify(existingLigne) === JSON.stringify(ligne);
//             });

//             if (existingIndex === -1) {
//                 // La ligne n'existe pas encore, l'ajouter à tableauDeDonnees
//                 tableauDeDonnees.push(ligne);
//             }
//         });
        
//         console.log('Le tableau contenant les articles donne: ', tableauDeDonnees);
//         // console.log(typeof(tableauDeDonnees))
//         //console.log('le 1er articles est : ',tableauDeDonnees[0])

//         //pour obtenir par exemple tous les titres :
//         // Parcourir chaque ligne du tableau de données
//         for (var i = 0; i < tableauDeDonnees.length; i++) {
//             // Récupérer le titre de la première colonne de la ligne actuelle
//             var titre = tableauDeDonnees[i][0];
//             // Ajouter le titre au tableau de tous les titres
//             tousLesTitres.push(titre);
//         }
//         //console.log('Les titres des articles sont : ', tousLesTitres)

//         //pour obtenir toutes les descriptions :
//         for (var i = 0; i < tableauDeDonnees.length; i++) {
//             // Récupérer le titre de la première colonne de la ligne actuelle
//             var desc = tableauDeDonnees[i][1];
//             // Ajouter le titre au tableau de tous les titres
//             toutesLesDescriptions.push(desc);
//         }
//         //console.log('Les descriptions des articles sont : ', toutesLesDescriptions)

//         //pour obtenir les slugs :
//         for (var i = 0; i < tableauDeDonnees.length; i++) {
//             // Récupérer le titre de la première colonne de la ligne actuelle
//             var slug = tableauDeDonnees[i][2];
//             // Ajouter le titre au tableau de tous les titres
//             tousLesSlugs.push(slug);
//         }

//         //Date de publications
//         for (var i = 0; i < tableauDeDonnees.length; i++) {
//             // Récupérer le titre de la première colonne de la ligne actuelle
//             var desc = tableauDeDonnees[i][8];
//             // Ajouter le titre au tableau de tous les titres
//             toutesLesDates.push(desc);
//         }
//         //Contenu d'articles
//         for (var i = 0; i < tableauDeDonnees.length; i++) {
//             // Récupérer le titre de la première colonne de la ligne actuelle
//             var desc = tableauDeDonnees[i][10][0].body;
//             // Ajouter le titre au tableau de tous les titres
//             toutesLesArticles.push(desc);
//         }
//         console.log('Les contenus des articles sont : ', toutesLesArticles)

//         //Cover d'articles
//         for (var i = 0; i < tableauDeDonnees.length; i++) {
//             // Récupérer le titre de la première colonne de la ligne actuelle
//             var desc = tableauDeDonnees[i][9].data.attributes.url;
//             // Ajouter le titre au tableau de tous les titres
//             var src = "https://backend.crfimmadagascar.org" + desc;
//             tousLesCovers.push(src);
//         }
//         console.log('Les covers des articles sont : ', tousLesCovers);
//         console.log('cover')


//         for (var i = 0; i < tableauDeDonnees.length; i++) {
//             article = {
//                 titre: tousLesTitres[i],
//                 description : toutesLesDescriptions[i],
//                 date : toutesLesDates[i],
//                 article : toutesLesArticles[i],
//                 slug : tousLesSlugs[i],
//                 cover : tousLesCovers[i],
//             };
//             articles[i + 1] = article;
//         }

//        console.log("Tous les articles formatés donnent : ",articles)
//        console.log(typeof(articles))
//        console.log(articles.length)
//        return(articles)
//     } else {
//         console.error("Les données retournées ne sont pas un objet ou ne contiennent pas de données.");
//     }

// }


const url: string = 'https://backend.crfimmadagascar.org/api/articles?populate=*';

async function getData(): Promise<any> {
    try {
        const resp = await fetch(url);
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
            const articleContent = tableauDeDonnees[i][10][0].body;
            toutesLesArticles.push(articleContent);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const coverUrl = tableauDeDonnees[i][9].data.attributes.url;
            const src = "https://backend.crfimmadagascar.org" + coverUrl;
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
