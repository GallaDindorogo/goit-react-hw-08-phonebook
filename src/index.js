import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import App from 'components/App';
import AuthLayout from 'components/AuthLayout/AuthLayout';

import './index.css';

import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
            <NotificationContainer />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
