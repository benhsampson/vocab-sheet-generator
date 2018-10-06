import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cards'],
};

const initialState = {};

const middleware = [thunk];

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
  // window.__REDUX_DEVTOOLS_EXTENSION__
  //   ? compose(window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware))
  //   : applyMiddleware(...middleware),
);

const persistor = persistStore(store);

export { store, persistor };
