import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(`users/register`);

export const logIn = createAsyncThunk(`users/logIn`);
