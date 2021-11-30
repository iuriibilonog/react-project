import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddUser, token, LoginUser } from '../../services/api';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await AddUser(credentials);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await LoginUser(credentials);

    token.set(data.accessToken);
    return data;
  } catch (error) {
    alert(error.message);
  }
});
