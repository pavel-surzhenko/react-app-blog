// components
import { Profile }  from '../../components';

export const ProfilePage = () => {
    return (
        <form className = 'form'>
            <div className = 'wrapper'>
                <Profile />
                <a href = '#'>Change password</a>
            </div>
        </form>
    );
};
