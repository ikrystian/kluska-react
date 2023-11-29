import LoginForm from '../../components/LoginForm';
import { Link, useLocation } from 'react-router-dom';

export default function Login() {
    const origin = useLocation().state?.from;

    return (
        <div className="px-3">
            {origin === 'dashboard' &&
                <div role={'alert'} className={'mb-3 text-center text-white'}>See U soon!</div>
            }
            <LoginForm/>
            <p className="text-center text-blue-50">
                <span className={'block'}>Nie chcesz dalej być leniwa kluska? </span>
                <Link to={'/auth/register'} className={'text-blue-50 underline'}>Zarejestruj się !</Link>
            </p>

        </div>
    )
}
