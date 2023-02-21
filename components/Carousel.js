import React, { useState } from "react";
import CarouselButton from "./CarouselButton";

const data = [
	{
		ct: 0,
		src: "/top/lounge.svg",
		id: "0",
	},
	{
		ct: 1,
		src: "/top/pool.svg",
		id: "1",
	},
	{
		ct: 2,
		src: "/top/build.svg",
		id: "2",
	},
	{
		ct: 3,
		src: "/top/waterfall.svg",
		id: "3",
	},
];

export default function Carousel() {
	return (
		<div className="flex w-full bg-white space-x-1">
			<div className="w-1/12 lg:w-2/12 bg-white md:bg-[url('/back.svg')] object-cover"></div>
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
						<CarouselButton href="#slide1" prev={true} />
						<CarouselButton href="#slide3" prev={false} />
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img src="/top/waterfall.svg" className="w-full object-cover" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<CarouselButton href="#slide2" prev={true} />
						<CarouselButton href="#slide4" prev={false} />
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img src="/top/build.svg" className="w-full object-cover" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<CarouselButton href="#slide3" prev={true} />
						<CarouselButton href="#slide1" prev={false} />
					</div>
				</div>
			</div>
			<div className="w-1/12 lg:w-2/12 bg-white md:bg-[url('/back2.svg')] object-cover"></div>
		</div>
	);
}
