import { combineReducers }from 'redux';
import BaseReducer from './baseReducer';
import Counter1Reducer from './counter1Reducer';
import Counter2Reducer from './counter2Reducer';

const app = combineReducers({
	base: BaseReducer,
	counter1: Counter1Reducer,
	counter2: Counter2Reducer
});

export default app;
