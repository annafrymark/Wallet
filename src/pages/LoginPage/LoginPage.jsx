//import React from 'react';
//import { Helmet } from 'react-helmet-async';
import css from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={css.container}>
      {/* <Helmet>
        <title>Wallet</title>
      </Helmet> */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
