import React, { useState } from 'react';
import css from './ModalAddTransaction.module.css';
import { ReactComponent as Plus } from '../images/plus.svg';
import Header from 'components/shared/Header';
import { Formik, Form, FastField } from 'formik';
import DateTimePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const initialValuesInCome = {
  price: '',
  selectedDate: null,
  comment: '',
};

const categories = [
  'Car',
  'Products',
  'Main expenses',
  'Self care',
  'Child care',
  'Household products',
  'Education',
  'Leisure',
];

const initialValuesExpense = {
  category: '',
  price: '',
  selectedDate: null,
  comment: '',
};

const handleSubmit = (values, { setSubmitting, resetForm }) => {
  // logika dodawania elementu do listy
  console.log(values);

  resetForm();
  setSubmitting(false);
};

function FormIncome() {
  return (
    <div>
      <Formik initialValues={initialValuesExpense} onSubmit={handleSubmit}>
        {({ values, handleChange, setFieldValue, isSubmitting }) => (
          <Form>
            <label htmlFor="price">Price:</label>
            <FastField
              type="number"
              placeholder="0.00"
              id="price"
              name="price"
            />

            <label>Date:</label>
            <DateTimePicker
              onChange={date => setFieldValue(`selectedDate`, date)}
              value={values.selectedDate}
            />
            <lavel htmlFor="comment">Comment:</lavel>
            <FastField
              as="textarea"
              placeholder="Comment"
              id="comment"
              name="comment"
            />
            <button type="submit" disabled={isSubmitting}>
              ADD
            </button>
            <button tyle="button">CANCEL</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function FormExpense() {
  return (
    <div>
      <Formik initialValues={initialValuesInCome} onSubmit={handleSubmit}>
        {({ values, handleChange, setFieldValue, isSubmitting }) => (
          <Form>
            <label htmlFor="category">Category:</label>
            <FastField as="select" id="category" name="category">
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </FastField>
            <label htmlFor="price">Price:</label>
            <FastField
              type="number"
              placeholder="0.00"
              id="price"
              name="price"
            />

            <label>Date:</label>
            <DateTimePicker
              onChange={date => setFieldValue(`selectedDate`, date)}
              value={values.selectedDate}
            />
            <lavel htmlFor="comment">Comment:</lavel>
            <FastField
              as="textarea"
              placeholder="Comment"
              id="comment"
              name="comment"
            />
            <button type="submit" disabled={isSubmitting}>
              ADD
            </button>
            <button tyle="button">CANCEL</button>
          </Form>
        )}
      </Formik>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
