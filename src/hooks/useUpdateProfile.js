// core

import { useMutation } from 'react-query';
import { api } from '../api';

export const useUpdateProfile = () => {
    const mutation = useMutation((profileInfo) => {
        return api.profile.updateProfile(profileInfo);
    });

    return mutation;
};
