import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

const initialState = {
  user: { name: '', email: '', password: '' },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      console.log('action -->', action);
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
