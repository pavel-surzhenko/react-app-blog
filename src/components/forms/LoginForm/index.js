/* eslint-disable react/no-unescaped-entities */
// core
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { Input } from '../elements/input';

// other
import { schema } from './config';
import { useLogin } from '../../../hooks';

export const LoginForm = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (credentials) => {
        await login.mutateAsync(credentials);
        form.reset();
    });

    return (
        <form onSubmit = { onSubmit } className = 'form centered'>
            <div className = 'wrapper centered'>
                <div className = 'logo'></div>
                <div>
                    <Input
                        placeholder = 'Email' type = 'email'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        placeholder = 'Password' type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    <button
                        className = 'loginSubmit'
                        type = 'submit'>Войти</button>
                </div>
                <p className = 'options'>Don't have an account? <Link to = '/signup'>Sign up</Link></p>
            </div>
        </form>
    );
};
