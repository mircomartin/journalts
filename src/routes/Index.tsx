import { Redirect, Switch } from 'react-router';
import { AuthRoutes } from './AuthRoutes';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../redux/types';
import { bindActionCreators } from 'redux';
import { authActions, notesActions, State } from '../redux';
import { PublicRoute } from './PublicRoutes';
import { PrivateRoute } from './PrivateRoutes';

export const Routes = () => {
	const dispatch = useDispatch();
	const { setChecking, setLogged, unLogged } = bindActionCreators(authActions, dispatch);
	const { startLoadingNotes } = bindActionCreators(notesActions, dispatch);

	const { checking, logged } = useSelector((state: State) => state.auth);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged (auth, (user) => {
			if (user?.uid) {
				const { uid, displayName } = user;
				dispatch({
					type: ActionType.LOGIN,
					payload: {
						uid,
						displayName,
					},
				});

				setLogged();

				startLoadingNotes(uid)

			} else {

				unLogged();

			}

			setChecking();
		});
		// eslint-disable-next-line
	}, []);

	if (checking) {
		return (
			<div
				style={{
					backgroundColor: '#5C62C5',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '30px',
				}}
			>
				Loading...
			</div>
		);
	}

	return (
		<div>
			<Switch>
				<PublicRoute
					path="/auth"
					component={AuthRoutes}
					isAuthenticated={logged}
				/>
				<PrivateRoute
					exact
					path="/"
					component={JournalScreen}
					isAuthenticated={logged}
				/>

				<Redirect to="/auth/login" />
			</Switch>
		</div>
	);
};
