import { createSlice } from '@reduxjs/toolkit';
import { register, refreshUser } from './authOperations';


const initialState = {
    user: {
        username: '',
        email: ''
    },
    token: null,
    isAuth: false,
    error: null,
    isRefreshing: false,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => { 
        builder
            .addCase(register.fulfilled, (state, action) => { 
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => { 
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(register.pending, (state) => { 
                state.isRefreshing = true;
            })
            .addCase(refreshUser.pending, (state) => { 
                state.isRefreshing = true;
            })
            .addCase(register.rejected, (state, action) => { 
                state.isRefreshing = false;
                state.error = action.payload;
            })
            .addCase(refreshUser.rejected, (state, action) => { 
                state.isRefreshing = false;
                state.error = action.error;
            })
    }
});

export const authReducer = authSlice.reducer;
