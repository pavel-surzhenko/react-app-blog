import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'min length - ${min}';

export const schema = yup.object().shape({
    firstName: yup.string()
        .min(3, tooShortMessage)
        .required('enter first name'),
    lastName: yup.string()
        .min(3, tooShortMessage)
        .required('enter last name'),
});
