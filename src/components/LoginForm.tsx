import React, { useState } from 'react';

import axios from 'axios';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const user = {
            email,
            password
        }
        axios.post('https://kluska.archcode.rs/api/public/api/auth/signin', user, {
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => {
                if (res.status === 200) {
                    const token = res.data.access_token;
                    localStorage.setItem('token', token);
                    alert(`Loggedn, your token is ${token}`)
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert('Unauthorized');
                } else {
                    console.info(error)
                }
            })
    }
    return (
        <form onSubmit={login}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" value={email} className="email"
                       onChange={(event) => setEmail(event.target.value)} required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="passowrd" id="password" name="password" value={password} className="password"
                       onChange={(event) => setPassword(event.target.value)} required/>
            </div>
            <button type="submit" className={'inline-flex p-2'}>Log in</button>
        </form>
    );
}
