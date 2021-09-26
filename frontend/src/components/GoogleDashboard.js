import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
class GoogleDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
		};
	}

	componentDidMount() {
		const user = JSON.parse(localStorage.getItem("user"));

		if (user) {
			this.setState({ user: user });
		}
	}
	render() {
		const UserScreen = ({ user }) => (
			<>
				<div>
					<div class='text-center'>
						<img
							src={user.profileObj.imageUrl}
							height='10%'
							width='10%'
							alt='avatar'
							style={{ borderRadius: "50%" }}
						/>
					</div>

					<h1>Welcome {user.profileObj.name}!</h1>
					<p>{user.profileObj.email}</p>
				</div>
			</>
		);

		return (
			<div>
				{this.state.user && (
					<div
						className='card col-md-6 offset-md-3 offset-md-3 border-primary'
						style={{
							display: "flex-column",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<UserScreen user={this.state.user} />
					</div>
				)}
			</div>
		);
	}
}
export default GoogleDashboard;
