import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import GlobalStyles from './styles';
import App from './components/App';
import reducer from './modules/reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root'),
);
