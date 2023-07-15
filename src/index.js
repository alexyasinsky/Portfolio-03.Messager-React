import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {persistor, store} from "./store";
import {CircularProgress} from "@mui/material";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
