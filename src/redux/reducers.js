import {
  addTransactions,
  setExpenses,
  setIncomes,
  setBalance,
  setIsSystemStarted,
  setIncomesByCategories,
  setExpensesByCategories,
} from '../redux/actions';
// new
import {
  addIncomeTransaction,
  getIncomeTransactions,
  deleteTransaction,
  getExpensesTransactions,
  addExpenseTransaction,
  getExpensesCategories,
  getIncomesCategories,
  updateBalance,
  getDataMonth,
} from './transactions-operations';
// new
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const balanceReducer = createReducer(0, {
  [setBalance]: (_, action) => action.payload,
  [updateBalance.fulfilled]: (_, action) => action.payload,
  [addIncomeTransaction.fulfilled]: (_, action) => action.payload.newBalance,
  [addExpenseTransaction.fulfilled]: (_, action) => action.payload.newBalance,
  [deleteTransaction.fulfilled]: (_, action) => action.payload.data.newBalance,
});

const expensesReducer = createReducer([], {
  [getExpensesTransactions.fulfilled]: (_, action) => action?.payload?.expenses,
  [addExpenseTransaction.fulfilled]: (state, action) => [action?.payload?.transaction, ...state],
  [deleteTransaction.fulfilled]: (state, action) =>
    [...state].filter(item => item._id !== action?.payload.transactionId),
  // [getDataMonth.fulfilled]: (_, action) => action?.payload?.expenses,
});

const incomesReducer = createReducer([], {
  [getIncomeTransactions.fulfilled]: (_, action) => action?.payload?.incomes,
  [addIncomeTransaction.fulfilled]: (state, action) => [action?.payload?.transaction, ...state],
  [deleteTransaction.fulfilled]: (state, action) =>
    [...state].filter(item => item._id !== action?.payload.transactionId),
  // [getDataMonth.fulfilled]: (_, action) => action?.payload?.incomes,
});

const getMonthReducer = createReducer([], {
  [getIncomeTransactions.fulfilled]: (_, action) => action.payload.monthsStats,
  [getExpensesTransactions.fulfilled]: (_, action) => action.payload.monthsStats,
});

// const getNewBalanceReducer = createReducer([], {
//   [addIncomeTransaction.fulfilled]: (_, action) => action.payload.newBalance,
//   [addExpenseTransaction.fulfilled]: (_, action) => action.payload.newBalance,
// });

const getIncomeCategories = createReducer([], {
  [getIncomesCategories.fulfilled]: (_, action) => action.payload,
});

const getExpenseCategories = createReducer([], {
  [getExpensesCategories.fulfilled]: (_, action) => action.payload,
});

const setIncomesByCategory = createReducer([], {
  [setIncomesByCategories]: (state, action) => [...state, action.payload],
});

const setExpensesByCategory = createReducer([], {
  [setExpensesByCategories]: (state, action) => [...state, action.payload],
});

const getDataMonthReducer = createReducer([], {
  [getDataMonth.fulfilled]: (_, action) => action.payload,
});

const loader = createReducer(false, {
  [getIncomeTransactions.pending]: () => true,
  [getIncomeTransactions.fulfilled]: () => false,
  [getIncomeTransactions.rejected]: () => false,
  [addIncomeTransaction.pending]: () => true,
  [addIncomeTransaction.fulfilled]: () => false,
  [addIncomeTransaction.rejected]: () => false,
  [addExpenseTransaction.pending]: () => true,
  [addExpenseTransaction.fulfilled]: () => false,
  [addExpenseTransaction.rejected]: () => false,
  [deleteTransaction.pending]: () => true,
  [deleteTransaction.fulfilled]: () => false,
  [deleteTransaction.rejected]: () => false,
  [getExpensesTransactions.pending]: () => true,
  [getExpensesTransactions.fulfilled]: () => false,
  [getExpensesTransactions.rejected]: () => false,
  [getIncomesCategories.pending]: () => true,
  [getIncomesCategories.fulfilled]: () => false,
  [getIncomesCategories.rejected]: () => false,
  [getExpensesCategories.pending]: () => true,
  [getExpensesCategories.fulfilled]: () => false,
  [getExpensesCategories.rejected]: () => false,
  [setIncomesByCategories.pending]: () => true,
  [setIncomesByCategories.fulfilled]: () => false,
  [setIncomesByCategories.rejected]: () => false,
  [setExpensesByCategories.pending]: () => true,
  [setExpensesByCategories.fulfilled]: () => false,
  [setExpensesByCategories.rejected]: () => false,
  [getDataMonth.pending]: () => true,
  [getDataMonth.fulfilled]: () => false,
  [getDataMonth.rejected]: () => false,
  [setIsSystemStarted.pending]: () => true,
  [setIsSystemStarted.fulfilled]: () => false,
  [setIsSystemStarted.rejected]: () => false,
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  expenses: expensesReducer,
  getMonth: getMonthReducer,
  // newBalance: getNewBalanceReducer,
  incomeCategories: getIncomeCategories,
  expenseCategories: getExpenseCategories,
  expensesByCategory: setExpensesByCategory,
  incomesByCategory: setIncomesByCategory,
  dataMonth: getDataMonthReducer,
});

export const isSystemStartedReducer = createReducer(false, {
  [setIsSystemStarted]: (_, action) => action.payload,
});

export const combinedTransactionsReducer = combineReducers({
  balance: balanceReducer,
  transactions: transactionsReducer,
  isloading: loader,
});
