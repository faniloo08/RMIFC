import { NextResponse, NextRequest } from "next/server";

// Middleware pour gérer la connexion
export async function middleware(request: NextRequest) {
  // Vérifier si les données de connexion sont présentes dans la requête
  const { usernameOrEmail, password } = await request.json();

  // Faire une requête à Strapi pour vérifier l'existence de l'utilisateur
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/utilisateurs?filters[username][$eq]=${usernameOrEmail}`);

  if (response.ok) {
    const userData = await response.json();
    if (userData.length === 1) {
      // Utilisateur trouvé, vérifier le mot de passe
      const user = userData[0].attributes;
      if (user.password === password) {
        // Mot de passe correct, autoriser la connexion
        return NextResponse.redirect("/");
      }
    }
  }

  // Si l'utilisateur n'est pas trouvé ou le mot de passe est incorrect, renvoyer un message d'erreur
  return new Response("Nom d'utilisateur ou mot de passe incorrect.", { status: 401 });
}
// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//     locales: ['en', 'fr'],
//     defaultLocale: 'fr'
// });

// export const config = {
//     matcher: ['/((?!api|_next|.*\\..*).*)'],
// };
