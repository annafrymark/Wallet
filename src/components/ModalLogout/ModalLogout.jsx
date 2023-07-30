import css from './ModalLogout.module.css';

const ModalLogout = ({ setShowModal }) => {
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <p className={css.modalTitle}>Are you sure you want to sign out?</p>
        <button /*onClick={logoutFunction}*/ className={css.modalButton}>
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
