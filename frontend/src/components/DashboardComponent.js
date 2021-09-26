import React, { Component } from "react";

class DashboardComponent extends Component {
	constructor(props) {
		super(props);

		this.addStore = this.addStore.bind(this);
		this.editStore = this.editStore.bind(this);
		this.listStore = this.listStore.bind(this);
	}

	addStore() {
		this.props.history.push(`/add-store/_add`);
	}

	//update store redirect method
	editStore(id) {
		this.props.history.push(`/add-store/${id}`);
	}

	listStore(id) {
		this.props.history.push(`/storelist`);
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
									class='btn btn-danger'
									onClick={this.logOut}
									style={{ borderRadius: "50px", backgroundColor: "#fa3c3c" }}
								>
									Logout
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
					Welcome to Know Your Neighbourhood PORTAL
				</h1>
				<div
					style={{
						marginRight: "10px",
						marginTop: "100px",
						marginLeft: "650px",
					}}
				>
					<div class='btn-group' style={{ marginRight: "10px" }}>
						<a
							href='/add-store/_add'
							class='btn btn-primary'
							style={{ borderRadius: "50px" }}
						>
							Add Store
						</a>
					</div>
					<div class='btn-group' style={{ marginRight: "10px" }}>
						<a
							href='/storelist'
							class='btn btn-primary'
							style={{ borderRadius: "50px" }}
						>
							Store List
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default DashboardComponent;
