export const getToken = (state) => {
    return state.auth.getToken;
};

export const getErrorMessage = (state) => {
    return state.auth.errorMessage;
};

export const getPasswordState = (state) => {
    return state.password;
};
