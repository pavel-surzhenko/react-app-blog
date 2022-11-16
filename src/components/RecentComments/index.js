// core
import { formatDistance } from 'date-fns';

// hooks
import { useRecentComments }  from '../../hooks';

// components
import { Loading }  from '../Additionally/Loading';

export const Comment = (props) => {
    const { body, author, created } = props;

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
            <a href = '/rtx-homeworks/feed/17f1ada6-3486-4897-adf5-aa4d3ccac4ac/comments'>More comments</a>
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
