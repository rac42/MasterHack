import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { store, persistor } from './Redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.js';
import AuthProvider from './context/AuthProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
      <AuthProvider>
      <ThemeProvider>
        <App />
        </ThemeProvider>
        <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
