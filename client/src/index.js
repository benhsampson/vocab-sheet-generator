import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { injectGlobal } from 'styled-components';

import { store, persistor } from './store';

import registerServiceWorker from './utils/registerServiceWorker';

import base from './constants/base';

import App from './App';

injectGlobal`
  ${base}
`;

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
