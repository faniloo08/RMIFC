///app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
//this API is used to take all the posts files,using their slugs and the markdown files

//fs = module qui permet un accès R/W des fichiers du seveur
import fs from 'fs'
// join = méthode de path et est utilisée pour joindre plusieurs parties de chemins d'accès en un seul chemin d'accès normalisé
import { join } from 'path'
// matter extrait le front matter (méta-données) et le contenu du fichier markdown, le rendant facilement accessible pour le traitement ultérieur.
import matter from 'gray-matter'
//gestion d'erreur
import { loadDefaultErrorComponents } from 'next/dist/server/load-components'
//définit le "Current Work Directory" par "posts",et stock ce chemin dans postsDirectory 
const postsDirectory = join(process.cwd(), 'posts')

//fonction à exporter qui renverra un tableau contenant les noms de tous les fichiers et sous-répertoires présents dans le répertoire spécifié par postsDirectory
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

//récupération des contenus
export function getPostBySlug(slug, fields = []) {

  //enlever les extensions
  const realSlug = slug.replace(/\.md$/, '')
  //cibler le contenu du tableau
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  //lecture du fichier
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  //déstructuration d'objet pour séparer les méta-données et les contenus réels 
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => { 
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

//pour avoir tous les posts
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    //crée un tableau "posts" qui recoit les resultats des traitement de la variable "slugs" après un traitement de la fonction getPostBySlug(slug, fields)

  return posts
}


// Get Markdown File Content 

export function getFileContentBySlug(fileName, postsPath) {

    const postFilePath = join(postsPath, `${fileName}.md`)
    const fileContents = fs.readFileSync(postFilePath, 'utf8')

    const { data, content } = matter(fileContents)

    return {
      data,
      content
    }
}