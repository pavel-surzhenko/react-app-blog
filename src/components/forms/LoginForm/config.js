import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'min length - ${min}';


export const schema = yup.object().shape({
    email: yup.string()
        .email('please enter correct email')
        .required('enter email'),
    password: yup.string()
        .min(5, tooShortMessage)
        .required('*'),
});
