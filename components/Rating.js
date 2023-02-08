const ratings = [
	{
		id: 1,
		person: "Francisco",
		clean: 5,
		comm: 1,
		value: 1.2,
		loc: 5,
		amen: 5,
		desc: "Beautiful, well kept property that was a perfect setting for a weekend getaway with close friends. Felt very secluded, but essentials in town were very close by! Calum was very responsive and kind. Our stay was lovely. Highly recommend to anyone, and hope to be back!",
	},
	{
		id: 2,
		person: "Danishka",
		clean: 5,
		comm: 1.3,
		value: 5,
		loc: 5,
		amen: 5,
		desc: "What a beautiful home! The floor plan is amazing with natural light streaming in with views of nature everywhere. The backyard even had deer grazing. It was particularly pretty with the Fall foliage in full color. We loved the kitchen filled with everything a person would need. It is such a unique kitchen where you can visit with your guests as you cook. The primary bathroom downstairs was AMAZING. We enjoyed our stay so much!",
	},
	{
		id: 3,
		person: "Miguel",
		clean: 5,
		comm: 5,
		value: 5,
		loc: 5,
		amen: 5,
	},
];

import React, { useEffect, useState } from "react";
import RatingBar from "./RatingBar";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Rating() {
	const [avgRating, setAvgRating] = useState([]);

	useEffect(() => {
		let sum = (prev, cur) => {
			return prev + cur;
		};

		const cleans = ratings.map((rating) => rating.clean);
		const comms = ratings.map((rating) => rating.comm);
		const values = ratings.map((rating) => rating.value);
		const locs = ratings.map((rating) => rating.loc);
		const amens = ratings.map((rating) => rating.amen);

		const cleanScore = cleans.reduce(sum, 0);
		const commsScore = comms.reduce(sum, 0);
		const valuesScores = values.reduce(sum, 0);
		const locsScores = locs.reduce(sum, 0);
		const amensScores = amens.reduce(sum, 0);

		const tempAvg = {
			Cleanliness: cleanScore / ratings.length,
			Communication: commsScore / ratings.length,
			Value: valuesScores / ratings.length,
			Location: locsScores / ratings.length,
			Amenities: amensScores / ratings.length,
		};

		var avgs = [];

		for (var jdx in tempAvg) {
			var tempEntry = {
				cat: jdx,
				val: tempAvg[jdx].toFixed(1),
			};

			avgs.push(tempEntry);
		}

		setAvgRating(avgs);
	}, []);

	return (
		<div className="w-10/12 lg:w-8/12  border-[0.5px] border-gray-400 py-8">
			<AnimationOnScroll animateIn="animate__fadeIn" duration={1}>
				<div className="text-center font-title text-3xl font-bold uppercase mb-8">
					<span>Our Reviews</span>{" "}
					<span className="text-base font-body font-thin italic">
						({avgRating.length})
					</span>
				</div>
			</AnimationOnScroll>
			<div className="grid grid-cols-1 md:grid-cols-2 px-20 gap-x-20 gap-y-4">
				{avgRating.map(({ cat, val }) => {
					return (
						<AnimationOnScroll
							animateIn="animate__fadeIn"
							duration={2}
							key={cat}
						>
							<div className="lg:px-20 flex-none lg:flex font-thin text-xl font-body justify-between items-center">
								<div className="flex items-center space-x-2">
									<div>{cat} </div>
									<div className="text-sm">({val})</div>
								</div>

								<RatingBar rating={val} />
							</div>
						</AnimationOnScroll>
					);
				})}
			</div>

			<div className="mt-20 px-20 lg:px-40 grid grid-cols-1 gap-y-4 divide-y-[0.5px] divide-gray-400">
				{ratings.map(({ person, desc }) => {
					return (
						<AnimationOnScroll
							animateIn="animate__fadeIn"
							duration={2}
							key={person}
						>
							{desc ? (
								<div className="font-title font-semibold text-xl py-2">
									<div className="">{person}</div>
									<div className="font-body font-thin text-base">{desc}</div>
								</div>
							) : (
								<></>
							)}
						</AnimationOnScroll>
					);
				})}
			</div>
		</div>
	);
}
