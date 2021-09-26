import React, { Component } from "react";

class Home extends Component {
	constructor(props) {
		super(props);

		this.addUser = this.addUser.bind(this);
		this.addCar = this.addCar.bind(this);
		this.login = this.login.bind(this);
	}

	addUser() {
		this.props.history.push(`/register`);
	}

	addCar() {
		this.props.history.push(`/addCar`);
	}

	login() {
		this.props.history.push(`/login`);
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

				<h1
					style={{ textAlign: "center", marginTop: "200px", color: "#b3d3f5" }}
				>
					Welcome to Know Your Neighbourhood Portal :)
				</h1>
			</div>
		);
	}
}

export default Home;
