// components
import { Profile }  from '../../components';
import { useToken } from '../../hooks';

export const ProfilePage = () => {
    useToken();

    return (
        <Profile />
    );
};
