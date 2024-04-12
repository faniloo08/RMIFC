export default function ImgURI_Strapi(uri) {
    return (process.env.NEXT_PUBLIC_STRAPI_API_URL + uri).toString();
}
  