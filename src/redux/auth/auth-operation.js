import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectedWithValue, getState }) => {
    try {
      const { auth } = getState;
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectedWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
