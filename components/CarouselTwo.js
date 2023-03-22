import React, { useState } from "react";

const photos = [
	{
		src: "/top/lounge.svg",
	},
	{
		src: "/top/build.svg",
	},
	{
		src: "/top/pool.svg",
	},
	{
		src: "/top/waterfall.svg",
	},
];

export default function CarouselTwo() {
	const [curr, setCurr] = useState(0);

	const handleBack = (e) => {
		if (curr == 0) {
			setCurr(photos.length - 1);
		} else {
			setCurr(curr - 1);
		}
	};

	const handleFront = (e) => {
		if (curr == photos.length - 1) {
			setCurr(0);
		} else {
			setCurr(curr + 1);
		}
	};

	return (
		<div className="flex justify-center w-full">
			<div className="md:w-2/12 w-1/12 md:bg-[url('/back.svg')] mr-1"></div>
			<div className="md:w-8/12 w-10/12">
				<div className="relative">
					<img className="w-full" src={photos[curr].src} />
					<button
						className="cursor-pointer left-4 absolute top-[48px] md:top-[115px] lg:top-[225px] py-4 md:py-8 px-2 bg-white border-black border hover:bg-slate-200 transition ease-in duration-300 focus:ring-2"
						onClick={handleBack}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<button
						className="cursor-pointer right-4 absolute top-[48px] md:top-[115px] lg:top-[225px] py-4 md:py-8 px-2 bg-white border-black border hover:bg-slate-200 transition ease-in duration-300 focus:ring-2"
						onClick={handleFront}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="md:w-2/12 w-1/12 md:bg-[url('/back2.svg')] ml-1"></div>
		</div>
	);
}
