import {
  addTransactions,
  setExpenses,
  setIncomes,
  setBalance,
  setIsSystemStarted,
} from '../redux/actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const balanceReducer = createReducer(0, {
  [setBalance]: (_, action) => action.payload,
});

const transactionsReducer = createReducer([], {
  [addTransactions]: (state, action) => [...state, action.payload],
});

const expensesReducer = createReducer(0, {
  [setExpenses]: (_, action) => action.payload,
});

const incomesReducer = createReducer(0, {
  [setIncomes]: (_, action) => action.payload,
});

export const isSystemStartedReducer = createReducer(false, {
  [setIsSystemStarted]: (_, action) => action.payload,
});

export const combinedTransactionsReducer = combineReducers({
  balance: balanceReducer,
  transactions: transactionsReducer,
  expenses: expensesReducer,
  incomes: incomesReducer,
});
