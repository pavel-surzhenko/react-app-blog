import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';

export const useToken = () => {
    const query = useQuery('token', api.auth.auth);
    const { data, error } = query;
    const dispatch = useDispatch();

    useEffect(() => {
        if (data && data.status === 'success') {
            dispatch(authActions.setToken(data));
        }
    }, [data]);

    useEffect(() => {
        if (error?.message) {
            dispatch(authActions.setError(error.message));
        }
    }, [error]);

    return (
        data
    );
};
