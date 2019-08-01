const middleware = (store: any) => (next: any) => (action: any) => {
	if (
		action &&
		action.meta &&
		action.meta['pushToHistoryUnderRoute'] &&
		typeof action.meta['pushToHistoryUnderRoute'] === 'string'
	) {
		const result = next(action);
		const nextState = store.getState();
		window.history.pushState(nextState, '', action.meta.pushToHistoryUnderRoute);
		return result;
	} else {
		return next(action);
	}
}

export default middleware;