import React, { Component } from "react";

class TermsAndConditions extends Component {
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
				<div
					className='container'
					style={{
						backgroundColor: "white",
						borderRadius: "8px",
						padding: "15px",
					}}
				>
					<h1>Terms And Conditions</h1>
					Terms and Conditions
					<h3>Welcome !</h3>
					<p>
						These terms and conditions outline the rules and regulations for the
						use of KYN's Website, located at Website.com. By accessing this
						website we assume you accept these terms and conditions. Do not
						continue to use Website Name if you do not agree to take all of the
						terms and conditions stated on this page.
					</p>
					<p>
						The following terminology applies to these Terms and Conditions,
						Privacy Statement and Disclaimer Notice and all Agreements:
						“Client”, “You” and “Your” refers to you, the person log on this
						website and compliant to the Company's terms and conditions. “The
						Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company.
						“Party”, “Parties”, or “Us”, refers to both the Client and
						ourselves. All terms refer to the offer, acceptance and
						consideration of payment necessary to undertake the process of our
						assistance to the Client in the most appropriate manner for the
						express purpose of meeting the Client's needs in respect of
						provision of the Company's stated services, in accordance with and
						subject to, prevailing law of Netherlands. Any use of the above
						terminology or other words in the singular, plural, capitalization
						and/or he/she or they, are taken as interchangeable and therefore as
						referring to same. Cookies We employ the use of cookies. By
						accessing Website Name, you agreed to use cookies in agreement with
						the KYN's Privacy Policy.
					</p>
					<p>
						Most interactive websites use cookies to let us retrieve the user's
						details for each visit. Cookies are used by our website to enable
						the functionality of certain areas to make it easier for people
						visiting our website. Some of our affiliate/advertising partners may
						also use cookies. License Unless otherwise stated, KYN and/or its
						licensors own the intellectual property rights for all material on
						Website Name. All intellectual property rights are reserved. You may
						access this from Website Name for your own personal use subjected to
						restrictions set in these terms and conditions. You must not:
						Republish material from Website Name Sell, rent or sub-license
						material from Website Name Reproduce, duplicate or copy material
						from Website Name Redistribute content from Website Name This
						Agreement shall begin on the date hereof. Parts of this website
						offer an opportunity for users to post and exchange opinions and
						information in certain areas of the website. KYN does not filter,
						edit, publish or review Comments prior to their presence on the
						website. Comments do not reflect the views and opinions of KYN,its
						agents and/or affiliates. Comments reflect the views and opinions of
						the person who post their views and opinions.
					</p>
					<p>
						To the extent permitted by applicable laws, KYN shall not be liable
						for the Comments or for any liability, damages or expenses caused
						and/or suffered as a result of any use of and/or posting of and/or
						appearance of the Comments on this website. KYN reserves the right
						to monitor all Comments and to remove any Comments which can be
						considered inappropriate, offensive or causes breach of these Terms
						and Conditions.
					</p>
				</div>
			</div>
		);
	}
}

export default TermsAndConditions;
