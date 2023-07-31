import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';                       
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; 
import logo from '../../utils/images/wallet-icon.png';
import css from './registrationForm.module.css';
import { register } from 'redux/auth/authOperations';
import PasswordStrengthBar from './PasswordStrenghtBar';


const userSchema = Yup.object({
    email: Yup.string().email('Invalid e-mail.').required('E-mail is required.').matches( /^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, 'Invalid email.'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/, 'Password must contain 6 - 12 characters: one uppercase, one lowercase, one number and one special character.').required('Password is required.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password must match.').required('Password confirmation is required.'),
    name: Yup.string().min(1, 'Your name must contain at leastr 1 character')
});

  
export const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();  // eslint-disable-next-line
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
            
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
        console.log('setshow');
    };
    
    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
        console.log('setconfirm');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const confirmPassword = form.elements.confirmPassword.value;
        const name = form.elements.name.value;

        dispatch(register({ email, password, confirmPassword, name, }));
        // console.log('cos cos cos');
        console.log(email, password, confirmPassword, name);
        navigate('/');
        form.reset();
    };

    return (
        <Formik
            initialValues={{ email: '', password: '', confirmPassword: '', name: '', }}
            validationSchema={userSchema}
            validateOnBlur>{
                ({ values, handleBlur, isValid, touched, dirty, errors }) => (
                <div className={css.Container}>
                <Form className={css.Form} onSubmit={(event)=>handleSubmit(event)}>
                    <div className={css.LogoContainer}>
                    <img className={css.Logo} alt="Logo" src={logo} />
                    <h1 className={css.Title}>Wallet</h1>
                    </div>
                    <label className={css.Field}>
                        {touched.email && errors.email ? (
                            <p
                            style={{
                                color: '#ff6596',
                                position: 'absolute',
                                bottom: '-30px',
                                left: '0',
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                            }}
                            >
                            {errors.email}
                            </p>
                        ) : null}

                        <EmailIcon
                            className={css.InputIcon}
                            style={{ color: '#e0e0e0' }}
                        />
                        <Field
                            className={css.Input}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            value={values.email}
                            onBlur={handleBlur}
                            autoComplete='off'
                        />
                    </label>
                    <label className={css.Field}>
                        {touched.password && errors.password ? (
                            <p
                            style={{
                                color: '#ff6596',
                                position: 'absolute',
                                bottom: '-30px',
                                left: '0',
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                            }}
                            >
                            {errors.password}
                            </p>
                        ) : null}

                        <LockIcon
                            className={css.InputIcon}
                            style={{ color: '#e0e0e0' }}
                        />
                        <Field
                            className={css.Input}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            id="password"
                            value={values.password}
                            onBlur={handleBlur}
                            autoComplete="new-password"
                        />
                        <span
                            onClick={handlePasswordVisibility}
                            className={css.PasswordVisibilityToggle}
                        >
                            {showPassword ? (
                            <VisibilityOffIcon style={{ color: '#e0e0e0' }} />
                            ) : (
                            <VisibilityIcon style={{ color: '#e0e0e0' }} />
                            )}
                        </span>
                    </label>
                    <label className={css.Field}>
                        {touched.confirmPassword && errors.confirmPassword ? (
                            <p
                            style={{
                                color: '#ff6596',
                                position: 'absolute',
                                bottom: '-30px',
                                left: '0',
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                            }}
                            >
                            {errors.confirmPassword}
                            </p>
                        ) : null}

                        <LockIcon
                            className={css.InputIcon}
                            style={{ color: '#e0e0e0' }}
                        />
                        <Field
                            className={css.Input}
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm password"
                            value={values.confirmPassword}
                            onBlur={handleBlur}                  
                            autoComplete="new-password"
                        />
                            <span
                                onClick={handleConfirmPasswordVisibility}
                                className={css.PasswordVisibilityToggle}
                            >
                            {showConfirmPassword ? (
                            <VisibilityOffIcon style={{ color: '#e0e0e0' }} />
                            ) : (
                            <VisibilityIcon style={{ color: '#e0e0e0' }} />
                            )}
                        </span>
                        <PasswordStrengthBar password={password} />
                    </label>
                    <label className={css.Field}>
                        {touched.name && errors.name ? (
                            <p
                            style={{
                                color: '#ff6596',
                                position: 'absolute',
                                bottom: '-30px',
                                left: '0',
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                            }}
                            >
                            {errors.name}
                            </p>
                        ) : null}

                        <AccountBoxIcon
                            className={css.InputIcon}
                            style={{ color: '#e0e0e0' }}
                        />
                        <Field
                            className={css.Input}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="First name"
                            value={values.name}
                            onBlur={handleBlur}
                            autoComplete='off'
                        />
                    </label>
                    <div className={css.ButtonContainer}>
                    <button type="submit" className={css.ButtonPrimary}>
                        Register
                    </button>

                    <Link to="/login">
                        <button type="button" className={css.ButtonSecondary}>
                        Log in
                        </button>
                    </Link>
                    </div>
                </Form>
                </div>
            )}
        </Formik>
    );
};