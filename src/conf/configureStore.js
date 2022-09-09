import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import Reducer from '../reducers';
import Epic from '../epics';

export default function configureStore(initialState) {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];

  const store = createStore(
    Reducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  epicMiddleware.run(Epic);
  return store;
}
