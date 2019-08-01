import * as React from 'react';
import { connect } from 'react-redux';
import { navigateToRoute } from '../redux/actions/baseActions'
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu } from 'semantic-ui-react';
import History from './History';
import Route from './Route';
import Home from './Home';
import Counter1 from './Counter1';
import Counter2 from './Counter2';


interface IStarterProps {
	navigateToRoute: typeof navigateToRoute;
}

const Starter: React.FunctionComponent<IStarterProps> = ({ navigateToRoute }) => {
	return (
		<div id='root'>
			<Container>
				<Menu>
					<Menu.Item
						name='Home'
						onClick={() => navigateToRoute('/Home')}
					>
						Home
					</Menu.Item>
					<Menu.Item
						name='Counter1'
						onClick={() => navigateToRoute('/Counter1')}
					>
						Counter 1
					</Menu.Item>
					<Menu.Item
						name='Counter2'
						onClick={() => navigateToRoute('/Counter2')}
					>
						Counter 2
					</Menu.Item>
				</Menu>
			</Container>
			<Container>
				<History>
					<Route myRoute={'/Home'}>
						<Home />
					</Route>
					<Route myRoute={'/Counter1'}>
						<Counter1 />
					</Route>
					<Route myRoute={'/Counter2'}>
						<Counter2 />
					</Route>
				</History>
			</Container>
		</div>
	);
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		navigateToRoute: (route: string) => { dispatch(navigateToRoute(route)); }
	}
}

export default connect(null, mapDispatchToProps)(Starter);
