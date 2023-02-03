// components
import { Posts, RecentComments } from '../../components';
import { useToken } from '../../hooks';

export const Feed = () => {
    useToken();

    return (
        <>
            <Posts />
            <RecentComments />
        </>
    );
};
