// import { createSlice } from '@reduxjs/toolkit';

// const transactionsSlice = createSlice({
//   name: 'transactions',
//   initialState: [],
//   reducers: {
//     addTransactionSuccess: (state, action) => {
//       state.push(action.payload);
//     },
//     addTransactionFailure: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { addTransactionSuccess, addTransactionFailure } =
//   transactionsSlice.actions;

// export default transactionsSlice.reducer;

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addTransaction.pending, state => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(addTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data.push(action.payload);
    });

    builder.addCase(addTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default transactionSlice.reducer;
