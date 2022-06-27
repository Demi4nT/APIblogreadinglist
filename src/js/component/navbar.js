import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid">
				<Link to="/">
				<a class="navbar-brand " href="#"/>
					<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="" width="130" height="75"/>
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
