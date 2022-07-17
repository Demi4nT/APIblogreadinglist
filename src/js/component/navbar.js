import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<Link to="/">
				<a className="navbar-brand " href="#"/>
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1280px-Harry_Potter_wordmark.svg.png" alt="" width="220" height="75"/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-dark">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
