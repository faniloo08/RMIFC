    // import * from 'next/headers'
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    const res = await fetch('http://localhost:1337//api/articles', {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY || '',
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }