import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.DB_URI;

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async transaction => {
    const response = await axios.post('/transaction', transaction);
    return response.data;
  }
);
