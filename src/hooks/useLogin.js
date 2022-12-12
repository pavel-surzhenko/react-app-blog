import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

export const useLogin = () => {
    const navigate = useNavigate();
    const mutation = useMutation((credentials) => {
        return api.auth.login(credentials);
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
