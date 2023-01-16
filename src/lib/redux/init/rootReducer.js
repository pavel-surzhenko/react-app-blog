import { combineReducers } from 'redux';

// Reducers
import {
    authReducer as auth,
    postsReducer as posts,
} from '../reducers';

export const rootReducer = combineReducers({
    auth,
    posts,
});
