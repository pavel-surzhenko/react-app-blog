export const getToken = (state) => {
    return state.auth.token;
};

export const getErrorMessage = (state) => {
    return state.auth.errorMessage;
};

export const getPasswordState = (state) => {
    return state.password;
};
