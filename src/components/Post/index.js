// Core
import { formatDistance } from 'date-fns';
import { useState } from 'react';
import { useDispatch, useSelector }  from 'react-redux';
import {
    useDeletePost, useLike, useProfile, useUnlike,
} from '../../hooks';
import { postActions } from '../../lib/redux/actions/posts';
import { getPostId } from '../../lib/redux/selectors/posts';

// Components
import { CommentIcon } from '../../theme/assets/comment';
import { LikeIcon } from '../../theme/assets/like';
import { Comment } from '../Comment';
import { CommentsForm } from '../forms/CommentsForm';

export const Post = (props) => {
    const removePost = useDeletePost();
    const like = useLike();
    const unlike = useUnlike();
    const dispatch = useDispatch();
    const selectedComment = useSelector(getPostId);
    const { data:{ hash: hashAuthor, name } } = useProfile();
    const {
        body, author, created, hash, comments, likes,
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

    const liked = likes.filter((post) => post.name === name);
    const likePost = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        liked.length ? unlike.mutate(hash) : like.mutate(hash);
    };

    const likelistJSX = likes.map((post) => (
        <li key = { post.hash }> { post.name }</li>
    ));

    const [mouseHover, setMouseHover] = useState(false);

    const handleMouseHover = () => {
        setMouseHover(true);
    };

    const handleMouseLeave = () => {
        setMouseHover(false);
    };

    const commentsJSX = comments.map((comment) => (
        <Comment key = { comment.hash } { ...comment } />
    ));

    return (
        <section className = 'post'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar'></img>
            { author.hash === hashAuthor ? <span className = 'cross' onClick = { () => removePost.mutate(hash) }></span> : '' }
            <a>{ author.name }</a>
            <time> { relatedDate }</time>
            <p>{ body }</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div onMouseEnter = { handleMouseHover } onMouseLeave = { handleMouseLeave }>
                        { mouseHover && likes.length !== 0 && <ul> { likelistJSX } </ul>  }
                        <span>{ likes.length }</span>
                    </div>
                    <span onClick = { likePost } className = { `icon ${liked.length ? 'liked' : ''} ` }>
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
