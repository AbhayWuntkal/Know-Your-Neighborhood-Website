import React, { Component } from "react";

class ContactUs extends Component {
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

				<div className='container-fluid'>
					<div className='row'>
						<div className='card col-md-6 offset-md-3 offset-md-3'>
							<div>
								<h3
									style={{
										fontSize: "40px",
										textAlign: "center",
										padding: "20px",
									}}
								>
									Contact Us
								</h3>
							</div>

							<div style={{ width: "1200px" }}>
								<div className='card body' style={{ border: "0" }}></div>

								<h4
									style={{
										margin: "0 0 0 35px",
										textAlign: "left",
										fontSize: "22px",
									}}
								>
									Phone:
								</h4>
								<p style={{ textAlign: "left", margin: "5px 0 50px 35px" }}>
									+91-82828282828
								</p>
								<h4
									style={{
										margin: "0px 0 0px 35px",
										textAlign: "left",
										fontSize: "22px",
									}}
								>
									Email ID:
								</h4>
								<p style={{ textAlign: "left", margin: "5px 0 50px 35px" }}>
									knowyourneighbour@kyn.gg
								</p>
								<h4
									style={{
										margin: "0 0 0 35px",
										textAlign: "left",
										fontSize: "22px",
									}}
								>
									Address:
								</h4>
								<p style={{ textAlign: "left", margin: "5px 0 50px 35px" }}>
									Lithan, Alabama, USA
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactUs;
