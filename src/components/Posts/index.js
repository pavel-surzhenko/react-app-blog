
// Components
import { Composer } from '../forms/Composer';
import { Post } from '../Post';


import posts from '../../mock-data/posts.json';

export const Posts = () => {
    const postJSX = posts.map((post) => (
        <Post key = { post.hash } { ...post } />
    ));

    return (
        <div className = 'posts'>
            <h1 className = 'title'>Wall</h1>
            <Composer />
            <div className = 'posts-container'>
                { postJSX }
            </div>
        </div>
    );
};

