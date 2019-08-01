import * as React from 'react';
import { connect } from 'react-redux';
import { handlePopState } from '../redux/actions/baseActions';

interface IHistoryProps {
	handlePopState: typeof handlePopState;
}

class History extends React.Component<IHistoryProps> {
	componentDidMount() {
		window.addEventListener("popstate", this.handlePopState);
	}

	handlePopState = (event: PopStateEvent) => {
		this.props.handlePopState(event.state);
	}

	render() {
		return this.props.children;
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		handlePopState: (state: any) => { dispatch(handlePopState(state)); }
	}
}

export default connect(null, mapDispatchToProps)(History);
