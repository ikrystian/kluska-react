import axios from 'axios';

export const  noAuthRequest = async (path: string, data: unknown ) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`, {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });

    return response.json();
}

export const request = (path: string, data: unknown) => {
    axios.post(`${import.meta.env.VITE_API_URL}${path}`, data, {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    })
        .then(res => {
            return res;
        })
        .catch((error) => {
            console.error(error);
        })
}

export const getRequest = async (path: string) => {
    const config = {
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    };
    const respoonse = await fetch(`${import.meta.env.VITE_API_URL}${path}`, config);
    return await respoonse.json();
}

