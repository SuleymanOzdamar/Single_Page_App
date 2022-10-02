import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email.')
        .required(),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters!')
        .required(),
});

export default validations;