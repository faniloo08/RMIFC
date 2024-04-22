const url = 'https://backend.crfimmadagascar.org/api/pages?populate=*'


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
var tousLesContenus = [];

export async function DataToTable(){
    var elements = await getData();
    var pages = [];
    var page = {};
    if(typeof elements === 'object' && elements !== null && elements.data) {
        // Itérer directement sur elements.data
        elements.data.forEach(item => {
            // Traiter chaque élément et ajouter les attributs à tableauDeDonnees
            var objet = item.attributes;
            var ligne = [];
            for (var propriete in objet) {
                ligne.push(objet[propriete]);
            }
            tableauDeDonnees.push(ligne);
        });
        // console.log('Le tableau contenant les contenus donne: ', tableauDeDonnees);
        // console.log(typeof(tableauDeDonnees))
        //console.log('le 1er contenus est : ',tableauDeDonnees[0])

        //pour obtenir par exemple tous les titres :
        // Parcourir chaque ligne du tableau de données
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            // Récupérer le titre de la première colonne de la ligne actuelle
            var titre = tableauDeDonnees[i][0];
            // Ajouter le titre au tableau de tous les titres
            tousLesTitres.push(titre);
        }
        //console.log('Les titres des contenus sont : ', tousLesTitres)

        //Contenu d'contenus
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            // Récupérer le titre de la première colonne de la ligne actuelle
            var content = tableauDeDonnees[i][1];
            // Ajouter le titre au tableau de tous les titres
            tousLesContenus.push(content);
        }
        console.log('Les contenus des contenus sont : ',tousLesContenus)

        
        for (var i = 0; i < tableauDeDonnees.length; i++) {
            page = {
                titre: tousLesTitres[i],
                contenu :tousLesContenus[i],
            };
            pages[i + 1] = page;
        }

    //    console.log("Test du formatage .")
    //    console.log("Titre du 2e contenu : ", contenus[2].titre)
    //    console.log("contenuription du 2e contenu : ", contenus[2].contenuription)
    //     console.log("Date de publication du 2e contenu : ", contenus[2].date)
       console.log("Tous les contenus formatés donnent : ",pages)
       console.log(typeof(pages))
       return(pages)
    } else {
        console.error("Les données retournées ne sont pas un objet ou ne contiennent pas de données.");
    }

}


