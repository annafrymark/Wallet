import React from 'react';
import css from './Header.module.css';
import wallet from '../images/wallet.png';
import exit from '../images/exit.png';
const Header = () => {
  return (
    <div>
      <header className={css.header}>
        <h1 className={css.title}>
          <img className={css.imgwallet} src={wallet} alt="Logo" />
          Wallet
        </h1>
        <div className={css.buttonContainer}>
          <button className={css.button}>Name</button>
          <p className={css.border}>|</p>
          <button className={css.button}>
            <img className={css.imgexit} src={exit} alt="exit" />
            Exit
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
