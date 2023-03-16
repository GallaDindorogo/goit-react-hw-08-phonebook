import { createAsyncThunk } from '@reduxjs/toolkit';

import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import {
  getAllContacts,
  deleteContacts,
  addContacts,
} from 'schare/services/contacts-api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();
      const result = contacts.items.find(({ name, number }) => {
        return (
          name.toLowerCase() === normalizedName ||
          number.toLowerCase() === normalizedNumber
        );
      });
      console.log(result);
      if (result) {
        NotificationManager.info(`${name}. Tel. ${number} is already exist`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await deleteContacts(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
