import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { api } from '../api';
import { toastOptions } from '../constants/toastOptions';
import { authActions } from '../lib/redux/actions';
import { usePosts } from './usePosts';

export function useDeletePost() {
    const dispatch = useDispatch();
    const posts = usePosts();
    const mutation = useMutation((hash) => api.posts.remove(hash), {
        onError: (error) => {
            dispatch(authActions.setError(error?.message));
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            toast('Post successful deleted', toastOptions);
            posts.refetch();
        }
    }, [mutation.isSuccess]);

    return mutation;
}
