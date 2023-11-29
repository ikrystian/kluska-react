import { token } from '../router/auth/AuthSignal.ts';

const DashboardNavComponent = () => {
    const logOut = () => {
        token.value = '';
        localStorage.removeItem('token');
    }

    return (
        <nav className={'flex justify-end h-auto'}>
            <button onClick={logOut} className={'block py-2 px-3 text-white'}>Log out</button>
        </nav>
    )
}
export default DashboardNavComponent;
