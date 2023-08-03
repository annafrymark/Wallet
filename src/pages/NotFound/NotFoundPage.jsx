import React from "react";
import Media from "react-media";
import picture from '../../utils/images/Frame-cashappPNF404.png';
import css from './NotFoundPage.module.css';

export const NotFound = () => { 
    return (
        <div className={css.Container}>
            <Media query='(min-width: 767px)'
                render={() => (
                    <div className={css.LogoContainer}>
                        <img className={css.Image} src={picture} alt='' />
                    </div>
                )}
            />
        </div>
    );
};
