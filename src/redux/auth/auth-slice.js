import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
  checkCurrentUser,
  loginFromGoogle,
  getUser,
} from './auth-operations';

const initialState = {
  user: { name: '', email: '', password: '' },
  token: '',
  sid: '',
  isLoggedIn: false,
  isCheckingUser: false,
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
      state.sid = action.payload.sid;
    },

    [logOut.fulfilled](state, _) {
      state.user = { name: '', email: '', password: '' };
      state.token = null;
      state.isLoggedIn = false;
    },

    [checkCurrentUser.pending](state) {
      state.isCheckingUser = true;
    },

    [checkCurrentUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isCheckingUser = false;
      console.log(action.payload);
      state.sid = action?.payload?.newSid;
      state.token = action?.payload?.newAccessToken;
    },
    [checkCurrentUser.rejected](state) {
      state.isCheckingUser = false;
    },

    [loginFromGoogle.fulfilled](state, action) {
      // state.user = action?.payload;
      // state.token = action?.payload?.accessToken;
      // state.isLoggedIn = true;
      // state.sid = action?.payload?.sid;
    },
    [getUser.fulfilled](state, action) {
      state.user = action?.payload;
      state.isLoggedIn = true;
      state.sid = action?.payload?.sid;
    },
  },
});

export default authSlice.reducer;
