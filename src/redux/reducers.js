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
} from './transactions-operations';
// new
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const balanceReducer = createReducer(0, {
  [setBalance]: (_, action) => action.payload,
  [updateBalance.fulfilled]: (_, action) => action.payload,
});

const expensesReducer = createReducer([], {
  [getExpensesTransactions.fulfilled]: (_, action) => action.payload.expenses,
  [addExpenseTransaction.fulfilled]: (state, action) => [...state, action.payload.transaction],
  [deleteTransaction.fulfilled]: (state, action) =>
    [...state].filter(item => item._id !== action.payload),
});

const incomesReducer = createReducer([], {
  [getIncomeTransactions.fulfilled]: (_, action) => action?.payload?.incomes,
  [addIncomeTransaction.fulfilled]: (state, action) => [...state, action.payload.transaction],
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

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  expenses: expensesReducer,
  getMonth: getMonthReducer,
  // newBalance: getNewBalanceReducer,
  incomeCategories: getIncomeCategories,
  expenseCategories: getExpenseCategories,
  expensesByCategory: setExpensesByCategory,
  incomesByCategory: setIncomesByCategory,
});

export const isSystemStartedReducer = createReducer(false, {
  [setIsSystemStarted]: (_, action) => action.payload,
});

export const combinedTransactionsReducer = combineReducers({
  balance: balanceReducer,
  transactions: transactionsReducer,
});
