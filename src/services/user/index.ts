import axios from 'axios';
import { json } from 'stream/consumers';

export const user_profile = async (token: string) => {
    try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // dùng để set header cho axios
        const res = await axios.get(`http://localhost:8000/api/user/token`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error);
            });
        return JSON.stringify(res.data);
    } catch (error) {
        console.log('error in login (service) => ', error);
    }
}

export const get_all_users = async (clientId:String,signature:String, timestamp:String) => {
    
    const res = await axios.get('http://localhost:8000/api/users', {
        headers: {
            'X-Client-Id': String(clientId),
            'X-Signature': String(signature),
            'X-Timestamp': String(timestamp)
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log("error____",error);
        });
        
    return JSON.stringify(res);
}