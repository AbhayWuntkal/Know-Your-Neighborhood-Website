import React, { Component } from "react";
import StoreService from "../services/StoreService";

class Stores extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stores: [],
			searchKeyword: this.props.match.params.searchKeyword,
		};

		this.searchStore = this.searchStore.bind(this);
	}

	viewStore(id) {
		this.props.history.push(`/view-store/${id}`);
	}

	componentDidMount() {
		StoreService.searchStore(this.state.searchKeyword).then((res) => {
			this.setState({ stores: res.data });
			


		});
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

				<h2 className='text-center'>Search Car Results</h2>

				<div
					className='container'
					style={{
						backgroundColor: "white",
						padding: "50px",
						borderRadius: "10px",
					}}
				>
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

					<div className='row'>
						<table className='table table-striped table-bordered'>
							<thead>
								<tr>
									<th> No. </th>
									<th> Store Name </th>
									<th>Store Phone No </th>
									<th> Store Email</th>
									<th> Store Address </th>

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

export default Stores;
