import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './auth-operations';

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
  },
});

export default authSlice.reducer;
