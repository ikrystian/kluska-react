import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './router/Welcome.tsx';
import ErrorPage from './error-page.tsx';
import Auth from './router/auth/Auth.tsx';
import Login from './router/auth/Login.tsx';
import Register from './router/auth/Register.tsx';

export default function App() {
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

    return (
        <>
            {/* all the other elements */}
            <div id="auth" className="h-[100dvh] bg-[#1A1B1F]">
                <RouterProvider router={router} />
            </div>
        </>
    );
}
