import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Header() {
	return (
		<div>
			<div className="object-contain bg-[url('/floral.svg')] w-full justify-center flex border-none">
				<div className="w-10/12 lg:w-8/12  grid grid-cols-2 py-8 text-white">
					<div className="pt-2 font-title text-5xl font-bold tracking-tight">
						THE WATERMARK
						<div className="text-2xl font-body font-thin">
							1551 Ala Wai Blvd, Honolulu
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
