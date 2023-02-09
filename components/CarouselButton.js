export default function CarouselButton({ href, prev }) {
	return (
		<div>
			{prev == true ? (
				<a
					href={href}
					className="block bg-[#d6d4d0] rounded-sm px-2 py-8 border-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-12 h-12 stroke-[#1c1c1c]"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</a>
			) : (
				<a
					href={href}
					className="block bg-[#d6d4d0] rounded-sm px-2 py-8 border-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-12 h-12 stroke-[#1c1c1c]"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</a>
			)}
		</div>
	);
}
