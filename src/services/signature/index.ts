export const add_signature = async (idClient: any) => {
    try {
        const res = await fetch(`http://localhost:8000/api/signature/client/${idClient}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in add_client (service) => ', error);
    }
}

export const get_signature = async ({ idClient, secretClient }: any) => {
    try {
        const res = await fetch(`http://localhost:8000/api/createSignature`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: idClient, secret: secretClient }),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in add_client (service) => ', error);
    }
}
