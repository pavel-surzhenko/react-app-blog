// Core
import { formatDistance } from 'date-fns';
import { useDispatch, useSelector }  from 'react-redux';
import { useProfile } from '../../hooks';
import { postActions } from '../../lib/redux/actions/posts';
import { getPostId } from '../../lib/redux/selectors/posts';

// Components
import { CommentIcon } from '../../theme/assets/comment';
import { LikeIcon } from '../../theme/assets/like';
import { Comment } from '../Comment';
import { CommentsForm } from '../forms/CommentsForm';

export const Post = (props) => {
    const dispatch = useDispatch();
    const selectedComment = useSelector(getPostId);
    const { data:{ hash: hashAuthor } } = useProfile();
    const {
        body, author, created, hash, comments,
    } = props;

    const relatedDate = formatDistance(
        new Date(created),
        new Date(), {
            addSuffix:      true,
            includeSeconds: true,
        },
    );


    const handleClick = () => {
        dispatch(postActions.setPostId(props.hash === selectedComment ? '' : props.hash));
    };

    const commentsJSX = comments.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));

    return (
        <section className = 'post'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar'></img>
            { author.hash === hashAuthor ? <span className = 'cross'></span> : '' }
            <a>{ author.name }</a>
            <time> { relatedDate }</time>
            <p>{ body }</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div>
                        <span>0</span>
                    </div>
                    <span className = 'icon'>
                        <LikeIcon />
                        Like
                    </span>
                </section>
                <span className = 'comment'  onClick = { handleClick }>
                    <CommentIcon className = { 'comment-icon' } />
                    { `${comments.length}  comment${comments.length > 0 ? '' : 's'}` }
                </span>
            </div>
            { selectedComment === hash && <><CommentsForm /> { commentsJSX }</> }
        </section>
    );
};
