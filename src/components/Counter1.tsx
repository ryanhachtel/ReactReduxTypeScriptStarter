import * as React from 'react';
import { connect } from 'react-redux';
import { IReduxState } from '../redux/store/ReduxTypes';
import { increment1, decrement1 } from '../redux/actions/counter1Actions';
import { Container, Button } from 'semantic-ui-react';

interface ICounter1Props {
	increment: () => void;
	decrement: () => void;
	count: number;
}

const Counter1: React.FunctionComponent<ICounter1Props> = ({ increment, decrement, count }) => {
	return (
		<Container>
			Current Count is: {count}
			<Button onClick={increment}> +1 </Button>
			<Button onClick={decrement}> -1 </Button>
		</Container>
	)
}

const mapStateToProps = (state: IReduxState) => {
	return {
		count: state.counter1.count
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		increment: () => { dispatch(increment1()); },
		decrement: () => { dispatch(decrement1()); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
