import {
  addTransactions,
  setExpenses,
  setIncomes,
  setBalance,
  setIsSystemStarted,
} from '../redux/actions';
// new
import {
  addIncomeTransaction,
  getIncomeTransactions,
  deleteTransaction,
  getExpensesTransactions,
  addExpenseTransaction,
} from './transactions-operations';
// new
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const balanceReducer = createReducer(0, {
  [setBalance]: (_, action) => action.payload,
});

const expensesReducer = createReducer([], {
  [getExpensesTransactions.fulfilled]: (_, action) => action.payload.expenses,
  [addExpenseTransaction.fulfilled]: (state, action) => [...state, action.payload.expenses],
  [deleteTransaction.fulfilled]: (state, action) =>
    [...state].filter(item => item._id !== action.payload),
});

const incomesReducer = createReducer([], {
  [getIncomeTransactions.fulfilled]: (_, action) => action.payload.incomes,
  [addIncomeTransaction.fulfilled]: (state, action) => [...state, action.payload.incomes],
  [deleteTransaction.fulfilled]: (state, action) =>
    [...state].filter(item => item._id !== action.payload),
});

const getMonthReducer = createReducer([], {
  [getIncomeTransactions.fulfilled]: (_, action) => action.payload.monthsStats,

  [getExpensesTransactions.fulfilled]: (_, action) => action.payload.monthsStats,
});

const getNewBalanceReducer = createReducer([], {
  [addIncomeTransaction.fulfilled]: (_, action) => action.payload.newBalance,

  [addExpenseTransaction.fulfilled]: (_, action) => action.payload.newBalance,
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  expenses: expensesReducer,
  getMonth: getMonthReducer,
  newBalance: getNewBalanceReducer,
});

export const isSystemStartedReducer = createReducer(false, {
  [setIsSystemStarted]: (_, action) => action.payload,
});

export const combinedTransactionsReducer = combineReducers({
  balance: balanceReducer,
  transactions: transactionsReducer,
});
