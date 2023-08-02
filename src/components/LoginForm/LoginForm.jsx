import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../../utils/images/wallet-icon.png';
import css from '../RegistrationForm/registrationForm.module.css';
import { logIn } from 'redux/auth/authOperations';

const userSchema = Yup.object({
  email: Yup.string()
    .email('Invalid e-mail.')
    .required('E-mail is required.')
    .matches(/^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/, 'Invalid email.'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
      'Password must contain 6 - 12 characters: one uppercase, one lowercase, one number and one special character.'
    )
    .required('Password is required.'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // eslint-disable-next-line
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(logIn({ email, password }));

    // navigate('/home');
    form.reset();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={userSchema}
      validateOnBlur
    >
      {({ values, handleBlur, isValid, touched, dirty, errors }) => (
        <div className={css.Container}>
          <Form className={css.Form} onSubmit={handleSubmit}>
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
                autoComplete="off"
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
            </label>

            <div className={css.ButtonContainer}>
              <button type="submit" className={css.ButtonPrimary}>
                Log in
              </button>

              <Link to="/register">
                <button type="button" className={css.ButtonSecondary}>
                  Register
                </button>
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
