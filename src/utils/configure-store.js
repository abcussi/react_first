import { createStore, compose } from 'redux';

import createReducer from '../redux';

export function useStore(initialState = {}) {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;

  const store = createStore(createReducer(), initialState, compose);


  return store;
}
