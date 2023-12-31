import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Welcome from './router/Welcome.tsx';
import ErrorPage from './error-page.tsx';
import Auth from './router/auth/Auth.tsx';
import Login from './router/auth/Login.tsx';
import Register from './router/auth/Register.tsx';
import { isLoggedIn, snackBar } from './router/auth/AuthSignal.ts';
import Home from './router/home/Home';
import Dashboard from './router/home/Dashboard.tsx';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ProfileGallery from './router/home/ProfileGallery.tsx';
import BlankDashboard from './router/home/BlankDashboard.tsx';
import Summary from './router/home/Summary.tsx';
import Archive from './router/home/Archive.tsx';

const ProtectedRoute = ({children}: { children: React.ReactNode }) => {

    if (!isLoggedIn.value) {
        return <Navigate to="/auth/login" replace/>;
    }
    return children;
};

const GuestRoute = ({children}: { children: React.ReactNode }) => {
    if (isLoggedIn.value) {
        return <Navigate to="/home/dashboard" replace/>;
    }
    return children;
};

export default function App() {
    const handleClose = () => {
        snackBar.value = {"message": "", "status": false};
    };


    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="primary"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </>
    );

    const router = createBrowserRouter([
        {
            path: '/',
            element: <GuestRoute><Welcome/></GuestRoute>,
            errorElement: <ErrorPage/>,
        },
        {
            path: '/auth',
            element: <GuestRoute><Auth/></GuestRoute>,
            children: [
                {
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'register',
                    element: <Register/>
                }
            ]
        },
        {
            path: '/home',
            element: <ProtectedRoute><Home/></ProtectedRoute>,
            children: [
                {
                    path: 'dashboard',
                    element: <Dashboard/>,
                    children: [
                        {
                            path: '',
                            element: <BlankDashboard />
                        },
                        {
                            path: 'summary',
                            element: <Summary />
                        },
                        {
                            path: 'archive',
                            element: <Archive />
                        }
                    ]
                },
                {
                    path: 'profile-gallery',
                    element: <ProfileGallery />
                }
            ]
        }
    ]);

    return (
        <>
            <div className="min-h-[100dvh] bg-[#1A1B1F]">
                <RouterProvider router={router}/>
                <Snackbar
                    open={snackBar.value.status}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={snackBar.value.message}
                    action={action}
                />
            </div>
        </>
    );
}
