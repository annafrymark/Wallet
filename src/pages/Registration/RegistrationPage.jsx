import React from "react";
import Media from "react-media";
import picture from '../../utilities/images/woman-cashapp@2x.png';
import css from './RegistrationPage.module.css';
import { RegisterForm } from "components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => { 
    return (
        <div className={css.Container}>
            <Media query='(min-width: 767px)'
                render={() => (
                    <div className={css.LogoContainer}>
                        <img className={css.Image} src={picture} alt='' />
                        <h1 className={css.Title}>Finance App</h1>
                    </div>
                )}
            />
            <div className={css.FormContainer}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegistrationPage;