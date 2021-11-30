import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddUser, token } from '../../services/api';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log(credentials);
    const { data } = await AddUser(credentials);
    console.log(data);
    // token.set(data.token);
    return data;
  } catch (error) {
    alert(error.message);
  }
});
