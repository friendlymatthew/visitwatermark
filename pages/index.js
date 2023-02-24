import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Availability from "@/components/Availability";

import Amenities from "@/components/Amenities";
import Footer from "@/components/Footer";
import Rating from "@/components/Rating";
import Location from "@/components/Location";

import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import CarouselTwo from "@/components/CarouselTwo";
import AmenCarousel from "@/components/AmenCarousel";

const inter = Inter({ subsets: ["latin"] });

const transportation = {
	title: "Getting around",
	body: [
		{
			title: "Biki Bikes",
			img: "/biki.jpg",
			desc: "Right outside of the front gates of Watermark, Biki bikes await you to take you anywhere you want on the island in minutes. Scattered throughout the island, Biki bike stands are easily accessible and convenient to use.",
		},
		{
			title: "The Bus",
			img: "/thebus.jpg",
			desc: "As Watermark is located near famous landmarks such as Ala Moana Park and Ala Moana Mall, residents of Watermark benefit from a wide selection of bus routes and stops conveniently located nearby. With these buses, your traveling on the Oahu island is not limited to Waikiki.",
		},
	],
};

const apartment = {
	title: "Apartment Amenities",
	body: [
		{
			title: "Outdoor Lounge",
			img: "/lounge.jpg",
			desc: "The beautiful ground floor lobby welcomes the guests with Hawaiian artworks, marble floors and spacious seating areas. Open all around, the lobby steps down to the resort-like pool and garden, truly making your arrival to Hawaii special. Professional concierge service at the front desk provides security to residents at all times.",
		},
		{
			title: "Wellness Spa",
			img: "/wellness.jpg",
			desc: "This luxurious air conditioned pavilion includes a fully equipped weight rack and recently updated fitness center and two sauna rooms. Residents can enjoy the beautiful garden view while exercising. Fitness room amenities include: ellipticals, stationary bikes, treadmills, and weight equipment.",
		},
		{
			title: "Swimming Pool",
			img: "/swimming.jpg",
			desc: "Surrounded by natural stone tiles, this beautiful infinity pool is designed aesthetically with lava rocks and palm trees. Giant palm trees surround the pool, providing just enough shade to make your sun-bathing more comfortable. Also, relax in the lava rock enclosed hot tub next to the pool.",
		},
		{
			title: "BBQ Pavilion",
			img: "/bbq.jpg",
			desc: "Located around the pool and the garden, open pavilions are equipped with BBQ alcoves and dining sets to entertain small or large groups of guests and parties.",
		},
		{
			title: "Library",
			img: "/library.jpg",
			desc: "From holding private group meetings to entertaining groups of guests, residents can use the library that  is equipped with a screen, tables and chairs. Doors on each side of the room open into the lobby and the resort-like pool/garden areas.",
		},
		{
			title: "Nature Walk Path",
			img: "/walkpath.jpg",
			desc: "Follow the groves of palm trees and meander through the foot paths along the four acre property, pleasantly surprised by the pond at the end of the walk.  Enjoy native plants, landscape art and trellis in the nature walk right on the property of Watermark.",
		},
	],
};

const explore = {
	title: "Explore Waikiki",
	body: [
		{
			title: "Ala Moana Beach Park",
			img: "/moanabeach.jpg",
			desc: "Across the street from Watermark, Ala Moana Beach Park is a landmark for beautiful sunsets. Jog along the coastline against the splashing waves, stroll around the park or even participate in the yoga classes on the paddle boards while the sunsets in the ocean.",
		},
		{
			title: "Ala Moana Mall",
			img: "/moanamall.png",
			desc: "Just steps away awaits an impressive shopping center where you can enjoy Hawaii’s low tax rate. From local brands to luxury brands, shoppers enjoy the beautiful Hawaiian weather, strolling under the open roof of the mall. The mall is home to well known department stores such as Neiman Marcus, Nordstroms, Bloomingdale’s, and Macy’s. Enjoy traditional Hawaiian performances throughout the day and dine in a wide selection of restaurants on the top floor of the mall.",
		},
		{
			title: "International Marketplace",
			img: "/international.png",
			desc: "More than just a shopping, dining and entertainment destination in the heart of Waikiki, International Market Place is built around the iconic banyan tree that is more than a century old. Always bustling with people and music, the Marketplace is on foot within 15 minutes from the Watermark. During nighttime, enjoy street performances as you walk along the Waikiki strip.",
		},
	],
};

