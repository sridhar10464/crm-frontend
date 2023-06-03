import React from 'react';
import './App.css';
import { Entry } from './page/entry/EntryPage';
// import { DefaultLayout } from './Layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard';
import { AddToken } from './page/new-token/AddToken';
import { TicketList } from './page/ticket-listing/TicketList';
import { Ticket } from './page/ticket/Ticket';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/private-Route/PrivateRoute';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Entry />
					</Route>
					{/* <Route exact path="/registration">
						<Registration />
					</Route> */}
					{/* <Route exact path="/password-reset">
						<PasswordOtpForm />
					</Route> */}
					{/* <Route exact path="/verification/:_id/:email">
						<UserVerification />
					</Route> */}

					<PrivateRoute exact path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute exact path="/add-ticket">
						<AddToken />
					</PrivateRoute>
					<PrivateRoute exact path="/ticket/:tId">
						<Ticket />
					</PrivateRoute>
					<PrivateRoute exact path="/tickets">
						<TicketList />
					</PrivateRoute>

					<Route path="*">
						<h1>404 Page not found</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
