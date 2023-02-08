import React, { useState } from "react";
import CarouselButton from "./CarouselButton";

export default function Carousel() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [currImage, setCurrImage] = useState(0);

	const imagedf = [
		{
			id: 1,
			src: "/top/build.svg",
		},
		{
			id: 2,
			src: "/top/pool.svg",
		},
		{
			id: 3,
			src: "/top/waterfall.svg",
		},
		{
			id: 4,
			src: "/top/build.svg",
		},
	];
	return (
		<div className="flex w-full bg-[#1c1c1c]">
			<div className="w-1/12 lg:w-2/12 object-cover"></div>
			<div className="carousel h-[500px] w-10/12 lg:w-8/12 ">
				<div id="slide1" className="carousel-item relative w-full ">
					<img src="/top/lounge.svg" className="w-full object-cover" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<CarouselButton href="#slide4" prev={true} />
						<CarouselButton href="#slide2" prev={false} />
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src="/top/pool.svg" className="w-full object-cover" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img src="/top/waterfall.svg" className="w-full object-cover" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img src="/top/build.svg" className="w-full object-cover" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
			<div className="w-1/12 lg:w-2/12"></div>
		</div>
	);
}
