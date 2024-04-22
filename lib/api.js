const url = 'https://backend.crfimmadagascar.org/api/articles?populate=*'


async function getData(){
    // const request = new Request(url,{
    //     headers : {
    //         [[PromiseResult]] : Object
    //         data[0].attributes.title
    //     }
    // })
    try{
        const resp = await fetch(url)
        const result = await resp.json()
        if (resp.status === 200){
            console.log('Success :',result)
        }
        return result
        
    } catch(error){
        console.log(`ERROR: ${error}`)
        return error
    }
    
}

var tableauDeDonnees = [];
var tousLesTitres = [];
var toutesLesDescriptions = [];
var toutesLesDates = [];
var toutesLesArticles = [];
var tousLesSlugs = [];
var tousLesCovers = [];

export async function DataToTable(){
    var elements = await getData();
    var articles = [];
    var article = {};
    if(typeof elements === 'object' && elements !== null && elements.data) {
        // Itérer directement sur elements.data
        elements.data.forEach(item => {
            // Traiter chaque élément et ajouter les attributs à tableauDeDonnees
            var objet = item.attributes;
            var ligne = [];
            for (var propriete in objet) {
                ligne.push(objet[propriete]);
            }
             // Vérifier si la ligne existe déjà dans le tableauDeDonnees
            var existingIndex = tableauDeDonnees.findIndex(existingLigne => {
                // Comparaison des lignes
                return JSON.stringify(existingLigne) === JSON.stringify(ligne);
            });

            if (existingIndex === -1) {
                // La ligne n'existe pas encore, l'ajouter à tableauDeDonnees
                tableauDeDonnees.push(ligne);
            }
        });
        
        console.log('Le tableau contenant les articles donne: ', tableauDeDonnees);
        // console.log(typeof(tableauDeDonnees))
        //console.log('le 1er articles est : ',tableauDeDonnees[0])

        //pour obtenir par exemple tous les titres :
        // Parcourir chaque ligne du tableau de données
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            // Récupérer le titre de la première colonne de la ligne actuelle
            var titre = tableauDeDonnees[i][0];
            // Ajouter le titre au tableau de tous les titres
            tousLesTitres.push(titre);
        }
        //console.log('Les titres des articles sont : ', tousLesTitres)

        //pour obtenir toutes les descriptions :
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            // Récupérer le titre de la première colonne de la ligne actuelle
            var desc = tableauDeDonnees[i][1];
            // Ajouter le titre au tableau de tous les titres
            toutesLesDescriptions.push(desc);
        }
        //console.log('Les descriptions des articles sont : ', toutesLesDescriptions)

        //pour obtenir les slugs :
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            // Récupérer le titre de la première colonne de la ligne actuelle
            var slug = tableauDeDonnees[i][2];
            // Ajouter le titre au tableau de tous les titres
            tousLesSlugs.push(slug);
        }

        //Date de publications
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            // Récupérer le titre de la première colonne de la ligne actuelle
            var desc = tableauDeDonnees[i][8];
            // Ajouter le titre au tableau de tous les titres
            toutesLesDates.push(desc);
        }
        //Contenu d'articles
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            // Récupérer le titre de la première colonne de la ligne actuelle
            var desc = tableauDeDonnees[i][10][0].body;
            // Ajouter le titre au tableau de tous les titres
            toutesLesArticles.push(desc);
        }
        console.log('Les contenus des articles sont : ', toutesLesArticles)

        //Cover d'articles
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            // Récupérer le titre de la première colonne de la ligne actuelle
            var desc = tableauDeDonnees[i][9].data.attributes.url;
            // Ajouter le titre au tableau de tous les titres
            var src = "https://backend.crfimmadagascar.org" + desc;
            tousLesCovers.push(src);
        }
        console.log('Les covers des articles sont : ', tousLesCovers);
        console.log('cover')

        //console.log('Les dates de publications des articles sont : ', toutesLesDates)
        //Contenu de l'articles
        // for (var i = 0; i < tableauDeDonnees.length; i++) {
        //     // Récupérer le titre de la première colonne de la ligne actuelle
        //     var desc = tableauDeDonnees[i][12];
        //     // Ajouter le titre au tableau de tous les titres
        //     toutesLesArticles.push(desc);
        // }
        // console.log('Les contenus des articles sont : ', toutesLesArticles)
        //construction du JSON

        // var FistArticle = {
        //     titre : tousLesTitres[0],
        //     description : toutesLesDescriptions[0],
        // }
        // console.log("Test du JSON pour le 1er article.")
        // console.log("Titre du 1er article : ", FistArticle.titre)
        // console.log("Description du 1er article : ", FistArticle.description)

        //créons un format de ce type : article[1].titre pour le Titre du 1er article au lieu de créer des Json pour chaque article


        for (var i = 0; i < tableauDeDonnees.length; i++) {
            article = {
                titre: tousLesTitres[i],
                description : toutesLesDescriptions[i],
                date : toutesLesDates[i],
                article : toutesLesArticles[i],
                slug : tousLesSlugs[i],
                cover : tousLesCovers[i],
            };
            articles[i + 1] = article;
        }

    //    console.log("Test du formatage .")
    //    console.log("Titre du 2e article : ", articles[2].titre)
    //    console.log("Description du 2e article : ", articles[2].description)
    //     console.log("Date de publication du 2e article : ", articles[2].date)
       console.log("Tous les articles formatés donnent : ",articles)
       console.log(typeof(articles))
       console.log(articles.length)
       return(articles)
    } else {
        console.error("Les données retournées ne sont pas un objet ou ne contiennent pas de données.");
    }

}


