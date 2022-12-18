import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useStore } from './useStore';

export const useLogin = () => {
    const { authStore, uiStore } = useStore();
    const { setError } = uiStore;
    const navigate = useNavigate();
    const mutation = useMutation((credentials) => {
        return api.auth.login(credentials);
    }, {
        onError(error) {
            setError(error?.response?.data?.message);
        },
    });

    useEffect(() => {
        const token = mutation.data?.data;

        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            authStore.setToken(token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
