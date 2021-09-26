import React, { Component } from "react";
class FooterComponent extends Component {
	render() {
		return (
			<div style={{ position: "fixed", bottom: "0", marginLeft: "42%" }}>
				<footer className='footer'>
					<span className='text-muted'>All Rights Reserved 2021</span>
				</footer>
			</div>
		);
	}
}
export default FooterComponent;
