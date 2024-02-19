import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './jsx/components/App.jsx';
import { store } from './jsx/redux/store';
import { Provider } from 'react-redux';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
