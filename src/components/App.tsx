import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Starter from './Starter';

ReactDom.render(
	<Provider store={store}>
		<Starter />
	</Provider>,
	document.body
);