import LoginForm from '../../components/LoginForm';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <LoginForm />
            <p>Nie masz jeszcze konta? <Link to={'/auth/register'}>Zarejestruj się</Link></p>

        </>
    )
}
