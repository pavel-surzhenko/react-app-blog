// core
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// hooks
import { useProfile, useUpdateProfile } from '../../hooks';
import { Input } from '../forms/elements/input';

// other
import { schema }  from './config';

export const Profile = () => {
    const profile = useProfile();
    const updateProfile = useUpdateProfile();
    const [name, setName] = useState();

    useEffect(() => {
        if (profile.isFetched) {
            setName(profile.data?.name);
        }
    }, [profile]);

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (profileInfo) => {
        await updateProfile.mutateAsync(profileInfo);
        profile.refetch();
        form.reset();
    });

    return (
        <form onSubmit = { onSubmit } className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>{ `Hi, ${name}` }</h1>
                    <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar' />
                    <Input
                        placeholder = 'Name' type = 'text'
                        error = { form.formState.errors.firstName }
                        register = { form.register('firstName') } />
                    <Input
                        placeholder = 'Last name' type = 'text'
                        error = { form.formState.errors.lastName }
                        register = { form.register('lastName') } />
                    <button className = 'loginSubmit' type = 'submit'>Update profile</button>
                </div>
                <a href = '#'>Change password</a>
            </div>
        </form>
    );
};
