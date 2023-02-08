import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

export default function Amenities({ title, body }) {
	return (
		<div className="w-10/12 lg:w-8/12  text-body py-12 text-black">
			<AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
				<div className="text-xl font-thin mb-4 uppercase">{title}</div>
			</AnimationOnScroll>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 text-lg">
				{body.map(({ title, img, desc }) => {
					return (
						<div key={title} className="font-thin">
							<AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
								<Image src={img} width={400} height={300} />
							</AnimationOnScroll>
							<AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
								<div className="uppercase font-normal text-base mt-8">
									{title}
								</div>
							</AnimationOnScroll>
							<AnimationOnScroll animateIn="animate__fadeIn" duration={3}>
								<div className="tracking-tight">{desc}</div>
							</AnimationOnScroll>
						</div>
					);
				})}
			</div>
		</div>
	);
}
