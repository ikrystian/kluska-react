import RegisterForm from '../../components/RegisterForm';
import { Link } from 'react-router-dom';


export default function Register() {
    return (
        <div className="px-3">
            <RegisterForm/>
            <p className="text-center text-blue-50 flex gap-2 justify-center">
                <span>Masz już konto? </span>
                <Link to={'/auth/login'}>Zaloguj się</Link>
            </p>
        </div>
    )
}
