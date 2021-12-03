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
  socialAuth: false,
  userBalance: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.data;
      // state.isLoggedIn = true;
      state.socialAuth = action.payload.socialAuth;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.data;
      state.token = action.payload.data.accessToken;
      state.isLoggedIn = true;
      state.sid = action.payload.data.sid;
      state.socialAuth = action.payload.socialAuth;
      console.log(action.payload);
      console.log(action.payload.data.userData.balance);
      state.userBalance = action.payload.data.userData.balance;
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
      state.user.sid = action?.payload?.newSid;
      state.sid = action?.payload?.newSid;
      state.token = action?.payload?.newAccessToken;
      state.user.accessToken = action?.payload?.newAccessToken;
      state.user.refreshToken = action?.payload?.newRefreshToken;
      state.userBalance = state.user.userData.balance;
    },
    [checkCurrentUser.rejected](state) {
      state.isCheckingUser = false;
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
