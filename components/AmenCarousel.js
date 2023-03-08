import React, { useState, useEffect } from "react";

export default function AmenCarousel({ title, body }) {
	const [idx, setIdx] = useState(0);

	const handleNext = () => {
		if (idx == body.length - 1) {
			setIdx(0);
		} else {
			setIdx(idx + 1);
		}
	};

	const handlePrev = () => {
		if (idx == 0) {
			setIdx(body.length - 1);
		} else {
			setIdx(idx - 1);
		}
	};

	const handleTarget = (id) => {
		console.log("ismail: " + id);
		setIdx(id);
	};

	useEffect(() => {
		console.log(idx);
	}, [idx]);

	return (
		<div className="w-10/12 lg:w-8/12  text-body py-12 text-black text-body font-thin">
			<div className="text-lg text-body uppercase tracking-wide pb-4">
				{title}
			</div>
			<div className="grid grid-cols-3 transition ease-in duration-200">
				<div className="relative col-span-2">
					<img className="w-full" src={body[idx].img} />
					<button
						className="cursor-pointer left-4 absolute top-[48px] md:top-[115px] lg:top-[225px] py-4 px-2 bg-white border-black border hover:bg-slate-200 transition ease-in duration-300 focus:ring-2"
						onClick={handlePrev}
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
						className="cursor-pointer right-4 absolute top-[48px] md:top-[115px] lg:top-[225px] py-4 px-2 bg-white border-black border hover:bg-slate-200 transition ease-in duration-300 focus:ring-2"
						onClick={handleNext}
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
					<div className="absolute bottom-0 bg-white py-4 flex justify-around bg-opacity-60 mt-8 items-center w-full h-4">
						{body.map(({ title, id }) => {
							return (
								<button
									onClick={() => {
										handleTarget(id);
									}}
									key={id}
									className="text-[0.7em] lg:text-[1em] cursor-pointer hover:underline underline-offset-[6px]"
								>
									{title}
								</button>
							);
						})}
					</div>
				</div>
				<div className="px-4 text-lg">
					<div className="font-semibold pb-3">{body[idx].title}</div>
					<ul className="text-sm flex flex-col space-y-4">
						{body[idx].desc.map(({ thing }) => {
							return (
								<li className="flex space-x-1">
									<div>◦</div>
									<div>{thing}</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
