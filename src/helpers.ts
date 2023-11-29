import axios from 'axios';

export const noAuthRequest = (path: string, data: unknown ) => {
    axios.post(`${import.meta.env.VITE_API_URL}${path}`, data)
        .then(res => {
            return res;
        })
        .catch((error) => {
            console.error(error);
        })
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
