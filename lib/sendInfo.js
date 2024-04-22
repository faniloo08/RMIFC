
export const sendInfo = async (nom, prenom, email, motdepasse, fonction, message, Photos) => {
    try {
        const response = await fetch('https://backend.crfimmadagascar.org/api/info-externes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {
                    nom: nom,
                    prenom: prenom,
                    email: email,
                    motdepasse: motdepasse,
                    fonction: fonction,
                    message: message,
                    Photos: Photos
                }
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};