import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  fetchTransactions,
  addTransaction,
  //editTransaction,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const calculateBalance = transactions => {
  let balance = 0;

  transactions.forEach(transaction => {
    if (transaction.category === 'Income') {
      balance += transaction.sum;
    } else {
      balance -= transaction.sum;
    }
  });

  return balance;
};

const transactionSlice = createSlice({
  name: 'transactions',

  initialState: {
    items: [],
    balance: 0,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, handlePending)
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.balance = calculateBalance(action.payload);
      })
      .addCase(fetchTransactions.rejected, handleRejected)
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          transaction => transaction.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTransaction.rejected, handleRejected)
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data.push(action.payload);
        // state.items = action.payload;
      })
      .addCase(addTransaction.rejected, handleRejected);

    // [editTransaction.pending]: handlePending,
    // [editTransaction.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     transaction => transaction.id === action.payload.id
    //   );
    //   state.items.splice(index, 1, action.payload);
    // },
    // [editTransaction.rejected]: handleRejected,
  },
});

export const transactionReducer = transactionSlice.reducer;
