import React, { Component } from "react";
import StoreService from "../services/StoreService";

class ViewStores extends Component {
	constructor(props) {
		super(props);

		this.state = {
			storeId: this.props.match.params.id,
			store: {},
		};
	}

	componentDidMount() {
		StoreService.getStoreById(this.state.storeId).then((res) => {
			this.setState({ store: res.data });
		});
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

				<br></br>
				<div className='card col-md-6 offset-md-3'>
					<h3 className='text-center'> View Store Details</h3>
					<div className='card-body'>
						<table style={{ width: "100%" }}>
							<tr>
								<th>Store Name:</th>
								<td>
									<div>{this.state.store.storeName}</div>
								</td>
							</tr>
							<tr>
								<th>Store Phone No:</th>
								<td>
									<div>{this.state.store.storePhoneNo}</div>
								</td>
							</tr>
							<tr>
								<th>Store Email :</th>
								<td>
									<div>{this.state.store.storeEmail}</div>
								</td>
							</tr>
							<tr>
								<th>Store Address :</th>
								<td>
									<div>{this.state.store.storeAddress}</div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewStores;
