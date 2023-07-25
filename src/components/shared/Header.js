import React from 'react';
import css from './Header.module.css';
import { ReactComponent as Wallet } from '../images/wallet.svg';
import { ReactComponent as Exit } from '../images/exit.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>
        <img className={css.imgwallet} src={<Wallet />} alt="Logo" />
        Wallet
      </h1>
      <div className={css.buttonContainer}>
        <button type="button" className={css.button}>
          Tutaj imie zalogowanego użytkownika
        </button>
        <p className={css.border}>|</p>
        <div className={css.buttonExitContainer}>
          <img className={css.imgexit} src={Exit} alt="exit" />
          <button type="button" className={css.buttonExit}>
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
