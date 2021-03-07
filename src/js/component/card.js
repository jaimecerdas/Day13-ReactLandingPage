import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "15rem" }}>
			<img src={props.imageURL} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.cardtitle}</h5>
				<p className="card-text"> {props.description} </p>
				<p className="card-text">
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</p>
			</div>
		</div>
	);
}

Card.propTypes = {
	cardtitle: PropTypes.string,
	description: PropTypes.string,
	imageURL: PropTypes.string
};
