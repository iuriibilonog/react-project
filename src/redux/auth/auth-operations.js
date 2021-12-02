import { createAsyncThunk } from '@reduxjs/toolkit';
import handerGoogleAuth from '../../components/Auth/Auth';
import {
  AddUser,
  token,
  LoginUser,
  LogOutUser,
  CheckUser,
  LoginUserFromGoogle,
  GetUserAfterRefresh,
} from '../../services/api';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, socialAuth }) => {
    try {
      const { data } = await AddUser({ email, password });
      return { data, socialAuth };
    } catch (error) {
      alert(error.message);
    }
  },
);

export const login = createAsyncThunk('auth/login', async ({ email, password, socialAuth }) => {
  try {
    const { data } = await LoginUser({ email, password });
    token.set(data.accessToken);
    return { data, socialAuth };
  } catch (error) {
    alert(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await LogOutUser();
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('sid');

    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const checkCurrentUser = createAsyncThunk('auth/checkUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const currentUserToken = state.auth.token;
  console.log(currentUserToken);

  const userSessionId = state.auth.sid;
  console.log(userSessionId);
  const id = {
    sid: userSessionId,
  };

  if (currentUserToken === null) return thunkAPI.rejectWithValue();

  token.set(currentUserToken);

  try {
    const { data } = await CheckUser(id);
    console.log(data);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

export const loginFromGoogle = createAsyncThunk(
  'auth/google',
  async (handerGoogleAuth, ThunkAPI) => {
    try {
      const { data } = await LoginUserFromGoogle();
      console.log(data);
      handerGoogleAuth(data);
    } catch (error) {
      alert(error.message);
    }
  },
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async ({ accessToken, refreshToken, sid }) => {
    try {
      token.set(accessToken);
      const { data } = await GetUserAfterRefresh();
      console.log(data);
      return { data, refreshToken, sid, accessToken };
    } catch (error) {
      alert(error.message);
    }
  },
);
