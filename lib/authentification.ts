//import { NextResponse, NextRequest } from 'next/server';
// import {middleware} from '@/app/middleware';

export const authHandler = async (usernameOrEmail: string, password: string) => {
  try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/utilisateurs?filters[username][$eq]=${usernameOrEmail}`);
      if (response.ok) {
          const userData = await response.json();
          if (userData) {
              const user = userData.data[0].attributes;
              if (user.password === password) {
                  alert("Connexion réussie !");
                  return true;
              } else {
                  alert('Veuillez vérifier le mot de passe.');
                  return false;
              }
          } else {
              alert("Nom d'utilisateur ou mot de passe incorrect.");
              return false;
          }
      } else {
          alert("Une erreur s'est produite lors de l'appel à l'API.");
          return false;
      }
  } catch (error) {
      console.error("Error logging in:", error);
      return false;
  }
};
// // Interface personnalisée étendant NextApiRequest et ajoutant les propriétés manquantes
// interface CustomNextRequest extends NextApiRequest {
//     geo: any;
//     nextUrl: string;
//     page: any;
//     ua: string;
//   }
  
//   // Fonction pour adapter la requête
//   const adaptRequest = (req: NextApiRequest): CustomNextRequest => {
//     // Ici, tu peux initialiser les propriétés manquantes ou les définir à des valeurs par défaut
//     return {
//       ...req,
//       geo: {}, // Initialise geo à un objet vide
//       nextUrl: '', // Initialise nextUrl à une chaîne vide
//       page: {}, // Initialise page à un objet vide
//       ua: '', // Initialise ua à une chaîne vide
//     };
//   };
  

// export default async function authHandler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Appel de la fonction middleware pour gérer la connexion
//     const adaptedRequest = adaptRequest(req);
 
//     // Appel de la fonction middleware pour gérer la connexion
//     const middlewareResponse = await middleware(adaptedRequest);
//     if (middlewareResponse instanceof Response) {
//       // Si la fonction middleware renvoie une réponse, envoyer cette réponse au client
//       res.status(middlewareResponse.status).send(middlewareResponse.body);
//     } else {
//       // Sinon, envoyer une réponse indiquant une erreur interne du serveur
//       res.status(500).send('Internal server error');
//     }
//   } catch (error) {
//     console.error('Error handling authentication:', error);
//     res.status(500).send('Internal server error');
//   }
// }