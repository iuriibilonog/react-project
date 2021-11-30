import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './auth-operations';

const initialState = {
  user: { name: '', email: '', password: '' },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: '', email: '', password: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
