import { authTypes } from '../types';

const initialState = {
    token:        '',
    errorMessage: '',
    error:        false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.SET_TOKEN: {
            return {
                ...state,
                token:        action.payload,
                error:        false,
                errorMessage: '',
            };
        }

        case authTypes.RESET_ERROR: {
            return {
                ...state,
                error:        false,
                errorMessage: '',
            };
        }

        case authTypes.SET_ERROR: {
            return {
                ...state,
                error:        true,
                errorMessage: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
