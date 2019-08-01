import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppReducer from '../reducers';
import RootSaga from '../sagas';
import Html5HistoryMiddleware from '../middleware/Html5HistoryMiddleware';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	AppReducer,
	applyMiddleware(sagaMiddleware, Html5HistoryMiddleware)
);

sagaMiddleware.run(RootSaga);
export default store;
