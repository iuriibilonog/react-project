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
      state.token = '';
      state.isLoggedIn = false;
    },

    [checkCurrentUser.pending](state) {
      state.isCheckingUser = true;
    },

    [checkCurrentUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isCheckingUser = false;
      console.log(action.payload);
      state.user.sid = action?.payload?.newSid;
      state.sid = action?.payload?.newSid;
      state.token = action?.payload?.newAccessToken;
      state.user.token = action?.payload?.newAccessToken;
    },
    [checkCurrentUser.rejected](state) {
      state.isCheckingUser = false;
    },

    [loginFromGoogle.fulfilled](state, action) {
      // state.user = action?.payload;
      // state.token = action?.payload?.accessToken;
      // console.log(action.payload);
      // state.isLoggedIn = true;
      // state.sid = action?.payload?.sid;
    },
    [getUser.fulfilled](state, action) {
      console.log(action.payload);
      state.user = action?.payload?.data;
      state.isLoggedIn = true;
      state.sid = action?.payload?.sid;
      state.user.refreshToken = action?.payload?.refreshToken;
      state.token = action.payload.accessToken;
    },
  },
});

export default authSlice.reducer;
