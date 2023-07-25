import React, { useState } from 'react';
import css from './ModalAddTransaction.module.css';
import { ReactComponent as Plus } from '../images/plus.svg';
import { ReactComponent as Close } from '../images/close.svg';
import Header from 'components/shared/Header';
import { Formik, Form, FastField } from 'formik';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Switch from '@mui/material/Switch';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  price: Yup.number().required('Price is required'),
  date: Yup.date().required('Date is required'),
  category: Yup.string().required('Category is requred'),
});

const handleSubmit = (values, { setSubmitting, resetForm }) => {
  // logika dodawania elementu do listy
  console.log(values);

  resetForm();
  setSubmitting(false);
};

function FormIncome() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const initialValuesInCome = {
    price: '',
    selectedDate: null,
    comment: '',
  };
  return (
    <div>
      <Formik
        initialValues={initialValuesInCome}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, setFieldValue, isSubmitting }) => (
          <Form>
            <FastField
              type="number"
              placeholder="0.00"
              id="price"
              name="price"
              value={values.price}
              onChange={handleChange}
            />

            <DateTime
              dateFormat="DD-MM-YYYY"
              timeFormat={false}
              onChange={handleDateChange}
              value={selectedDate}
              id="date"
              name="date"
              className={css.dateTime}
            />

            <FastField
              placeholder="Comment"
              id="comment"
              name="comment"
              multiline
              rows={4}
              value={values.comment}
              onChange={handleChange}
            />

            <div>
              <button type="submit" disabled={isSubmitting}>
                ADD
              </button>

              <button type="button">CANCEL</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function FormExpense() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const initialValuesExpense = {
    category: '',
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
  return (
    <div className={css.modalForm}>
      <Formik
        initialValues={initialValuesExpense}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, setFieldValue, isSubmitting }) => (
          <Form>
            <FastField as="select" id="category" name="category">
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </FastField>

            <FastField
              type="number"
              placeholder="0.00"
              id="price"
              name="price"
            />

            <DateTime
              onChange={handleDateChange}
              value={selectedDate}
              id="date"
              dateFormat="DD-MM-YYYY"
              timeFormat={false}
            />

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
              <Close />
            </span>
            <span className={css.headernone}>
              <Header />
            </span>
            <h2 className={css.title}>Add transction</h2>
            <span className={css.switchButton}>
              <p className={css.switchtext}>Income</p>
              <Switch defaultChecked onClick={toggleForm}>
                {showIncomeForm ? 'Income' : 'Expense'}
              </Switch>
              <p className={css.switchtext}>Expense</p>
            </span>
            {showIncomeForm ? <FormIncome /> : <FormExpense />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
