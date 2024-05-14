export const registerUser = async (username, email, nom, prenom,  password) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/utilisateurs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {
                    username: username,
                    email: email,
                    nom: nom,
                    prenom: prenom,
                    password: password,
                }
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to subscribe the new account');
        }

        console.log('Subscription done successfully');
    } catch (error) {
        console.error('Error creating the new user:', error);
        throw error;
    }
};