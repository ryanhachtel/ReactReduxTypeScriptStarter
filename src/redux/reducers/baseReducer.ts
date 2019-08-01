import { IBaseState } from '../store/ReduxTypes'
import {
	navigateToRoute,
	handlePopState,
	BaseActionTypes
} from '../actions/baseActions';

type Action = ReturnType<
	typeof navigateToRoute |
	typeof handlePopState
>;

function baseReducer(state: IBaseState = {currentRoute: '/Home'}, action: Action) {
	switch(action.type) {
		case BaseActionTypes.NAVIGATE_TO_ROUTE:
			return {
				...state,
				currentRoute: action.payload
			};
		case BaseActionTypes.HANDLE_POP_STATE:
			return action.payload.base;
		default:
			return state;
	}
}

export default baseReducer;
