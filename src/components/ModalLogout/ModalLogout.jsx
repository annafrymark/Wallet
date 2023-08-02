import css from './ModalLogout.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const ModalLogout = ({ setShowModal }) => {
  const handleCancel = () => {
    setShowModal(false);
  };
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <p className={css.modalTitle}>Are you sure you want to sign out?</p>
        <button onClick={handleLogOut} className={css.modalButton}>
          YES
        </button>
        <button onClick={handleCancel} className={css.modalButton__cancel}>
          NO
        </button>
      </div>
    </div>
  );
};

export default ModalLogout;
