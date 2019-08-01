import { ICounter1State } from '../store/ReduxTypes';
import {
	increment1,
	decrement1,
	Counter1ActionTypes
} from '../actions/counter1Actions';
import {
	handlePopState,
	BaseActionTypes
} from '../actions/baseActions';


type Action = ReturnType<
	typeof increment1 |
	typeof decrement1 |
	typeof handlePopState
>;

function counter1Reducer(state: ICounter1State = {count: 0}, action: Action ) {
	switch(action.type) {
		case Counter1ActionTypes.INCREMENT1:
			return {
				count: state.count + 1
			};
		case Counter1ActionTypes.DECREMENT1:
			return {
				count: state.count - 1
			};
		case BaseActionTypes.HANDLE_POP_STATE:
			return action.payload.counter1;
		default:
			return state;
	}
}

export default counter1Reducer;
