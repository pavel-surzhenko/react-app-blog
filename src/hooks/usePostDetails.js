// core
import { useQuery }  from 'react-query';

import { api }  from '../api';


export const usePostDetails = (postHash) => {
    const { data, isFetched } = useQuery(['postById', postHash], () => api.posts.getPostById(postHash), { retry: false });

    return {
        data: data?.data || {},
        isFetched,
    };
};
