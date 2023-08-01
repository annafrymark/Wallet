//import React from 'react';

import css from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
