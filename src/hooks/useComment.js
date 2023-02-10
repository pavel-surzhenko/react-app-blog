// core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';
import { usePosts } from './usePosts';
import { useRecentComments } from './useRecentComments';

export const useComment = () => {
    const dispatch = useDispatch();
    const recentComments = useRecentComments();
    const posts = usePosts();
    const mutation = useMutation(({ hash, body }) => {
        return api.posts.comment({ hash, ...body });
    }, {
        onError: (error) => {
            dispatch(authActions.setError(error?.message));
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            recentComments.refetch();
            posts.refetch();
        }
    }, [mutation.isSuccess]);

    return mutation;
};
