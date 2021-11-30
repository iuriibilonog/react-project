import { createAction } from '@reduxjs/toolkit';

export const setIsSystemStarted = createAction('transactions/setIsSystemStarted');
export const setBalance = createAction('transactions/setBalance');
export const setExpenses = createAction('transactions/setExpenses');
export const setIncomes = createAction('transactions/setIncomes');
export const addTransactions = createAction('transactions/addTransactions');
