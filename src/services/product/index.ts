export const get_product_by_category = async (id:number,tiki_best:number,genuine:number) => {
    try {
        const res = await fetch(`http://localhost:8000/api/categorys/search/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"tiki_best": tiki_best, "genuine": genuine}),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in login (service) => ', error);
    }
}

export const get_product_by_id = async (id:number) => {
    try {
        const res = await fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in login (service) => ', error);
    }
}


export const get_products = async (pageurl:number) => {
    try {
        const res = await fetch(pageurl === 1 ? `http://localhost:8000/api/products` : `http://localhost:8000/api/products?page=${pageurl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({"paginate": paginate}),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in login (service) => ', error);
    }
}
