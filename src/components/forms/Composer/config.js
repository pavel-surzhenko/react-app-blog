import * as yup from 'yup';

export const schema = yup.object().shape({
    body: yup.string()
        .min(3, 'text must be longer')
        .required('write text'),
});
