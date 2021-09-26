import React, { Component } from "react";
import StoreService from "../services/StoreService";

class AddStoreComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// step 2
			storeId: this.props.match.params.id,
			storeName: "",
			storePhoneNo: "",
			storeEmail: "",
			storeAddress: "",
		};
		this.changeStoreNameHandler = this.changeStoreNameHandler.bind(this);
		this.changeStorePhoneNoHandler = this.changeStorePhoneNoHandler.bind(this);
		this.changeStoreEmailHandler = this.changeStoreEmailHandler.bind(this);
		this.changeStoreAddressHandler = this.changeStoreAddressHandler.bind(this);

		this.saveOrUpdateStore = this.saveOrUpdateStore.bind(this);
	}

	// step 3
	componentDidMount() {
		// step 4
		if (this.state.storeId === "_add") {
			return;
		} else {
			StoreService.getStoreById(this.state.storeId).then((res) => {
				let store = res.data;
				this.setState({
					storeName: store.storeName,
					storePhoneNo: store.storePhoneNo,
					storeEmail: store.storeEmail,
					storeAddress: store.storeAddress,
				});
			});
		}
	}

	saveOrUpdateStore = (e) => {
		e.preventDefault();
		let store = {
			storeName: this.state.storeName,
			storePhoneNo: this.state.storePhoneNo,
			storeEmail: this.state.storeEmail,
			storeAddress: this.state.storeAddress,
		};
		console.log("store => " + JSON.stringify(store));

		// step 5
		if (this.state.storeId === "_add") {
			StoreService.createStore(store).then((res) => {
				this.props.history.push("/dash");
			});
		} else {
			StoreService.updateStore(store, this.state.storeId).then((res) => {
				this.props.history.push("/dash");
			});
		}
	};

	changeStoreNameHandler = (event) => {
		this.setState({ storeName: event.target.value });
	};

	changeStorePhoneNoHandler = (event) => {
		this.setState({ storePhoneNo: event.target.value });
	};

	changeStoreEmailHandler = (event) => {
		this.setState({ storeEmail: event.target.value });
	};

	changeStoreAddressHandler = (event) => {
		this.setState({ storeAddress: event.target.value });
	};

	cancel() {
		this.props.history.push("/stores");
	}

	getTitle() {
		if (this.state.storeId === "_add") {
			return <h3 className='text-center'>Add Store</h3>;
		} else {
			return <h3 className='text-center'>Update Store</h3>;
		}
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

				<div className='container'>
					<div className='row'>
						<div className='card col-md-6 offset-md-3 offset-md-3'>
							<div className='card-body'>
								<form>
									<div className='form-group'>
										<label> Store Name : </label>
										<input
											placeholder='Store Name'
											name='storeName'
											className='form-control'
											onChange={this.changeStoreNameHandler}
										/>
									</div>
									<br />
									<div className='form-group'>
										<label> Store Phone No : </label>
										<input
											placeholder='Store Phone No. :'
											name='storePhoneNo'
											className='form-control'
											onChange={this.changeStorePhoneNoHandler}
										/>
									</div>
									<br />

									<div className='form-group'>
										<label> Store Email : </label>
										<input
											placeholder='Store Email :'
											name='storeEmail'
											className='form-control'
											onChange={this.changeStoreEmailHandler}
										/>
									</div>
									<br />

									<div className='form-group'>
										<label> Store Address : </label>
										<input
											placeholder='Store Address :'
											name='storeAddress'
											className='form-control'
											onChange={this.changeStoreAddressHandler}
										/>
									</div>
									<br />

									<button
										className='btn btn-success'
										onClick={this.saveOrUpdateStore}
									>
										Save
									</button>
									<button
										className='btn btn-danger'
										onClick={this.cancel}
										style={{ marginLeft: "10px" }}
									>
										Cancel
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddStoreComponent;
