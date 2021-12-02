import {
  addTransactions,
  setExpenses,
  setIncomes,
  setBalance,
  setIsSystemStarted,
} from '../redux/actions';
// new
import { addIncomeTransaction, getIncomeTransactions, deleteTransaction, getExpensesTransactions, addExpenseTransaction } from './transactions-operations';
// new
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const balanceReducer = createReducer(0, {
  [setBalance]: (_, action) => action.payload,
});

const expensesReducer = createReducer([], {
  [getExpensesTransactions.fulfilled]: (_, action) => action.payload,
  [addExpenseTransaction.fulfilled]: (state, action) => [...state, action.payload],
  [deleteTransaction.fulfilled]: (state, action) =>
    [...state].filter(item => item._id !== action.payload),
});

const incomesReducer = createReducer([], {
  [getIncomeTransactions.fulfilled]: (_, action) => action.payload,
  [addIncomeTransaction.fulfilled]: (state, action) => [...state, action.payload],
  [deleteTransaction.fulfilled]: (state, action) =>
    [...state].filter(item => item._id !== action.payload),
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  expenses: expensesReducer,
})

export const isSystemStartedReducer = createReducer(false, {
  [setIsSystemStarted]: (_, action) => action.payload,
});

export const combinedTransactionsReducer = combineReducers({
  balance: balanceReducer,
  transactions: transactionsReducer,
});
