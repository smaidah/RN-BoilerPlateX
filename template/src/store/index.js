import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const rootReducer = combineReducers({ ...reducers });

function configureStoreProd(initialState = {}) {
  const middlewares = [thunk];

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}

function configureStoreDev(initialState = {}) {
  const middlewares = [thunk];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}

const configureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

const store = configureStore();

export const actionWrapper = (type, payload) => ({ type, payload });

export default store;
