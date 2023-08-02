import React, { useState } from 'react';
import css from './EditModalTransaction.module.css';
import { ReactComponent as Close } from '../../utils/images/close.svg';
import { ReactComponent as Plus } from '../../utils/images/plus.svg';
import Header from 'components/shared/Header';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editTransaction } from 'redux/transactions/operations';
import 'react-datetime/css/react-datetime.css';
import DateTime from 'react-datetime';

const validationSchema = Yup.object().shape({
  price: Yup.number().required('Price is required'),
  date: Yup.date().required('Date is required'),
  category: Yup.string().required('Category is required'),
});

function FormIncome({ onCancel, initialValues, handleCloseModal }) {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { price, date, comment } = values;

    const editedTransaction = {
      ...initialValues,
      price,
      date,
      comment,
    };

    dispatch(editTransaction(editedTransaction));
    handleCloseModal();
  };

  return (
    <Formik
      initialValues={{
        price: initialValues.price || '',
        date: initialValues.date || new Date().toISOString().substr(0, 10),
        comment: initialValues.comment || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Field
            className={css.inputForm}
            placeholder="0.00"
            type="number"
            name="price"
            required
          />
          <DateTime
            value={values.date}
            dateFormat="YYYY-MM-DD"
            timeFormat={false}
            inputProps={{
              required: true,
              style: {
                border: 'none',
                borderBottom: `1px solid #e0e0e0`,
                width: '90%',
                marginTop: '20px',
                fontSize: '15px',
                padding: '18px',
                outline: 'none',
              },
            }}
          />
          <Field
            className={css.inputFormComment}
            placeholder="Comment"
            as="textarea"
            name="comment"
            rows="4"
          />
          <button className={css.buttonADD} type="submit">
            SAVE
          </button>
          <button className={css.buttonCancel} type="button" onClick={onCancel}>
            CANCEL
          </button>
        </Form>
      )}
    </Formik>
  );
}

function FormExpense({ onCancel, initialValues, handleCloseModal }) {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { category, price, date, comment } = values;

    const editedTransaction = {
      ...initialValues,
      category,
      price,
      date,
      comment,
    };

    dispatch(editTransaction(editedTransaction));
    handleCloseModal();
  };

  return (
    <Formik
      initialValues={{
        category: initialValues.category || '',
        price: initialValues.price || '',
        date: initialValues.date || new Date(),
        comment: initialValues.comment || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Field className={css.inputFormSelect} as="select" name="category">
            <option value="">Select a category</option>
            <option value="Car">Car</option>
            <option value="Main expenses">Main expenses</option>
            <option value="Self care">Self care</option>
            <option value="Child care'">Child care</option>
            <option value="Household products">Household products</option>
            <option value="Education">Education</option>
            <option value="Leisure">Leisure</option>
          </Field>
          <span className={css.test}>
            <Field
              className={css.inputForm}
              placeholder="0.00"
              type="number"
              name="price"
              required
            />
            <DateTime
              className="test"
              value={values.date}
              dateFormat="YYYY-MM-DD"
              timeFormat={false}
              inputProps={{
                required: true,
                style: {
                  border: 'none',
                  borderBottom: `1px solid #e0e0e0`,
                  width: '90%',
                  marginTop: '20px',
                  fontSize: '15px',
                  padding: '18px',
                  outline: 'none',
                },
              }}
            />
          </span>

          <Field
            className={css.inputFormComment}
            placeholder="Comment"
            as="textarea"
            name="comment"
            rows="4"
          />

          <button className={css.buttonADD} type="submit">
            SAVE
          </button>
          <button className={css.buttonCancel} type="button" onClick={onCancel}>
            CANCEL
          </button>
        </Form>
      )}
    </Formik>
  );
}

const EditModal = ({ transaction }) => {
  const [showModal, setShowModal] = useState(false);
  const [showIncomeForm, setShowIncomeForm] = useState(true);

  const toggleForm = () => {
    setShowIncomeForm(prevShowIncomeFrom => !prevShowIncomeFrom);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setShowIncomeForm(transaction.type === 'income'); // Ustaw rodzaj formularza na podstawie typu transakcji
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleIncomeClick = () => {
    setShowIncomeForm(true);
  };
  const handleExpenseClick = () => {
    setShowIncomeForm(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        <Plus />
      </button>

      {showModal && (
        <div className={css.modalcontainer}>
          <div className={css.modalcontent}>
            <span className={css.closebutton} onClick={handleCloseModal}>
              <Close />
            </span>
            <span className={css.headernone}>
              <Header />
            </span>
            <div className={css.formContainer}>
              <h2 className={css.title}>Edit transaction</h2>
              <div className={css.switchButton}>
                <button
                  className={
                    showIncomeForm ? css.activeButtonIncome : css.inactiveButton
                  }
                  onClick={handleIncomeClick}
                >
                  Income
                </button>
                <p className={css.padding}>/</p>
                <button
                  className={
                    !showIncomeForm
                      ? css.activeButtonExpense
                      : css.inactiveButton
                  }
                  onClick={handleExpenseClick}
                >
                  Expense
                </button>
              </div>
              {showIncomeForm ? (
                <FormIncome
                  onCancel={handleCloseModal}
                  initialValues={transaction}
                  handleCloseModal={handleCloseModal}
                />
              ) : (
                <FormExpense
                  onCancel={handleCloseModal}
                  initialValues={transaction}
                  handleCloseModal={handleCloseModal}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;
