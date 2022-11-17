// core
import { formatDistance } from 'date-fns';
import { Link }  from 'react-router-dom';

// hooks
import { useRecentComments }  from '../../hooks';

// components
import { Loading }  from '../Additionally/Loading';

export const Comment = (props) => {
    const {
        body, author, created, post,
    } = props;

    const relatedDate = formatDistance(
        new Date(created),
        new Date(), {
            addSuffix:      true,
            includeSeconds: true,
        },
    );

    return (
        <div className = 'comment'>
            <p className = 'name'>{ author.name }</p>
            <time>{ relatedDate }</time>
            <p className = 'body'>{ body }</p>
            <Link to = { post.hash }>More comments</Link>
        </div>
    );
};


export const RecentComments = () => {
    const { data, isFetched } = useRecentComments();

    const commentJSX = data.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));

    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>Popular comments</h1>
            <section>
                { isFetched ? commentJSX : <Loading /> }
            </section>
        </div>
    );
};
