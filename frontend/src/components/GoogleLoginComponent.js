import GoogleLogin from "react-google-login";
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import authHeader from "../services/auth-header";

class GoogleLoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			email: "",
		};
	}

	responseGoogle = (response) => {
		console.log("Google Login Component ");
		console.log("Login " + response.profileObj.email);

		if (response.accessToken) {
			// localStorage.setItem("user",auth_data);
			localStorage.setItem("user", JSON.stringify(response));
		}
		authHeader();
		this.props.history.push("/google");
		window.location.reload();
	};

	render() {
		return (
			<div>
				<GoogleLogin
					clientId='985929364171-70cuuicu06dvce8f945ht5304h1v2s56.apps.googleusercontent.com'
					buttonText='Login with Google'
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
				/>
			</div>
		);
	}
}
export default withRouter(GoogleLoginComponent);
