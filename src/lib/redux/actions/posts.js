import { postTypes } from '../types';

export const postActions = Object.freeze({
    setPostId: (postId) => {
        return {
            type:    postTypes.SET_SELECTED_POST_ID,
            payload: postId,
        };
    },
});

