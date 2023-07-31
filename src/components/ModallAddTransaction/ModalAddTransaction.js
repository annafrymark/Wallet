import React, { useState } from 'react';
import css from './ModalAddTransaction.module.css';
import { ReactComponent as Plus } from '../images/plus.svg';
import { ReactComponent as Close } from '../images/close.svg';
import Header from 'components/shared/Header';
import { Formik, Form, Field } from 'formik';
import 'react-datetime/css/react-datetime.css';
import Switch from '@mui/material/Switch';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transaction/transactionOperations';
import 'react-datetime/css/react-datetime.css';
// import DateTime from 'react-datetime';
import DateTimePicker from '/packages/x-date-pickers/src/DateTimePicker';

function FormIncome({ onCancel }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());

  const validationSchema = Yup.object().shape({
    price: Yup.number().required('Price is required'),
    date: Yup.date().required('Date is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('FormIncome handleSubmit:', values);
    const { price, date, comment } = values;

    const newTransaction = {
      price,
      date,
      comment,
    };

    dispatch(addTransaction(newTransaction));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        price: '',
        date: new Date(),
        comment: '',
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

          {/* <DateTime
            value={values.date}
            dateFormat="YYYY-MM-DD"
            timeFormat={false}
            inputProps={{
              required: true,
            }}
          /> */}
          <DateTimePicker
            label="Uncontrolled picker"
            defaultValue={setValue}
            views={['year', 'month', 'day']}
            value={value}
          />

          <Field
            className={css.inputFormComment}
            placeholder="Comment"
            as="textarea"
            name="comment"
            rows="4"
          />

          <button className={css.buttonADD} type="submit">
            ADD
          </button>
          <button className={css.buttonCancel} type="button" onClick={onCancel}>
            CANCEL
          </button>
        </Form>
      )}
    </Formik>
  );
}

function FormExpense({ onCancel }) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    price: Yup.number().required('Price is required'),
    date: Yup.date().required('Date is required'),
    category: Yup.string().required('Category is requred'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('FormIncome handleSubmit:', values);
    const { category, price, date, comment } = values;

    const newTransaction = {
      category,
      price,
      date,
      comment,
    };

    dispatch(addTransaction(newTransaction));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        category: '',
        price: '',
        date: new Date(),
        comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Field as="select" name="category">
            <option value="">Select a category</option>
            <option value="Car">Car</option>
            <option value="Main expenses">Main expenses</option>
            <option value="Self care">Self care</option>
            <option value="Child care'">Child care</option>
            <option value="Household products">Household products</option>
            <option value="Education">Education</option>
            <option value="Leisure">Leisure</option>
          </Field>

          <Field placeholder="0.00" type="number" name="price" required />

          {/* <DateTime
            value={values.date}
            dateFormat="YYYY-MM-DD"
            timeFormat={false}
            inputProps={{
              required: true,
            }}
          /> */}

          <Field placeholder="Comment" as="textarea" name="comment" rows="4" />

          <button type="submit">ADD</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </Form>
      )}
    </Formik>
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
    setShowIncomeForm(true);
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
            <div className={css.formContainer}>
              <h2 className={css.title}>Add transction</h2>
              <span className={css.switchButton}>
                <p className={css.switchtext}>Income</p>
                <Switch defaultChecked onClick={toggleForm}>
                  {showIncomeForm ? 'Income' : 'Expense'}
                </Switch>
                <p className={css.switchtext}>Expense</p>
              </span>
              {showIncomeForm ? (
                <FormExpense onCancel={handleCloseModal} />
              ) : (
                <FormIncome onCancel={handleCloseModal} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
