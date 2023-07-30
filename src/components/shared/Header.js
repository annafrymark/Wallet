import React, { useState } from 'react';
import css from './Header.module.css';
// import wallet from '../images/wallet.png';
// import exit from '../images/exit.png';
import { ReactComponent as Wallet } from '../images/wallet.svg';
import { ReactComponent as Exit } from '../images/exit.svg';
import ModalLogout from 'components/ModalLogout/ModalLogout';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

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
          {showModal && <ModalLogout setShowModal={setShowModal} />}
          <button
            type="button"
            className={css.buttonExit}
            onClick={handleLogout}
          >
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
