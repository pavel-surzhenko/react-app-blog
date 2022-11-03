// Core
import { createContext, useState } from 'react';

export const Context = createContext(['', () => null]);

export const CommentsFormProvider = (props) => {
    const state = useState('');

    return (
        <Context.Provider value = { state }>
            { props.children }
        </Context.Provider>
    );
};
