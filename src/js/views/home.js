import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	return(
			<div>
				<h2>Gryffindor</h2>
				<h2>Slytherin</h2>
				<h2>Hufflepuff</h2>
				<h2>Ravenclaw</h2>

			</div>
		);
	};
