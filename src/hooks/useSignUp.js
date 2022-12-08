import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

export const useSignUp = () => {
    const navigate = useNavigate();
    const mutation = useMutation((user) => {
        return api.auth.signup(user);
    });

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
