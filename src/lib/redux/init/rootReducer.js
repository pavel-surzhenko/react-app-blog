import { combineReducers } from 'redux';

// Reducers
import {
    authReducer as auth,
    postsReducer as posts,
    passwordReducer as password,
} from '../reducers';

export const rootReducer = combineReducers({
    auth,
    posts,
    password,
});
