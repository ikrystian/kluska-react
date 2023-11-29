import { token } from '../router/auth/AuthSignal.ts';

const DashboardNavComponent = () => {
    const logOut = () => {
        token.value = '';
        localStorage.removeItem('token');
    }

    return (
        <>
            <button onClick={logOut} className={'inline-flex py-2 px-3 text-white'}>Log out</button>
        </>
    )
}
export default DashboardNavComponent;
