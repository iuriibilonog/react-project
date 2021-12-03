import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addIncomeTransaction = createAsyncThunk(
  'transactions/addIncome',
  async transaction => {
    try {
      const { data } = await axios.post('/transaction/income', transaction);
      // returns newBalance and new transaction
      console.log(data);
      return data;
    } catch (error) {
      alert(error.message);
    }
  },
);

export const getIncomeTransactions = createAsyncThunk('transactions/getIncomes', async () => {
  try {
    const { data } = await axios.get('/transaction/income');
    // we receive incomes and monthly stats - I use only incomes so far

    return data;
  } catch (error) {
    alert(error.message);
  }
});

export const addExpenseTransaction = createAsyncThunk(
  'transactions/addExpense',
  async transaction => {
    try {
      const { data } = await axios.post('/transaction/expense', transaction);
      // returns newBalance and new transaction
      return data;
    } catch (error) {
      alert(error.message);
    }
  },
);

export const getExpensesTransactions = createAsyncThunk('transactions/getExpenses', async () => {
  try {
    const { data } = await axios.get('/transaction/expense');

    // we receive expenses and monthly stats - I use only incomes so far
    return data;
  } catch (error) {
    alert(error.message);
  }
});

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async transactionId => {
    try {
      axios.delete(`/transaction/${transactionId}`);
      return transactionId;
    } catch (error) {
      alert(error.message);
    }
  },
);

export const getIncomesCategories = createAsyncThunk(
  'transactions/getIncomesCategories',
  async () => {
    try {
      const { data } = await axios.get('/transaction/income-categories');
      // we receive incomes and monthly stats - I use only incomes so far

      return data;
    } catch (error) {
      alert(error.message);
    }
  },
);

export const getExpensesCategories = createAsyncThunk(
  'transactions/getExpensesCategories',
  async () => {
    try {
      const { data } = await axios.get('/transaction/expense-categories');
      // we receive incomes and monthly stats - I use only incomes so far

      return data;
    } catch (error) {
      alert(error.message);
    }
  },
);

export const updateBalance = createAsyncThunk('transactions/updateBalance', async balance => {
  try {
    const { data } = await axios.patch('/user/balance', balance);
    console.log('!!!!!!!!!!!!!', data);
    return data.newBalance;
  } catch (error) {
    alert(error.message);
  }
});
