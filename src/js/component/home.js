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
					<Card
						cardtitle="Hola :)"
						description="Esta es una descripción1"
						imageURL="https://via.placeholder.com/200x50"
					/>
					<Card
						cardtitle="Ciao"
						description="Esta es una descripción2"
						imageURL="https://via.placeholder.com/200x75"
					/>
					<Card
						cardtitle="Hello"
						description="Esta es una descripción3"
						imageURL="https://via.placeholder.com/200x10"
					/>
					<Card
						cardtitle="Hallo"
						description="Esta es una descripción4"
						imageURL="https://via.placeholder.com/200x50"
					/>
				</div>
			</div>
		</div>
	);
}
