export const login_me = async (formData: any) => {
    try {
        const res = await fetch(`http://localhost:8000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in login (service) => ', error);
    }
}

export const logout_me = async (token: any) => {
    try {
        const res = await fetch(`http://localhost:8000/api/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(token),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in logout (service) => ', error);
    }
}

