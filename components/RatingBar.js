import React, { useState, useEffect } from "react";

const RatingBar = ({ rating }) => {
	const fullStars = Math.floor(rating);
	const partialStar = rating - fullStars;

	const [fill, setFill] = useState((partialStar * 100).toFixed(2));

	const stars = [];

	const blueCircle = {
		width: "20px",
		height: "20px",
		margin: "0px 1px",
		borderRadius: "50%",
		display: "inline-block",
		backgroundColor: "#a4c1e1",
	};

	const partiallyFilledCircle = {
		...blueCircle,
		background: `linear-gradient(to right, #a4c1e1 ${fill}%, #ededed ${
			100 - fill
		}%)`,
	};

	for (let i = 0; i < fullStars; i++) {
		stars.push(<div key={i} style={blueCircle} />);
	}

	if (partialStar > 0) {
		stars.push(<div key={fullStars} style={partiallyFilledCircle} />);
	}

	return <div className="mt-2 flex flex-nowrap">{stars}</div>;
};

export default RatingBar;
