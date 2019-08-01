import { all, fork, delay, takeEvery } from 'redux-saga/effects';
import {
	SagaActionTypes
} from '../actions/sagaActions';

function* HelloWorldSaga() {
	yield delay(1000);
	console.log('Hello World Saga')
}

function* watchHelloWorldSaga() {
	yield takeEvery(SagaActionTypes.HELLO_WORLD, HelloWorldSaga);
}

export default function* rootSaga() {
	yield all([
		fork(watchHelloWorldSaga)
	]);
}

