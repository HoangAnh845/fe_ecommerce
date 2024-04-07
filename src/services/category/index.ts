export const get_all_category = async (id:number) => {
    try {
        const res = await fetch(`http://localhost:8000/api/categorys/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in login (service) => ', error);
    }
}
