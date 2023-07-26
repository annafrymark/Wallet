import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4000/api';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transactions');
      console.log(response.data.data.transactions);
      return response.data.data.transactions;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/transactions/:${transactionId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
