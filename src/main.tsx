import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import ErrorPage from './error-page';
import Welcome from './router/Welcome';
import Auth from './router/auth/Auth';
import Login from './router/auth/Login';
import Register from './router/auth/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/auth',
        element: <Auth />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
