import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:4000/api';
//axios.defaults.baseURL = 'http://localhost:3000/wallet';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

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
export const editTransaction = createAsyncThunk(
  'transactions/editTransaction',
  async (editedTransaction, thunkAPI) => {
    try {
      const response = await axios.put(
        `transactions/${editedTransaction.id}`,
        `http://localhost:4000/api/transactions/${editedTransaction.id}`,

        editedTransaction
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
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

export const getTransactionByCategory = createAsyncThunk(
  'transactions/getTransactionByCategory',
  async (category, thunkAPI) => {
    try {
      const res = await axios.get(`/transactions/${category}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDetailedStatistics = createAsyncThunk(
  'transactions/getDetailedStatistics',
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await axios.get(`/transactions/${month}/${year}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
