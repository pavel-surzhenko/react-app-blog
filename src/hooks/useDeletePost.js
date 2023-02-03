import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';
import { usePosts } from './usePosts';

export function useDeletePost() {
    const dispatch = useDispatch();
    const posts = usePosts();
    const mutation = useMutation((hash) => {
        return api.posts.remove(hash);
    }, {
        onError: (error) => {
            dispatch(authActions.setError(error?.message));
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            posts.refetch();
        }
    }, [mutation.isSuccess]);

    return mutation;
}
