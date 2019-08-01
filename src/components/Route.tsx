import * as React from 'react';
import { IReduxState } from '../redux/store/ReduxTypes';
import { connect } from 'react-redux';

interface IRouteProps {
	currentRoute: string;
	myRoute: string;
}

class Route extends React.Component<IRouteProps> {
	constructor(props: IRouteProps) {
		super(props);
	}

	render() {

		const { currentRoute, myRoute } = this.props;

		const section = currentRoute === myRoute ? this.props.children : null;
		return (
			section
		);
	}
}

const mapStateToProps = (state: IReduxState) => ({
	currentRoute: state.base.currentRoute
});

export default connect(mapStateToProps)(Route);
