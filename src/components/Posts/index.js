import { Composer } from '../forms/Composer';
import { Post } from '../Post';

export const Posts = () => {
    return (
        <div className = 'posts'>
            <h1 className = 'title'>Wall</h1>
            <Composer />
            <div className = 'posts-container'>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};
