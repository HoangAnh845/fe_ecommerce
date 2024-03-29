import { json } from "stream/consumers";
import Cookies from 'js-cookie';

export const get_all_clients = async () => {
    try {
        const res = await fetch(`http://localhost:8000/api/clients`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`,
            },
        })
        const data = res.json();

        return data;
    } catch (error) {
        console.log('error in get_all_clients (service) => ', error);
    }
}

export const get_client = async (idClient: any) => {
    try {
        const res = await fetch(`http://localhost:8000/api/clients/${idClient}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${Cookies.get('token')}`,
            },
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in get_all_clients (service) => ', error);
    }
}

export const add_client = async (formData: any) => {
    console.log('--- formData ---', formData);

    try {
        const res = await fetch(`http://localhost:8000/api/client/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();

        return data;
    } catch (error) {
        console.log('error in add_client (service) => ', error);
    }
}

export const update_client = async (formData: any) => {
    
    try {
        const res = await fetch(`http://localhost:8000/api/clients/edit/${formData['idClient']}`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in delete_client (service) => ', error);
    }
}


export const delete_client = async (idClient: any) => {
    try {
        const res = await fetch(`http://localhost:8000/api/clients/delete/${idClient}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: idClient }),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in delete_client (service) => ', error);
    }
}