import DashboardNavComponent from '../../components/DashboardNavComponent.tsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
}

export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const config = {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        };
        axios.get(`${import.meta.env.VITE_API_URL}auth/user`, config).then(res => {
            setUser(res.data)
        })
    }, []);

    return (
        <main className={'h-[100dvh] flex flex-col'}>
            <div className={'px-3 flex-1'}>
                <h2 className={'text-white'}>Witaj <strong>{user && user.name}</strong></h2>
            </div>
            <div>
                <DashboardNavComponent/>
            </div>
        </main>
    )
}
