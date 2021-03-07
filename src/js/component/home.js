import React from "react";

//include images into your bundle

import { Jumbotron } from "./jumbotron.js";
import { NavBar } from "./navBar.js";
import { Card } from "./card.js";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />

			<div className="container justify-content-center">
				<Jumbotron />
				<div className="row justify-content-center">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
