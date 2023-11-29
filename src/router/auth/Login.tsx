import LoginForm from '../../components/LoginForm';
import { Link } from 'react-router-dom';

export default function Login() {

    return (
        <div className="px-3">
            <LoginForm/>
            <p className="text-center text-blue-50">
                <span className={'block'}>Nie chcesz dalej być leniwa kluska? </span>
                <Link to={'/auth/register'} className={'text-blue-50 underline'}>Zarejestruj się !</Link>
            </p>

        </div>
    )
}
