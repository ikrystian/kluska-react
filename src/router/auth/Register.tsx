import RegisterForm from '../../components/RegisterForm';
import { Link } from 'react-router-dom';


export default function Register() {
    return (
        <>
            <RegisterForm />
            <p>Masz już konto? <Link to={'/auth/login'}>Zaloguj się</Link></p>
        </>
    )
}
