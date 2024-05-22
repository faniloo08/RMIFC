//import {sendMail} from './mailService'

export const messageFonc = async (nom, email, topic , message) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {
                    nom: nom,
                    email: email,
                    topic: topic,
                    message: message
                }
            }),
        });
        //Traitement d'envoie


        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};