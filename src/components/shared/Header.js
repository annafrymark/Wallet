import React, { useState } from 'react';
import css from './Header.module.css';

import ModalLogout from '../ModalLogout/ModalLogout';
import { ReactComponent as Wallet } from '../../utils/images/wallet.svg';
// import { ReactComponent as Exit } from '../../utils/images/exit.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const user = useSelector(selectUser);
  console.log(user.firstname);

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
          {user.firstName}
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

// export default Header;
