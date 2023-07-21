import React from 'react';
import zxcvbn from 'zxcvbn';
import css from './PasswordStrengthBar.module.css';


const PasswordStrengthBar = ({ password }) => {
    const result = zxcvbn(password);
    const num = (result.score * 100) / 4;

    const barColor = () => {
        switch (result.score) {
        case 0:
            return 'none';
        case 1:
            return '#FF6596';
        case 2:
            return '#FED057';
        case 3:
            return '#80d564';
        case 4:
            return '#24CCA7';
        default:
            return 'none';
        }
    }

    const changeBarColor = () => ({
        width: `${num}%`,
        background: barColor(),
        height: '7px',
    })
    
    return (
        <div className={css.ProgressBar}>
            <div className={css.Progress} style={changeBarColor()}></div>
        </div>
        );
};

export default PasswordStrengthBar;