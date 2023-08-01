import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4000/api';
//axios.defaults.baseURL = 'http://localhost:3000/wallet';

function sortTransactionsByDate(transactions) {
  return transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transactions');
      const transactions = response.data.data.transactions;
      const sortedTransactions = sortTransactionsByDate(transactions);
      return sortedTransactions;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (transactionData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/transactions', transactionData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/transactions/${transactionId}`);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
