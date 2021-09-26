import React, { Component } from "react";
import AuthService from "../services/AuthService";
import GoogleLoginComponent from "./GoogleLoginComponent";

class LoginComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// step 2
			userName: "",
			userPassword: "",
			errorMessage: "",
		};
		this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
		this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);

		this.loginUser = this.loginUser.bind(this);
	}

	loginUser = (e) => {
		e.preventDefault();
		let user = {
			userName: this.state.userName,
			userPassword: this.state.userPassword,
		};
		console.log("loginuser => " + JSON.stringify(user));

		AuthService.login(user).then(
			() => {
				this.props.history.push("/dash");
				window.location.reload();
			},
			(error) => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				this.setState({
					errorMessage: resMessage,
				});
			}
		);
	};

	changeUserNameHandler = (event) => {
		this.setState({ userName: event.target.value });
	};

	changeUserPasswordHandler = (event) => {
		this.setState({ userPassword: event.target.value });
	};

	cancel() {
		this.props.history.push("/");
	}

	render() {
		return (
			<div>
				<nav
					class='navbar navbar-light , shadow-lg p-3 mb-5'
					style={{ backgroundColor: "rgb(13 51 90)" }}
				>
					<div class='container-fluid'>
						<a class='navbar-brand' href='/'>
							<img
								src='https://www.pngarts.com/files/3/Letter-K-PNG-Image-Background.png'
								height='35'
								alt=''
								loading='eager'
							/>
						</a>
						<div>
							<div class='btn-group' style={{ marginRight: "10px" }}>
								<a
									href='/register'
									class='btn btn-primary'
									style={{ borderRadius: "50px" }}
								>
									Sign up
								</a>
							</div>

							<div class='btn-group' style={{ marginRight: "10px" }}>
								<a
									href='/about'
									class='btn btn-primary'
									style={{ borderRadius: "50px" }}
								>
									About Us
								</a>
							</div>
							<div class='btn-group' style={{ marginRight: "10px" }}>
								<a
									href='/contact'
									class='btn btn-primary'
									style={{ borderRadius: "50px" }}
								>
									Contact Us
								</a>
							</div>
							<div class='btn-group' style={{ marginRight: "10px" }}>
								<a
									href='/tandc'
									class='btn btn-primary'
									style={{ borderRadius: "50px" }}
								>
									Terms and Conditions
								</a>
							</div>
						</div>
					</div>
				</nav>

				<div className='container' style={{ marginTop: "100px" }}>
					<div className='row'>
						<div className='card col-md-6 offset-md-3 offset-md-3'>
							<h1 style={{ textAlign: "center" }}> Login Here </h1>
							<div className='card-body'>
								{this.state.errorMessage && (
									<div className='alert alert-danger' role='alert'>
										{" "}
										{this.state.errorMessage}{" "}
									</div>
								)}
								<form>
									<div className='form-group'>
										<label> User Name : </label>
										<input
											placeholder=' User Name'
											name='userName'
											className='form-control'
											onChange={this.changeUserNameHandler}
										/>
									</div>
									<br />
									<div className='form-group'>
										<label> Password : </label>
										<input
											placeholder='Password'
											name='userPassword'
											className='form-control'
											onChange={this.changeUserPasswordHandler}
										/>
									</div>
									<br />

									<button
										className='btn btn-success'
										onClick={this.loginUser}
										style={{ marginLeft: "35%", width: "29%" }}
									>
										Register
									</button>
									<div style={{ marginLeft: "35%", marginTop: "20px" }}>
										<GoogleLoginComponent />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginComponent;
