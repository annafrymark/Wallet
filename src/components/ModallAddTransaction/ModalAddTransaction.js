import React, { useState } from 'react';
import css from './ModalAddTransaction.module.css';
import { ReactComponent as Plus } from '../images/plus.svg';
import Header from 'components/shared/Header';

function FormIncome() {
  return (
    <div>
      <h2>Income Form</h2>
    </div>
  );
}

function FormExpense() {
  return (
    <div>
      <h2>Expense Form</h2>
    </div>
  );
}

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showIncomeForm, setShowIncomeForm] = useState(true);

  const toggleForm = () => {
    setShowIncomeForm(prevShowIncomeFrom => !prevShowIncomeFrom);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className={css.addButton} type="button" onClick={handleOpenModal}>
        <Plus />
      </button>

      {showModal && (
        <div className={css.modalcontainer}>
          <div className={css.modalcontent}>
            <span className={css.closebutton} onClick={handleCloseModal}>
              &times;
            </span>
            <span className={css.headernone}>
              <Header />
            </span>
            <h2>Add transction</h2>
            <button onClick={toggleForm}>
              {showIncomeForm ? 'Income' : 'Expense'}
            </button>
            {showIncomeForm ? <FormIncome /> : <FormExpense />}
            <p>Here is the content of the modal...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
