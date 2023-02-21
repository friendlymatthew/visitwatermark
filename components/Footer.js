import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Footer() {
	return (
		<div>
			<div className="h-[500px] object-contain bg-[url('/floral.svg')] w-full justify-center flex">
				<div className="w-10/12 lg:w-8/12  grid grid-cols-2 py-8 text-white">
					<AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
						<div className="pt-2 font-title text-5xl font-bold tracking-tight">
							THE WATERMARK
							<div className="text-2xl font-body font-thin">
								1551 Ala Wai Blvd, Honolulu
							</div>
						</div>
					</AnimationOnScroll>
				</div>
			</div>
		</div>
	);
}
