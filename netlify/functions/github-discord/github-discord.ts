import type { Context } from "@netlify/functions";

const notity = async( message: string ) => {

    const body = {content: message}

    const resp = await fetch( process.env.DISCORD_WEBHOOK_URL ?? '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( body )
    });

    if ( !resp.ok ){
        console.log("Error sending message to discord")
        return false;
    }

    return true;
}

export default async (req: Request, context: Context) => {

    await notity('Hola Mundo desde Netlify Dev');

    return new Response("Done", {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}