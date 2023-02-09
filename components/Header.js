import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Header() {
	return (
		<div className=" bg-white text-black border-black border-b-[0.5px]">
			<div className="text-center text-lg font-title py-2 border-black uppercase font-extrabold">
				<div className="tracking-wide">The Watermark</div>
				<div className="text-sm tracking-tightest">Honolulu, Hawaii</div>
			</div>
		</div>
	);
}
