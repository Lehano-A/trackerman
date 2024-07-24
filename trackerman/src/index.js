import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { store } from './redux/store/store';
import { Provider } from 'react-redux'
import GlobalStyle from './globalStyle/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

