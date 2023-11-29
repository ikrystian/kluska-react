import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function RegisterForm() {

    type Inputs = {
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }

    const schema = yup
        .object()
        .shape(
            {
                name: yup.string().required(),
                email: yup.string().email().required(),
                password: yup.string().required(),
                password_confirmation: yup.string().required().oneOf([yup.ref('password')], 'Passwords doesnt match')
            }
        )
        .required()

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({
        resolver: yupResolver(schema), // yup, joi and even your own.
    })


    const onSubmit = (data: Inputs) => {
        console.log(data);
    }

    return (
        <>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className={'flex flex-col gap-2'}>
                    <label className={'text-white'}>Name</label>
                    <input
                        className={'py-1 px-3 outline'} {...register('name')}  />
                        {errors.name && <p className={'text-red-500 text-xs'}>{errors.name.message}</p>}
                </div>
                <div className={'flex flex-col gap-2 mt-2'}>
                    <label className={'text-white'}>E-mail</label>
                    <input  className={'py-1 px-3 outline'} {...register('email')}  />
                    {errors.email && <p className={'text-red-500 text-xs'}>{errors.email.message}</p>}
                </div>
                <div className={'flex flex-col gap-2 mt-2'}>
                    <label className={'text-white'}>Password</label>
                    <input className={'py-1 px-3 outline'} {...register('password')}  />
                    {errors.password && <p className={'text-red-500 text-xs'}>{errors.password.message}</p>}
                </div>
                <div className={'flex flex-col gap-2 mt-2'}>
                    <label className={'text-white'}>Re-password</label>
                    <input className={'py-1 px-3 outline'} {...register('password_confirmation')}  />
                    {errors.password_confirmation && <p className={'text-red-500 text-xs'}>{errors.password_confirmation.message}</p>}
                </div>
                <button type={'submit'} className={'block w-full p-2 bg-blue-950 mb-5 mt-5 text-white'}>Register</button>
            </form>
        </>
    )
}
