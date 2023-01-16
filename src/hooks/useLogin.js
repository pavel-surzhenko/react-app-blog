import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials) => {
        return api.auth.login(credentials);
    }, {
        onError(error) {
            const { response } = error;

            if (response?.status === 401) {
                dispatch(authActions.setError('Invalid login or password'));
            } else {
                dispatch(authActions.setError('request error'));
            }
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const data = mutation.data?.data;
            dispatch(authActions.setToken(data));
            localStorage.setItem('token', data);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
