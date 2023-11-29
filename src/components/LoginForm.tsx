import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import axios from 'axios';
import { token } from '../router/auth/AuthSignal.ts';

class FromData {
}

export default function LoginForm() {

    type FormData = {
        email: string;
        password: string;
    }

    const schema = yup
        .object()
        .shape(
            {
                email: yup.string().email().required(),
                password: yup.string().required(),
            }
        )
        .required()

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FromData) => {
        axios.post(`${import.meta.env.VITE_API_URL}auth/signin`, data, {
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.access_token);
                    token.value = res.data.access_token;
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'flex flex-col gap-2 mb-5'}>
                <TextField type="email" {...register('email')} error={Boolean(errors.email)}
                           helperText={errors.email && errors.email.message} id="email" label="E-mail"
                           variant="outlined"/>
            </div>
            <div className={'flex flex-col gap-2 mb-2'}>
                <TextField type="password" {...register('password')} error={Boolean(errors.password)}
                           helperText={errors.password && errors.password.message} id="password" label="Password"
                           variant="outlined"/>
            </div>
            <button type="submit" className={'block w-full p-2 bg-blue-950 mb-5 text-white'}>Log in</button>
        </form>
    );
}
