// core
import { Link }  from 'react-router-dom';

// components
import { PostComments }  from '../../components';
import { useToken } from '../../hooks';

export const PostCommentsPage = () => {
    useToken();

    return (
        <div className = 'wrapper'>
            <Link to = '/feed' className = 'link-back'>
                <div className = 'arrow'></div>
            back
            </Link>
            <h1 className = 'title'>Post comments</h1>
            <PostComments />
        </div>
    );
};
