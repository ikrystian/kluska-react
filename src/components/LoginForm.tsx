import React from 'react';
import axios from 'axios';
import { signal } from "@preact/signals-core";

export default function LoginForm() {
    const email = signal('');
    const password = signal('');

    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const user = {
            email: email.value,
            password: password.value
        }

        axios.post(`${import.meta.env.VITE_API_URL}auth/signin`, user, {
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
                } else if (error.response.status === 422) {
                    alert(error.response.data.password[0])
                } else {
                    console.error(error)
                }
            })
    }
    return (
        <form onSubmit={login}>
            <div className={'flex flex-col mb-2'}>
                <label htmlFor="email" className={'text-white mb-1'}>E-mail</label>
                <input type="email" id="email" name="email"
                       onChange={(event) => {
                           email.value = event.target.value;
                       }}
                       className="email py-1 px-3 outline" required/>
            </div>
            <div className={'flex flex-col mb-5'}>
                <label htmlFor="password" className={'text-white mb-1'}>Password</label>
                <input type="password" id="password" name="password" className="password  py-1 px-3 outline"
                       onChange={(event) => {
                           password.value = event.target.value;
                       }}
                       required/>
            </div>
            <button type="submit" className={'block w-full p-2 bg-blue-950 mb-5 text-white'}>Log in</button>
        </form>
    );
}
