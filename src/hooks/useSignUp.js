import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';

export const useSignUp = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const mutation = useMutation((user) => {
        return api.auth.signup(user);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const token = mutation.data?.data;
            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
