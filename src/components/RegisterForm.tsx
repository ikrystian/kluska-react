import {  useForm } from 'react-hook-form';
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

    const { register, handleSubmit ,  formState: {errors}} = useForm<Inputs>({
        resolver: yupResolver(schema), // yup, joi and even your own.
    })


    const onSubmit =  (data: Inputs) => {
        console.log(data);
    }

    return (
        <>
            <form className="py-3" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>Name</label>
                <input {...register("name", {required: "Please enter your first name.",})}  />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label>E-mail</label>
                    <input {...register("email")}  />
                </div>
                <div>
                    <label>Password</label>
                    <input {...register("password")}  />
                </div>
                <div>
                    <label>Password</label>
                    <input {...register("password_confirmation")}  />
                </div>
                <button type={'submit'}>Register</button>
            </form>
        </>
    )
}
