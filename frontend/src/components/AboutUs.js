import React, { Component } from "react";

class AboutUs extends Component {
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
						<div className='card col-md-8 offset-md-2 offset-md-2'>
							<div>
								<h1
									style={{
										fontSize: "28px",
										textAlign: "center",
										padding: "20px",
									}}
								>
									About Us
								</h1>

								<h2
									style={{
										fontSize: "20px",
										textAlign: "center",
										padding: "20px",
									}}
								>
									Our Vision
								</h2>
								<p
									style={{
										fontSize: "16px",
										textAlign: "justify",
										padding: "20px",
									}}
								>
									We are a team of like-minded, passionate and innovative
									individuals with 10+ years of experience in the field of
									software. We are on a mission to help you deliver the world’s
									best possible user experience. Focusing on rapid prototyping
									tools, effective collaboration, and scalable design systems,
									Mockplus provides you an all-in-one product design platform to
									design faster, smarter, and easier. Mockplus has more than
									2,000,000 users around the world and over 200,000 teams trust
									us. Brands like Huawei, IBM, Microsoft, DJI, and Oracle use
									Mockplus to create products that you love.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;
