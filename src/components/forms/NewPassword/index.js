import { Link }  from 'react-router-dom';
import { useDispatch, useSelector }  from 'react-redux';
import { useForm }  from 'react-hook-form';
import { useEffect } from 'react';
import { getPasswordState, getToken } from '../../../lib/redux/selectors/auth';
import { authActions, passwordActions } from '../../../lib/redux/actions';

export const NewPassword = () => {
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const resetPassword = useSelector(getPasswordState);

    const form = useForm({
        mode: 'onTouched',
    });

    useEffect(() => {
        if (resetPassword.token !== token) {
            dispatch(authActions.setToken(resetPassword.token || token));
        }
    }, [resetPassword.token]);

    const handleSubmit = form.handleSubmit(async (passwordData) => {
        await dispatch(passwordActions.updatePasswordAsync(passwordData));
        form.reset();
    });

    return (
        <form className = 'form' onSubmit = { handleSubmit }>
            <div className = 'wrapper'>
                <div>
                    <h1>Change password</h1>
                    <label>
                        <div>
                            <span className = 'error-message'></span>
                        </div>
                        <input
                            placeholder = 'old password' name = 'oldPassword'
                            type = 'password'
                            { ...form.register('oldPassword') } />
                    </label>
                    <label>
                        <div>
                            <span className = 'error-message'></span>
                        </div>
                        <input
                            placeholder = 'new password' name = 'newPassword'
                            type = 'password'
                            { ...form.register('newPassword') } />
                    </label>
                    <button className = 'loginSubmit' type = 'submit'>Change password</button>
                </div>
                <Link to = '/profile'>Back</Link>
            </div>
        </form>
    );
};
