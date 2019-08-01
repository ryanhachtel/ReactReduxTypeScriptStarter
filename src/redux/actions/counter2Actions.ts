export enum Counter2ActionTypes {
	INCREMENT2 = 'INCREMENT2',
	DECREMENT2 = 'DECREMENT2'
};

export function increment2() {
	return <const> {
		type: Counter2ActionTypes.INCREMENT2,
		meta: {
			'pushToHistoryUnderRoute': '/Counter2'
		}
	}
};

export function decrement2() {
	return <const> {
		type: Counter2ActionTypes.DECREMENT2,
		meta: {
			'pushToHistoryUnderRoute': '/Counter2'
		}
	}
};
