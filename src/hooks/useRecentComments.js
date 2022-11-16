import { useQuery }  from 'react-query';

import { api }  from '../api';

export const useRecentComments = () => {
    const query = useQuery('recentComments', api.posts.getComments);
    const { data, isFetched } = query;

    return {
        data: data?.data || [],
        isFetched,
    };
};
