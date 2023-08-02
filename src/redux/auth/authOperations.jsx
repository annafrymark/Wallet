import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

// axios.defaults.baseURL = process.env.DB_URI;
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const setAuthHeader = token => { 
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => { 
    axios.defaults.headers.common.Authorization = '';
};


const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => { 
    try {
        console.log(credentials);
        const response = await axios.post('/users/register', credentials);
        setAuthHeader(response.data.token);
        Notiflix.Notify.success('Registration successful.', {
            position: 'center-top',
            closeButton: false,
            timeout: 2000,
            width: '350px',
        });
        return response.data;
    } catch (error) { 
        Notiflix.Notify.failure(`${error.message}`, {
            position: 'center-top',
            closeButton: false,
            timeout: 2000,
            width: '350px',
        });
        return thunkAPI.rejectWithValue(error.message);
    }
});

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    setAuthHeader(response.data.token);
    Notiflix.Notify.success('Login successful. ', {
      position: 'center-top',
      closeButton: false,
      timeout: 2000,
      width: '350px',
    });
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(`${error.message}`, {
      position: 'center-top',
      closeButton: false,
      timeout: 2000,
      width: '350px',
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    Notiflix.Notify.failure(`${error.message}`, {
      position: 'center-top',
      closeButton: false,
      timeout: 2000,
      width: '350px',
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});




const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
  
    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to authenticate');
    }

    try { 
        setAuthHeader(persistedToken);
        const response = await axios.get(`/users/current`);
        const user = response.data;
        if (!user) { 
            return thunkAPI.rejectWithValue('Unable to authentocate.');
        }

        return user;

    } catch (error) { 
        Notiflix.Notify.failure(`${error.message}`, {
            position: 'center-top',
            closeButton: false,
            timeout: 2000,
            width: '350px',
        });

        return thunkAPI.rejectWithValue(error.message);
    }

});

export { setAuthHeader, clearAuthHeader };

export { register, logIn, logOut,refreshUser };