import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LoginComponent from "./components/LoginComponent";
import AddStoreComponent from "./components/AddStoreComponent";
import ViewStores from "./components/ViewStores";
import UserComponent from "./components/UserComponent";
import FooterComponent from "./components/FooterComponent";
import ListStoreComponent from "./components/ListStoreComponent";
import DashboardComponent from "./components/DashboardComponent";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Stores from "./components/Stores";
import TermsAndConditions from "./components/TermsAndConditions";
import GoogleDashboard from "./components/GoogleDashboard";
import HeaderComponent from "./components/HeaderComponent";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/google' component={HeaderComponent}></Route>
				</Switch>
			</Router>
			<Router>
				<div style={{ overflowX: "hidden" }}>
					<Switch>
						<Route path='/' exact component={Home}></Route>
						<Route path='/users' component={Home}></Route>
						<Route path='/contact' component={ContactUs}></Route>
						<Route path='/about' component={AboutUs}></Route>
						<Route path='/tandc' component={TermsAndConditions}></Route>
						<Route path='/register' component={UserComponent}></Route>
						<Route path='/login' component={LoginComponent}></Route>
						<Route
							path='/add-store/:id'
							exact
							component={AddStoreComponent}
						></Route>
						<Route path='/storelist' component={ListStoreComponent}></Route>
						<Route
							path='/search-store/:searchKeyword'
							component={Stores}
						></Route>
						<Route path='/view-store/:id' component={ViewStores}></Route>
						<Route path='/dash' component={DashboardComponent}></Route>
						<Route path='/google' component={GoogleDashboard}></Route>
					</Switch>
				</div>
				<FooterComponent />
			</Router>
		</div>
	);
}

export default App;
