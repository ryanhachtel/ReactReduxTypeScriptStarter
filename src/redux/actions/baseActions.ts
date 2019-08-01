import { IReduxState } from '../store/ReduxTypes';

export enum BaseActionTypes {
	NAVIGATE_TO_ROUTE = 'NAVIGATE_TO_ROUTE',
	HANDLE_POP_STATE = 'HANDLE_POP_STATE'
}

export function navigateToRoute(route: string) {
	return <const> {
		type: BaseActionTypes.NAVIGATE_TO_ROUTE,
		payload: route,
		meta: {
			'pushToHistoryUnderRoute': route
		}
	}
}

export function handlePopState(state: IReduxState) {
	return <const> {
		type: BaseActionTypes.HANDLE_POP_STATE,
		payload: state
	}
}
