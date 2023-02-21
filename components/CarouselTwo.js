import React, { useState } from "react";

export default function CarouselTwo() {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="carousel">
			<div className="carousel-inner">
				{/* Your carousel items */}
				{items.map((item, index) => (
					<div
						key={index}
						className={`carousel-item ${index === activeIndex ? "active" : ""}`}
					>
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								handleClick(index);
							}}
						>
							{item}
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
