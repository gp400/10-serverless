import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {

  console.log('Hola Mundo desde Hello Handler');

  return new Response("Hola Mundo", {
    headers: {
        'Content-Type': 'application/json'
    }
  })
}