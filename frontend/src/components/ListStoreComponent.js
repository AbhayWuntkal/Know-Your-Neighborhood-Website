import React, { Component } from "react";
import StoreService from "../services/StoreService";

class ListStoreComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stores: [],
			searchKeyword: "",
		};
		this.addStore = this.addStore.bind(this);
		this.editStore = this.editStore.bind(this);
		this.deleteStore = this.deleteStore.bind(this);
		this.searchStore = this.searchStore.bind(this);
	}

	componentDidMount() {
		StoreService.getStores().then((res) => {
			this.setState({ stores: res.data });
		});
	}

	editStore(id) {
		this.props.history.push(`/add-store/${id}`);
	}
	deleteStore(id) {
		StoreService.deleteStore(id).then((res) => {
			this.setState({
				stores: this.state.stores.filter((store) => store.storeId !== id),
			});
		});
	}
	viewStore(id) {
		this.props.history.push(`/view-store/${id}`);
	}

	addStore() {
		this.props.history.push("/add-store/_add");
	}

	changeSearchHandler = (event) => {
		console.log("search Handler");
		this.setState({ searchKeyword: event.target.value });
	};

	searchStore(searchKeyword) {
		console.log("search Store Method " + searchKeyword);
		this.props.history.push(`/search-store/${searchKeyword}`);
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

				<h2 className='text-center'>Car List</h2>

				<div
					className='container'
					style={{
						backgroundColor: "white",
						padding: "50px",
						borderRadius: "10px",
					}}
				>
					<div className='row'>
						<div className='col-sm-4'>
							<form className='form-inline'>
								<input
									className='form-control mr-sm-2'
									type='search'
									placeholder='Search'
									aria-label='Search'
									value={this.state.searchKeyword}
									onChange={this.changeSearchHandler}
								/>

								<button
									onClick={() => this.searchStore(this.state.searchKeyword)}
									className='btn btn-info'
								>
									Search{" "}
								</button>
							</form>
						</div>
						<div className='col-md-4' style={{ marginLeft: "400px" }}>
							<button className='btn btn-primary' onClick={this.addStore}>
								{" "}
								Add New Store
							</button>
						</div>
					</div>
					<div className='row'>
						<table className='table table-striped table-bordered'>
							<thead>
								<tr>
									<th> No. </th>
									<th> Store Name</th>
									<th> Store Phone no. </th>
									<th> Store Email</th>
									<th> Store Address</th>

									<th> Actions</th>
								</tr>
							</thead>
							<tbody>
								{this.state.stores.map((store) => (
									<tr key={store.storeId}>
										<td> {store.storeId} </td>
										<td> {store.storeName} </td>
										<td> {store.storePhoneNo}</td>
										<td> {store.storeEmail}</td>
										<td> {store.storeAddress}</td>

										<td>
											<button
												onClick={() => this.editStore(store.storeId)}
												className='btn btn-info'
											>
												Update{" "}
											</button>
											<button
												style={{ marginLeft: "10px" }}
												onClick={() => this.deleteStore(store.storeId)}
												className='btn btn-danger'
											>
												Delete{" "}
											</button>
											<button
												style={{ marginLeft: "10px" }}
												onClick={() => this.viewStore(store.storeId)}
												className='btn btn-info'
											>
												View{" "}
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default ListStoreComponent;
