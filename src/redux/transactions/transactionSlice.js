import { createSlice } from '@reduxjs/toolkit';
import {
  deleteTransaction,
  fetchTransactions,
  addTransaction,
  getDetailedStatistics,
  getTransactionByCategory,
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
    statistics: {},
    total: {},
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
          transaction => transaction.id === action.payload
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
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(getTransactionByCategory.pending, (state, sction) => { 
        state.isLoading = true;
      })
      .addCase(getTransactionByCategory.fulfilled, (state, action) => {
        state.total = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTransactionByCategory.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getDetailedStatistics.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDetailedStatistics.fulfilled,(state, action) => {
        state.statistics = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDetailedStatistics.rejected, (state, action) => {
        state.error = action.payload;
      })
 

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
