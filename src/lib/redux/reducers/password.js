import { passwordTypes } from '../types';

export const initialState = {
    token:      '',
    isFetching: false,
};

export const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
        case passwordTypes.START_FETCHING: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case passwordTypes.STOP_FETCHING: {
            return {
                ...state,
                isFetching: false,
            };
        }
        case passwordTypes.UPDATE_PASSWORD: {
            return {
                ...state,
                isFetching: false,
                token:      action?.payload,
            };
        }
        default: {
            return state;
        }
    }
};
