import React from 'react';
import css from './Header.module.css';
// import wallet from '../images/wallet.png';
// import exit from '../images/exit.png';
import { ReactComponent as Wallet } from '../../utils/images/wallet.svg';
import { ReactComponent as Exit } from '../../utils/images/exit.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>
        <div className={css.svgwallet}>
          <Wallet />
        </div>
        Wallet
      </h1>
      <div className={css.buttonContainer}>
        <button type="button" className={css.button}>
          Tutaj imie zalogowanego użytkownika
        </button>
        <p className={css.border}>|</p>
        <div className={css.buttonExitContainer}>
          <Exit />
          <button type="button" className={css.buttonExit}>
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
