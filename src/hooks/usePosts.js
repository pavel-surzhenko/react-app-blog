import { useQuery }  from 'react-query';

import { api }  from '../api';

export const usePosts = () => {
    const query = useQuery('posts', api.posts.fetch);
    const { data, isFetched, refetch } = query;

    return {
        data: data?.data || [],
        isFetched,
        refetch,
    };
};
