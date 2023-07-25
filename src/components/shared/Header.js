import React from 'react';
import css from './Header.module.css';
<<<<<<< Updated upstream
import wallet from '../images/wallet.png';
import exit from '../images/exit.png';
=======
import { ReactComponent as Wallet } from '../images/wallet.svg';
import { ReactComponent as Exit } from '../images/exit.svg';

>>>>>>> Stashed changes
const Header = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>
        <img className={css.imgwallet} src={wallet} alt="Logo" />
        Wallet
      </h1>
      <div className={css.buttonContainer}>
        <button type="button" className={css.button}>
          Tutaj imie zalogowanego użytkownika
        </button>
        <p className={css.border}>|</p>
        <div className={css.buttonExitContainer}>
          <img className={css.imgexit} src={exit} alt="exit" />
          <button type="button" className={css.buttonExit}>
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
