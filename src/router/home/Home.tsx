import { Link, Outlet } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AccountCircle } from '@mui/icons-material';


export default function Home() {

    interface User {
        id: string;
        name: string;
        email: string;
    }

    function stringAvatar(name: string) {
        if(!name) return;
        return {
            sx: {
                bgcolor: '#090909',
            },
            children: `${name[0]}`,
        };
    }

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
        <>
            <div id="home"  className="h-[100dvh] bg-[#1A1B1F] flex flex-col ">
                <Outlet/>
                <nav className={'flex items-center gap-2 py-1 px-2'}>
                    {user && <Avatar  {...stringAvatar(user.name)} /> }
                    <Link to={'/home/dashboard'} className={'w-12 h-12 flex items-center justify-center'}>
                        <HomeIcon color="primary"/>
                    </Link>
                    <Link to={'/home/profile-gallery'} className={'w-12 h-12 flex items-center justify-center'}>
                        <AccountCircle color="primary"/>
                    </Link>
                </nav>
            </div>
        </>
    );
}
