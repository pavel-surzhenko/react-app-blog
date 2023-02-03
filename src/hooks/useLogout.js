import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';

export function useLogOut() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation(() => api.auth.logout(), {
        onError: (error) => {
            dispatch(authActions.setError(error?.message));
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [mutation.isSuccess]);

    return mutation;
}

