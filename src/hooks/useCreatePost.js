// core
import { useMutation } from 'react-query';
import { api } from '../api';

export const useCreatePost = () => {
    const mutation = useMutation((body) => {
        return api.posts.create(body);
    });

    return mutation;
};
