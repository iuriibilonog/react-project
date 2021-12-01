import {
  addTransactions,
  setExpenses,
  setIncomes,
  setBalance,
  setIsSystemStarted,
} from '../redux/actions';
// new
import { addIncomeTransaction, getIncomeTransactions } from './transactions-operations';
// new
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const balanceReducer = createReducer(0, {
  [setBalance]: (_, action) => action.payload,
});

const expensesReducer = createReducer(0, {
  [setExpenses]: (_, action) => action.payload,
});

const incomesReducer = createReducer(0, {
  [getIncomeTransactions.fulfilled]: (_, action) => action.payload,
  [addIncomeTransaction.fulfilled]: (state, action) => [...state, action.payload],
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  expences: expensesReducer,
})

export const isSystemStartedReducer = createReducer(false, {
  [setIsSystemStarted]: (_, action) => action.payload,
});

export const combinedTransactionsReducer = combineReducers({
  balance: balanceReducer,
  transactions: transactionsReducer,
});
