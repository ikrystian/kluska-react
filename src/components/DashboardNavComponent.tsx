import { token } from '../router/auth/AuthSignal.ts';
import { Navigate } from 'react-router-dom';

const DashboardNavComponent = () => {
    const logOut = () => {
        token.value = '';
        localStorage.removeItem('token');
        return <Navigate to="/auth/login" replace/>;
    }

    return (
        <>
            <button onClick={logOut} className={'inline-flex py-2 px-3 text-white'}>Log out</button>
        </>
    )
}
export default DashboardNavComponent;
