export enum Counter1ActionTypes {
	INCREMENT1 = 'INCREMENT1',
	DECREMENT1 = 'DECREMENT1'
};

export function increment1() {
	return <const> {
		type: Counter1ActionTypes.INCREMENT1,
		meta: {
			'pushToHistoryUnderRoute': '/Counter1'
		}
	}
};

export function decrement1() {
	return <const> {
		type: Counter1ActionTypes.DECREMENT1,
		meta: {
			'pushToHistoryUnderRoute': '/Counter1'
		}
	}
};

