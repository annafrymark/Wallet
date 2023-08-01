export const getTransactions = state => state.transactions.items;
export const getError = state => state.transactions.error;
export const getIsLoading = state => state.transactions.isLoading;
export const getBalance = state => state.transactions.balance;
export const selectTransactions = state => state.transactions;
export const selectStatistics = state => state.transactions.statistics;
export const selectCategories = state => state.transactions.categories;