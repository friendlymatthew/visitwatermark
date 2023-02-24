import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

const navactions = [
	{
		id: "#reserve",
		title: "Reserve Now",
	},
	{
		id: "#homeoverview",
		title: "Home Overview",
	},
	{
		id: "#aptamenities",
		title: "Amenities",
	},
	{
		id: "#waikiki",
		title: "Explore Waikiki",
	},

	{
		id: "#reviews",
		title: "Reviews",
	},
];

export default function Footer() {
	return (
		<div className="flex flex-col justify-between">
			<div className="h-[500px] p-[2em] object-contain bg-[url('/floral.svg')] w-full justify-between items-start flex-col flex">
				<div className="w-10/12 lg:w-8/12  py-8 text-white">
					<AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
						<div className="pt-2 font-title text-[1.6em] lg:text-5xl font-bold tracking-tight">
							THE WATERMARK 902
							<div className="text-[1em] lg:text-2xl font-body font-thin">
								1551 Ala Wai Blvd, Honolulu
							</div>
						</div>
					</AnimationOnScroll>
				</div>
				<div className="sticky top-0 z-30 bg-white bg-opacity-80 text-black border-b-[0.5px] border-black">
					<div className=" flex justify-center w-full py-4 text-sm sticky top-0 z-50">
						<div className="w-10/12 lg:w-8/12 flex flex-wrap space-y-2 justify-between">
							{navactions.map(({ id, title }) => {
								return (
									<div key={id} className="opacity-100">
										{title === "Reserve Now" ? (
											<a
												href={id}
												className="block hover:opacity-100 bg-white border py-[3px] px-8 border-black hover:bg-black hover:text-white transition ease-in duration-300 cursor-pointer underline-offset-[12px] uppercase  font-body font-extrabold"
											>
												{title}
											</a>
										) : (
											<a
												href={id}
												className="hover:underline hover:opacity-100  decoration-[1px] transition ease-in duration-300 cursor-pointer underline-offset-2 uppercase tracking-wide font-body font-thin"
											>
												<div className="hover:opacity-100 p-1 underline transition ease-in duration-300 ">
													{title}
												</div>
											</a>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
