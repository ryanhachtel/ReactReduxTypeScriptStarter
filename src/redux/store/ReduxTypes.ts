export interface IReduxState {
	base: IBaseState;
	counter1: ICounter1State;
	counter2: ICounter2State;
}

export interface IBaseState {
	currentRoute: string;
}

export interface ICounter1State {
	count: number;
}

export interface ICounter2State {
	count: number;
}