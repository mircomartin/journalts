import React from 'react';
import ReactDOM from 'react-dom';
import { JournalApp } from './JournalApp';
import { BrowserRouter as Router } from "react-router-dom";

import './styles/styles.scss'

import { Provider } from 'react-redux';
import { store } from './redux';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <JournalApp />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

