import { useContext } from 'react';
import { Context } from '../lib/storeContext';

export const useStore = () => {
    const store = useContext(Context);

    return store;
};
