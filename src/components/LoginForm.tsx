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

        axios.post(`${import.meta.env.VITE_API_KEY}auth/signin`, user, {
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
                    console.error(error)
                }
            })
    }
    return (
        <form onSubmit={login}>
            <div className={'flex flex-col mb-2'}>
                <label htmlFor="email" className={'text-white mb-1'}>E-mail</label>
                <input type="email" id="email" name="email" value={email} className="email py-1 px-3 outline"
                       onChange={(event) => setEmail(event.target.value)} required/>
            </div>
            <div className={'flex flex-col mb-5'}>
                <label htmlFor="password" className={'text-white mb-1'}>Password</label>
                <input type="passowrd" id="password" name="password" value={password} className="password  py-1 px-3 outline"
                       onChange={(event) => setPassword(event.target.value)} required/>
            </div>
            <button type="submit" className={'block w-full p-2 bg-blue-950 mb-5 text-white'}>Log in</button>
        </form>
    );
}
