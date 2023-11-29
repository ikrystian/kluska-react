import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Welcome from './router/Welcome.tsx';
import ErrorPage from './error-page.tsx';
import Auth from './router/auth/Auth.tsx';
import Login from './router/auth/Login.tsx';
import Register from './router/auth/Register.tsx';
import { isLoggedIn } from './router/auth/AuthSignal.ts';
import Home from './router/home/Home';
import Dashboard from './router/home/Dashboard.tsx';
import React from 'react';

const ProtectedRoute = ({children}: { children: React.ReactNode }) => {

    if (!isLoggedIn.value) {
        return <Navigate to="/auth/login" state={{from: 'dashboard'}} replace/>;
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
                    element: <Dashboard/>
                }
            ]
        }
    ]);

    return (
        <>
            {/* all the other elements */}
            <div className="h-[100dvh] bg-[#1A1B1F]">
                <RouterProvider router={router}/>
            </div>
        </>
    );
}
