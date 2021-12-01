import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { AddUser, token, LoginUser, LogOutUser } from '../../services/api';

export const addIncomeTransaction = createAsyncThunk(
  'transactions/addIncome',
  async transaction => {
    try {
      const { data } = await axios.post('/transaction/income', transaction);
      // returns newBalance and new transaction
      console.log(data)
      return data.transaction;
    } catch (error) {
      alert(error.message);
    }
  },
);

export const getIncomeTransactions = createAsyncThunk('transactions/getIncomes', async ()=> {
    try {
      const { data } = await axios.get('/transaction/income');
      // we receive incomes and monthly stats - I use only incomes so far
      console.log(data);
      return data.incomes;
    } catch (error) {
      alert(error.message);
    }
})

export const deleteTransaction = createAsyncThunk('transactions/deleteTransaction', async transactionId => {
  try {
    axios.delete('/transaction/', transactionId)
    return transactionId
  }
  catch (error) {
    alert(error.message)
  }
})