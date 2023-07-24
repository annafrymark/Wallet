import React, { useState } from 'react';
import css from './ModalAddTransaction.module.css';
import { ReactComponent as Plus } from '../images/plus.svg';
import { ReactComponent as Close } from '../images/close.svg';
import Header from 'components/shared/Header';
import { Formik, Form, FastField } from 'formik';
import DateTimePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Switch from '@mui/material/Switch';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24CCA7',
    },
  },
  typography: {
    h1: {
      color: '#ffff',
      fontSize: '18px',
    },
  },
});

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
          <ThemeProvider theme={theme}>
            <Form>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={4}>
                  <TextField
                    type="number"
                    label="Price"
                    placeholder="0.00"
                    id="price"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <DateTimePicker
                    label="Date"
                    onChange={handleDateChange}
                    value={selectedDate}
                    format="yyyy-MM-dd"
                    id="date"
                    name="date"
                    renderInput={params => <TextField {...params} />}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    label="Comment"
                    id="comment"
                    name="comment"
                    multiline
                    rows={4}
                    value={values.comment}
                    onChange={handleChange}
                  />
                </Grid>
                <div>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="h1"
                      sx={{
                        textAlign: 'center',
                        color: '#ffff',
                        backgroundColor: 'primary.main',
                      }}
                      disabled={isSubmitting}
                    >
                      ADD
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        color: '#4A56E2',
                        backgroundColor: '#ffff',
                        transform: 'none',
                      }}
                      type="button"
                    >
                      CANCEL
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </Form>
          </ThemeProvider>
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
    <div>
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

            <DateTimePicker
              onChange={handleDateChange}
              value={selectedDate}
              id="date"
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

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
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
            <Switch {...label} defaultChecked onClick={toggleForm}>
              {showIncomeForm ? 'Income' : 'Expense'}
            </Switch>
            {showIncomeForm ? <FormIncome /> : <FormExpense />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
