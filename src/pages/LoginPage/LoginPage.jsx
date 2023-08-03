import React from "react";
import Media from "react-media";
import pictureLog from '../../utils/images/frame-man.png';
import css from './LoginPage.module.css';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <div className={css.Container}>
            <Media query='(min-width: 767px)'
                render={() => (
                    <div className={css.LogoContainer}>
                        <img className={css.Image} src={pictureLog} alt='' />
                        <h1 className={css.Title}>Finance App</h1>
                    </div>
                )}
            />
            <div className={css.FormContainer}>
                <LoginForm />
            </div>
        </div>
    );
};


export default LoginPage;
