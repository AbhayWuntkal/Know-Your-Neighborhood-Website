import React, { Component } from "react";
import AuthService from "../services/AuthService";

class UserComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// step 2
			firstName: "",
			lastName: "",
			email: "",
			userName: "",
			userPassword: "",
		};
		this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
		this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
		this.changeEmailHandler = this.changeEmailHandler.bind(this);
		this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
		this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);

		this.registerUser = this.registerUser.bind(this);
	}

	registerUser = (e) => {
		e.preventDefault();
		let user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			userName: this.state.userName,
			userPassword: this.state.userPassword,
		};
		console.log("user => " + JSON.stringify(user));

		AuthService.register(user).then((res) => {
			console.log("Response is " + JSON.stringify(res) + res.status);
			console.log("Response Stauts is " + res.status);
			if (res.status === 200) {
				this.props.history.push("/login");
			} else {
				this.props.history.push("/register");
			}
		});
	};

	changeFirstNameHandler = (event) => {
		this.setState({ firstName: event.target.value });
	};

	changeLastNameHandler = (event) => {
		this.setState({ lastName: event.target.value });
	};

	changeEmailHandler = (event) => {
		this.setState({ email: event.target.value });
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
									href='/login'
									class='btn btn-primary'
									style={{ borderRadius: "50px" }}
								>
									Sign in
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

				<div
					className='container'
					style={{ marginTop: "30px", marginBottom: "20px" }}
				>
					<div className='row'>
						<div className='card col-md-6 offset-md-3 offset-md-3'>
							<div className='card-body'>
								<h3 className='text-center'>Register Here !!</h3>

								<form>
									<div className='form-group'>
										<label> First Name : </label>
										<input
											placeholder=' User Name'
											name='firstName'
											className='form-control  mt-1'
											onChange={this.changeFirstNameHandler}
										/>
									</div>
									<br />
									<div className='form-group'>
										<label> Last Name : </label>
										<input
											placeholder=' User Name'
											name='lastName'
											className='form-control  mt-1'
											onChange={this.changeLastNameHandler}
										/>
									</div>
									<br />
									<div className='form-group'>
										<label> Email : </label>
										<input
											placeholder=' User Name'
											name='email'
											className='form-control  mt-1'
											onChange={this.changeEmailHandler}
										/>
									</div>
									<br />
									<div className='form-group'>
										<label> User Name : </label>
										<input
											placeholder=' User Name'
											name='userName'
											className='form-control  mt-1'
											onChange={this.changeUserNameHandler}
										/>
									</div>
									<br />
									<div className='form-group mt-2'>
										<label> Password : </label>
										<input
											placeholder='Password'
											name='userPassword'
											className='form-control  mt-1'
											onChange={this.changeUserPasswordHandler}
										/>
									</div>
									<br />
									<div className='row'>
										<div class='col-xl-11 d-flex justify-content-center'>
											<button
												className='btn btn-success'
												onClick={this.registerUser}
											>
												Register
											</button>
											<button
												className='btn btn-danger'
												onClick={this.cancel}
												style={{ marginLeft: "10px" }}
											>
												Cancel
											</button>
										</div>
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

export default UserComponent;