const interior = {
	title: "Interior Amenities",
	body: [
		{
			title: "Living Area",
			img: "/living.jpg",
			desc: "Our living area features ",
		},
		{
			title: "Master Bedroom",
			img: "/master.jpg",
			desc: "Our master bedroom features a walk-in closet, a dedicated workspace, and a king sized bed. Personalize your comfort with supplied bed linens, blankets, and comforters.",
		},
		{
			title: "Bathroom",
			img: "/bath.jpg",
			desc: "Our master bathroom has two individual sinks joined by a spacious countertop. Use shower or full tub. Additional amenities include toiletries, blow dryer, and towels.",
		},

		{
			title: "Kitchen",
			img: "/kitchen.jpg",
			desc: "Enjoy the comforts of dine-in food. Use our full set of cooking pans and pots, porcelain dish sets, and cooking tools. Amenities include: oven, microwave, diswasher. ",
		},
		{
			title: "Bedroom",
			img: "/second.jpg",
			desc: "Our living area features a pullout couch, dining area, 50' tv, ",
		},

		{
			title: "Laundry",
			img: "/bath2.jpg",
			desc: "Our living area features a pullout couch, dining area, 50' tv, ",
		},
		{
			title: "Lanai",
			img: "/veranda.jpg",
			desc: "Our living area features a pullout couch, dining area, 50' tv, ",
		},
	],
};

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

export default function Home() {
	return (
		<>
			<Head>
				<title>The Watermark - Honolulu</title>
				<meta name="description" content="The Watermark 902 Landing Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>

				<link
					href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Noto+Sans:wght@300;400&family=Noto+Serif&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
			</Head>
			<header className="">
				<Header />
				<div className="sticky top-0 z-30 bg-white text-black border-b-[0.5px] border-black">
					<div className=" flex justify-center w-full py-4 text-sm sticky top-0 z-50">
						<div className="w-10/12 lg:w-8/12 flex flex-wrap space-y-2 justify-between">
							{navactions.map(({ id, title }) => {
								return (
									<div key={id} className="">
										{title === "Reserve Now" ? (
											<a
												href={id}
												className="block border py-[3px] px-8 border-black hover:bg-black hover:text-white transition ease-in duration-300 cursor-pointer underline-offset-[12px] uppercase  font-body font-extrabold"
											>
												{title}
											</a>
										) : (
											<a
												href={id}
												className="hover:underline  decoration-[1px] transition ease-in duration-300 cursor-pointer underline-offset-[12px] uppercase tracking-wide font-body font-thin"
											>
												<div className="transition ease-in duration-500">
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
			</header>
			<main className="w-full bg-white text-[#1c1c1c] grid grid-cols-1">
				<div className="w-full" id="home">
					<CarouselTwo />
				</div>
				<div id="reserve" className="bg-[#1c1c1c] w-full flex justify-center">
					<Availability />
				</div>

				<div className="w-full flex justify-center py-8">
					<div className="grid grid-cols-1 gap-y-4 items-start w-10/12 lg:w-8/12  grid-flow-row">
						<div className="font-title text-4xl font-bold tracking-tight">
							THE WATERMARK
							<div className="text-lg font-body font-thin">
								1551 Ala Wai Blvd, Honolulu
							</div>
						</div>
						<div className="font-body font-thin text-lg tracking-tight">
							No other condominiums on Waikiki offer such resort style living as
							The Watermark with its open air lobby, fantastic swimming pool
							facilities, gorgeous ocean, marina and mountain views. Recently
							renovated with modern hardwood floors and furniture, this special
							unit offers exceptional comfort and style with a fully equipped
							gourmet kitchen, efficient walk-in closet systems, clean marble
							bathrooms, furnished bedrooms with working spaces, a dining area
							and a living room expanding into a lanai for taking in beautiful
							sunset views all around the year.
						</div>
					</div>
				</div>

				<div
					id="homeoverview"
					className="bg-[#e9f1fa] flex justify-center w-full"
				>
					<AmenCarousel title={interior.title} body={interior.body} />
				</div>

				<div id="aptamenities" className="bg-white flex justify-center w-full">
					<AmenCarousel title={apartment.title} body={apartment.body} />
				</div>

				<div id="waikiki" className="flex justify-center w-full">
					<Amenities title={explore.title} body={explore.body} />
				</div>

				<div className="flex justify-center w-full">
					<Amenities title={transportation.title} body={transportation.body} />
				</div>

				<div id="reviews" className="flex justify-center w-full py-20">
					<Rating />
				</div>

				<Footer />
			</main>
		</>
	);
}
