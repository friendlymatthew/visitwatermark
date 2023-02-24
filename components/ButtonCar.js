export default function ButtonCar({ left, handle }) {
	return (
		<>
			{left === true ? (
				<button
					className="cursor-pointer left-4 absolute md:top-[] lg:top-[225px] py-8 px-2 bg-white border-black border hover:bg-slate-200 transition ease-in duration-300 focus:ring-2"
					onClick={handle}
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
			) : (
				<button
					className="cursor-pointer right-4 absolute top-[225px] py-8 px-2 bg-white border-black border hover:bg-slate-200 transition ease-in duration-300 focus:ring-2"
					onClick={handle}
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
			)}
		</>
	);
}
