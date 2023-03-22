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
				<div className="w-full text-black flex justify-center">
					<div className="w-8/12 bg-white flex justify-around p-2 bg-opacity-70">
						{navactions.map(({ id, title }) => {
							return (
								<a
									href={id}
									className="block font-body font-thin border border-black px-2 py-1 bg-white"
								>
									{title}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
