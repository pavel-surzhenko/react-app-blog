import { toast } from 'react-toastify';
import { passwordTypes } from '../types/password';
import { api }  from '../../../api';
import { authActions } from './auth';
import { toastOptions } from '../../../constants/toastOptions';

export const passwordActions = Object.freeze({
    startFetching: () => {
        return {
            type: passwordTypes.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: passwordTypes.STOP_FETCHING,
        };
    },
    updatePassword: (token) => {
        return {
            type:    passwordTypes.UPDATE_PASSWORD,
            payload: token,
        };
    },
    updatePasswordAsync: (passwordData) => async (dispatch) => {
        if (!passwordData) {
            return null;
        }
        try {
            dispatch(passwordActions.startFetching());
            const token = await api.profile.updatePassword(passwordData);
            localStorage.removeItem('token');
            localStorage.setItem('token', token?.data);
            dispatch(passwordActions.updatePassword(token?.data));
            toast('Password has been change', toastOptions);
        } catch (error) {
            dispatch(authActions.setError(error.message));
        } finally {
            dispatch(passwordActions.stopFetching());
        }
    },
});
