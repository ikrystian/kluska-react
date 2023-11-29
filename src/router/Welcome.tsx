import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <>
            <nav>
                <Link to={'/auth/login'}>Log in</Link>
                <Link to={'/auth/register'}>Register</Link>
            </nav>
        </>
    );
}
