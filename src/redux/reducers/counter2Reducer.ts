import { ICounter1State } from '../store/ReduxTypes';
import {
	increment2,
	decrement2,
	Counter2ActionTypes
} from '../actions/counter2Actions';
import {
	handlePopState,
	BaseActionTypes
} from '../actions/baseActions';

type Action = ReturnType<
	typeof increment2 |
	typeof decrement2 |
	typeof handlePopState
>;

function counter2Reducer(state: ICounter1State = {count: 0}, action: Action ) {
	switch(action.type) {
		case Counter2ActionTypes.INCREMENT2:
			return {
				count: state.count + 2
			};
		case Counter2ActionTypes.DECREMENT2:
			return {
				count: state.count - 2
			};
		case BaseActionTypes.HANDLE_POP_STATE:
			return action.payload.counter2;
		default:
			return state;
	}
}

export default counter2Reducer;
