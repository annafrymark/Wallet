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
// import { handleSubmit } from './transactionUtils';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transaction/transactionOperations';

const validationSchema = Yup.object().shape({
  price: Yup.number().required('Price is required'),
  date: Yup.date().required('Date is required'),
  category: Yup.string().required('Category is requred'),
});

// function FormIncome({ onCancel }) {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const dispatch = useDispatch();
//   const handleDateChange = date => {
//     setSelectedDate(date);
//   };
//   const initialValuesInCome = {
//     price: '',
//     selectedDate: null,
//     comment: '',
//   };

//   // const handleFormSubmit = async (values, formikHelpers) => {
//   //   const { resetForm, setSubmitting } = formikHelpers;
//   //   const newTransaction = {
//   //     dispatch,
//   //     price: values.price,
//   //     date: values.date,
//   //     comment: values.comment,
//   //     type: 'income',
//   //   };

//   //   try {
//   //     await dispatch(addTransaction(newTransaction));
//   //   } catch (error) {
//   //     console.error('Transaction submission error:', error);
//   //   }
//   //   resetForm();
//   //   setSubmitting(false);
//   // };

//   const onSubmit = async (values, formikHelpers) => {
//     const { resetForm, setSubmitting } = formikHelpers;

//     const newTransaction = {
//       price: values.price,
//       date: values.date,
//       comment: values.comment,
//     };

//     await dispatch(addTransaction(newTransaction));

//     resetForm();
//     setSubmitting(false);
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();
//     formik.submitForm(); // Dodaj tę linię, aby wywołać funkcję onSubmit z Formik
//   };
//   const formik = useFormik({
//     initialValues: initialValuesInCome,
//     validationSchema: validationSchema,
//     onSubmit: handleFormSubmit,
//   });

//   return (
//     <div>
//       <Formik
//         initialValues={formik.initialValues}
//         validationSchema={formik.validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ values, handleChange, setFieldValue, isSubmitting }) => (
//           <Form onSubmit={handleFormSubmit}>
//             <FastField
//               type="number"
//               placeholder="0.00"
//               id="price"
//               name="price"
//               value={values.price}
//               onChange={handleChange}
//             />

//             <DateTime
//               dateFormat="DD-MM-YYYY"
//               timeFormat={false}
//               onChange={handleDateChange}
//               value={selectedDate}
//               id="date"
//               name="date"
//               className={css.dateTime}
//             />

//             <FastField
//               placeholder="Comment"
//               id="comment"
//               name="comment"
//               multiline
//               rows={4}
//               value={values.comment}
//               onChange={handleChange}
//             />

//             <div>
//               <button onClick={handleFormSubmit} disabled={isSubmitting}>
//                 ADD
//               </button>

//               <button type="button" onClick={onCancel}>
//                 CANCEL
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

function FormIncome({ onCancel }) {
  const [price, setPrice] = useState('');
  const [comment, setComment] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };
  // const initialValuesInCome = {
  //   price: '',
  //   selectedDate: null,
  //   comment: '',
  // };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'price':
        setPrice(value);
        break;

      case 'date':
        setSelectedDate(value);
        break;

      case 'comment':
        setComment(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newTransaction = {
      price,
      date: selectedDate,
      comment,
    };

    dispatch(addTransaction(newTransaction));
    setPrice('');
    setSelectedDate(new Date());
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Price
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date
        <input
          type="date"
          name="date"
          value={selectedDate}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Comment
        <textarea
          name="comment"
          value={comment}
          onChange={handleChange}
          rows="4"
        />
      </label>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

function FormExpense({ onCancel }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleSubmit = async (values, formikHelpers) => {
    const { resetForm, setSubmitting } = formikHelpers;

    const newTransaction = {
      category: values.category,
      price: values.price,
      date: values.date,
      comment: values.comment,
    };

    try {
      await dispatch(addTransaction(newTransaction));
      resetForm();
    } catch (error) {
      console.error('Transaction submission error:', error);
    }
    setSubmitting(false);
  };

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
            <button tyle="button" onClick={onCancel}>
              CANCEL
            </button>
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
  const handleSubmitIncome = (values, { resetForm, setSubmitting }) => {
    // Tutaj umieść logikę dodawania transakcji do backendu
    console.log('Adding income transaction:', values);
    // Możesz również dodać dispatch tutaj, jeśli potrzebujesz
    // dispatch(addTransaction(values));

    resetForm();
    setSubmitting(false);
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
            {showIncomeForm ? (
              <FormIncome
                onCancel={handleCloseModal}
                handleSubmit={handleSubmitIncome}
              />
            ) : (
              <FormExpense onCancel={handleCloseModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
