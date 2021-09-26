import React, { Component } from "react";

class HeaderComponent extends Component {
	render() {
		return (
			<div>
				<header>
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
				</header>
			</div>
		);
	}
}

export default HeaderComponent;
