export const validateLength = (text, minLength, maxLength) => {
    return !text || text.length < minLength || text.length > maxLength;
};

