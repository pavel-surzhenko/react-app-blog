import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { api } from '../api';
import { authActions } from '../lib/redux/actions';
import { usePosts } from './usePosts';


export const useUnlike = () => {
    const dispatch = useDispatch();
    const posts = usePosts();
    const mutation = useMutation((hash) => {
        return api.posts.unlike(hash);
    }, {
        onError: (error) => {
            dispatch(authActions.setError(error?.message));
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            posts.refetch();
        }
    }, [mutation.isSuccess]);

    return mutation;
};

