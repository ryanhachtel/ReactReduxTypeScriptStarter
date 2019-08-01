import * as React from 'react';
import { connect } from 'react-redux';
import { IReduxState } from '../redux/store/ReduxTypes';
import { increment2, decrement2 } from '../redux/actions/counter2Actions';
import { Container, Button } from 'semantic-ui-react';

interface ICounter2Props {
	increment: () => void;
	decrement: () => void;
	count: number;
}

const Counter2: React.FunctionComponent<ICounter2Props> = ({ increment, decrement, count }) => {
	return (
		<Container>
			Current Count is: {count}
			<Button onClick={increment}> +2 </Button>
			<Button onClick={decrement}> -2 </Button>
		</Container>
	)
}

const mapStateToProps = (state: IReduxState) => {
	return {
		count: state.counter2.count
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		increment: () => { dispatch(increment2()); },
		decrement: () => { dispatch(decrement2()); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);