// mock
import comments from '../../mock-data/comments.json';

export const Comment = (props) => {
    const { body, author, created } = props;

    return (
        <div className = 'comment'>
            <p className = 'name'>{ author.name }</p>
            <time>{ created }</time>
            <p className = 'body'>{ body }</p>
            <a href = '/rtx-homeworks/feed/17f1ada6-3486-4897-adf5-aa4d3ccac4ac/comments'>More comments</a>
        </div>
    );
};


export const RecentComments = () => {
    const commentJSX = comments.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));

    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>Popular comments</h1>
            <section>
                { commentJSX }
            </section>
        </div>
    );
};
