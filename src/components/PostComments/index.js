// core
import { formatDistance } from 'date-fns';
import { useParams, useNavigate }  from 'react-router-dom';
import { useEffect } from 'react';

// hooks
import { usePostDetails }  from '../../hooks';

// components
import { Loading }  from '../Additionally/Loading';

const Comment = (props) => {
    const { body, created, author } = props;
    const relatedDate = formatDistance(
        new Date(created),
        new Date(), {
            addSuffix:      true,
            includeSeconds: true,
        },
    );

    return (
        <div className = 'comment'>
            <p>{ author.name }</p>
            <time>{ relatedDate }</time>
            <p>{ body }</p>
        </div>
    );
};

export const PostComments = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        data :{
            body, created, hash, comments, author,
        }, isFetched,
    } = usePostDetails(id);

    const CommentJSX = comments?.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));

    const relatedDate = formatDistance(
        new Date(created ?? null),
        new Date(), {
            addSuffix:      true,
            includeSeconds: true,
        },
    );

    useEffect(() => {
        if (!hash && isFetched) {
            navigate('/feed', { replace: true });
        }
    }, [hash, isFetched]);

    return (
        <section>
            <div className = 'comment'>
                <p className = 'name'>{ author?.name || <Loading /> }</p>
                <time>{ relatedDate }</time>
                <p className = 'body'> { body } </p>
                <p className = 'subtitle'>Recent comments</p>
                { isFetched ? CommentJSX : <Loading /> }
            </div>
        </section>
    );
};
