import { Link, Outlet } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from 'react';
import { AccountCircle, Logout } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { snackBar, token } from '../auth/AuthSignal.ts';
import { getRequest } from '../../helpers.ts';


export default function Home() {

    interface User {
        id: string;
        name: string;
        email: string;
    }

    function stringAvatar(name: string) {
        return {
            sx: {
                bgcolor: '#090909',
            },
            children: `${name[0]}`,
        };
    }

    const [user, setUser] = useState<User | null>(null);

    const logout = () => {
        token.value = '';
        localStorage.removeItem('token');
        snackBar.value = {'message': 'Logged out', 'status': true};
    }

    useEffect(() => {
        getRequest('auth/user').then(res => {
            setUser(res)
        })
    }, []);

    return (
        <>
            <div id="home" className="h-[100dvh] bg-[#1A1B1F] flex flex-col">
                <Outlet/>
                <nav className={'flex items-center gap-2 py-1 px-2'}>
                    <div className={'flex flex-1 items-center'}>
                        <div className={'flex justify-center items-center w-12 h-12 bg-black rounded-full'}>
                            {user && <Avatar  {...stringAvatar(user.name)} />}
                        </div>
                        <Link to={'/home/dashboard'} className={'w-12 h-12 flex items-center justify-center'}>
                            <HomeIcon color="primary"/>
                        </Link>
                        <Link to={'/home/profile-gallery'} className={'w-12 h-12 flex items-center justify-center'}>
                            <AccountCircle color="primary"/>
                        </Link>
                    </div>
                    <div>
                        <IconButton onClick={logout}>
                            <Logout color="info"/>
                        </IconButton>
                    </div>
                </nav>
            </div>
        </>
    );
}
