import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4000/api';

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
