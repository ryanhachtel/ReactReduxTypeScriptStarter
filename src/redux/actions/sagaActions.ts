export enum SagaActionTypes {
	HELLO_WORLD = 'HELLO_WORLD'
};

export function helloWorld() {
	return {
		type: SagaActionTypes.HELLO_WORLD
	}
};
