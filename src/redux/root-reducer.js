import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import authReducer from './auth/auth-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: 'filter',
// };

export default rootReducer;
// export const persistedReducer = persistReducer(persistConfig, rootReducer);
