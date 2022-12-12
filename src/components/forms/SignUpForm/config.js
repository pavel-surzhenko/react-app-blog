import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'min length - ${min}';


export const schema = yup.object().shape({
    name: yup.string()
        .min(2, tooShortMessage)
        .required('*'),
    email: yup.string()
        .email('please enter correct email')
        .required('enter email'),
    password: yup.string()
        .min(5, tooShortMessage)
        .required('*'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'password must match')
        .required('please confirm password'),
});
