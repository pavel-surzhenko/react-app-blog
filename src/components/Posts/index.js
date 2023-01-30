// Components
import { useEffect } from 'react';
import { Composer } from '../forms/Composer';
import { Post } from '../Post';
import { Loading }  from '../Additionally/Loading';

// hooks
import { usePosts }  from '../../hooks';

export const Posts = () => {
    const { data, isFetched, refetch } = usePosts();
    const postJSX = data.map((post) => (
        <Post key = { post.hash } { ...post } />
    ));

    useEffect(() => {
        refetch();
    }, [data]);


    return (
        <div className = 'posts'>
            <h1 className = 'title'>Wall</h1>
            <Composer />
            <div className = 'posts-container'>
                { isFetched ? postJSX : <Loading /> }
            </div>
        </div>
    );
};

