import { CommentIcon } from '../../theme/assets/comment';
import { LikeIcon } from '../../theme/assets/like';

export const Post = () => {
    return (
        <section className = 'post'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar'></img>
            <a>Chuck Norris</a>
            <time>about 8 hours ago</time>
            <p>If you think education is expensive, try ignorance ~ Derek Bok</p>
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
                <span className = 'comment'>
                    <CommentIcon className = { 'comment-icon' } />
                    0 comments
                </span>
            </div>
        </section>
    );
};
