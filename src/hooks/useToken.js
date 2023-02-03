import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';

export const useToken = () => {
    const query = useQuery('token', api.auth.auth, {
        retry: false,
    });

    const { data, error } = query;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (data && data.status === 'success') {
            dispatch(authActions.setToken(data));
        }
    }, [data]);

    useEffect(() => {
        if (error?.message) {
            dispatch(authActions.setError(error.message));
            navigate('/login');
        }
    }, [error]);
};
