import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

import * as api from '../../schare/services/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectedWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      return rejectedWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectedWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      return rejectedWithValue(response);
    }
  }
);
