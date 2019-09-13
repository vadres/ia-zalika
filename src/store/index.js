import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "../config/rootReducer"
import rootSaga from "../config/rootSaga" 

const sagaMiddleware = createSagaMiddleware()

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
       && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(sagaMiddleware)(createStore)(rootReducer, devTools)

sagaMiddleware.run(rootSaga)

export default store;
