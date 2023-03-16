import { createSlice } from '@reduxjs/toolkit';

import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { signup, login, current, logout } from './auth-operation';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        const error = payload ? payload : 'Sorry... Something went wrong...';
        NotificationManager.error(error);
      })

      .addCase(current.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
        const error = payload ? payload : 'Sorry... Something went wrong...';
        NotificationManager.error(error);
      })

      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        const error = payload ? payload : 'Sorry... Something went wrong...';
        NotificationManager.error(error);
      });
  },
});

export default authSlice.reducer;
