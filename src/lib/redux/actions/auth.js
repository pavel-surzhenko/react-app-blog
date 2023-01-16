import { authTypes } from '../types';

export const authActions = Object.freeze({
    resetError: () => {
        return {
            type: authTypes.RESET_ERROR,
        };
    },

    setError: (message) => {
        return {
            type:    authTypes.SET_ERROR,
            error:   true,
            payload: message,
        };
    },

    setToken: (token) => {
        return {
            type:    authTypes.SET_TOKEN,
            payload: token,
        };
    },
});

