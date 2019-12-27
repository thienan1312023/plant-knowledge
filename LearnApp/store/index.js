import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

// Import: Redux Root Reducer
import rootReducer from "../reducers/index";
import rootSaga from "../sagsas";

// Imports: Redux Root Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger())
);

sagaMiddleware.run(rootSaga);

export { store };
