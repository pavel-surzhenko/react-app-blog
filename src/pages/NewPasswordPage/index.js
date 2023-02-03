import { NewPassword } from '../../components/forms/NewPassword';
import { useToken } from '../../hooks';

export const NewPasswordPage = () => {
    useToken();

    return (
        <NewPassword />
    );
};
