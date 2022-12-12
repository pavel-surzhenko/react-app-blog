// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// hooks
import { useSignUp } from '../../../hooks';

// other
import { schema } from './config';
import { Input } from '../elements/input';

export const SignUpForm = () => {
    const signUp = useSignUp();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (data) => {
        const { confirmPassword, ...newUser } = data;
        await signUp.mutateAsync(newUser);
        form.reset();
    });

    return (
        <form onSubmit = { onSubmit } className = 'form centered'>
            <div className = 'wrapper centered'>
                <div className = 'logo'></div>
                <div>
                    <div>
                        <Input
                            placeholder = 'Name'
                            error = { form.formState.errors.name }
                            register = { form.register('name') } />
                        <Input
                            placeholder = 'Email' type = 'email'
                            error = { form.formState.errors.email }
                            register = { form.register('email') } />
                        <Input
                            placeholder = 'Password' type = 'password'
                            error = { form.formState.errors.password }
                            register = { form.register('password') } />
                        <Input
                            placeholder = 'Password' type = 'password'
                            error = { form.formState.errors.confirmPassword }
                            register = { form.register('confirmPassword') } />
                        <button
                            className = 'signupSubmit' type = 'submit'>Create account</button>
                    </div>
                </div>
                <p className = 'options'>Have account?<Link to = '/login'>Log in</Link></p>
            </div>
        </form>
    );
};
