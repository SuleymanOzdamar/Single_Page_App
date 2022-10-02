import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email.')
        .required('Required field.'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters!')
        .required('Required field.'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match!')
        .required('Required field.'),
});

export default validations;