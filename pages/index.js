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

const inter = Inter({ subsets: ["latin"] });

const transportation = {
	title: "Getting around",
	body: [
		{
			title: "Biki Bikes",
			img: "/biki.jpg",
			desc: "Whip around in a biki bike",
		},
		{
			title: "The Bus",
			img: "/thebus.jpg",
			desc: "Whip around in a biki bike",
		},
	],
};

const apartment = {
	title: "Apartment Amenities",
	body: [
		{
			title: "Outdoor Lounge",
			img: "/lounge.jpg",
			desc: "Open space with couches and trees feel the fresh breeze brush along your asshole as you realize the hospitality is shit",
		},
		{
			title: "Wellness Spa",
			img: "/wellness.jpg",
			desc: "Dumbbells, weights, yoga mats, ellipticals, treadmills, bikes",
		},
		{
			title: "Swimming Pool",
			img: "/swimming.jpg",
			desc: "Hot tub",
		},
		{
			title: "BBQ Pavilion",
			img: "/bbq.jpg",
			desc: "Five  equipped ",
		},
		{
			title: "Library",
			img: "/library.jpg",
			desc: "A dedicated workspace, furnished with books and chairs.",
		},
		{
			title: "Nature Walk Path",
			img: "/walkpath.jpg",
			desc: "A dedicated workspace, furnished with books and chairs.",
		},
	],
};

const explore = {
	title: "Explore Waikiki",
	body: [
		{
			title: "Ala Moana Beach Park",
			img: "/moanabeach.jpg",
			desc: "Walk over the bridge to go to the beach",
		},
		{
			title: "Ala Moana Mall",
			img: "/moanamall.png",
			desc: "Walk over the bridge to go to the beach",
		},
		{
			title: "International Marketplace",
			img: "/international.png",
			desc: "Walk over the bridge to go to the beach",
		},
	],
};

const interior = {
	title: "Interior Amenities",
	body: [
		{
			title: "Living Area",
			img: "/living.jpg",
			desc: "Our living area features a pullout couch, dining area, 50' tv, ",
		},
		{
			title: "Master Bedroom",
			img: "/master.jpg",
			desc: "Our living area features a pullout couch, dining area, 50' tv, ",
		},
		{
			title: "Bathroom",
			img: "/bath.jpg",
			desc: "Our living area features a pullout couch, dining area, 50' tv, ",
		},

		{
			title: "Kitchen",
			img: "/kitchen.jpg",
			desc: "Our living area features a pullout couch, dining area, 50' tv, ",
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
			title: "Patio",
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
												className="block border-2 py-[3px] px-8 border-black hover:bg-black hover:text-white transition ease-in duration-300 cursor-pointer underline-offset-[12px] uppercase  font-body font-extrabold"
											>
												{title}
											</a>
										) : (
											<a
												href={id}
												className="hover:underline decoration-[1px] transition ease-in duration-300 cursor-pointer underline-offset-[12px] uppercase tracking-tight font-body font-thin"
											>
												{title}
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
					<Carousel />
				</div>
				<div id="reserve" className="bg-[#1c1c1c] w-full flex justify-center">
					<Availability />
				</div>

				<div className="w-full flex justify-center py-8">
					<div className="grid grid-cols-1 md:grid-cols-2 items-start w-10/12 lg:w-8/12  grid-flow-row">
						<div className="font-title text-4xl font-bold tracking-tight">
							THE WATERMARK
							<div className="text-lg font-body font-thin">
								1551 Ala Wai Blvd, Honolulu
							</div>
						</div>
						<div className="font-body font-thin text-lg">
							It’s time to restore ourselves to our most natural state. Free
							from stress and the hecticness of everyday life. Join us at The
							Ritz-Carlton Maui, Kapalua to restore yourself to the wild.
						</div>
					</div>
				</div>

				<div
					id="homeoverview"
					className="bg-[#e9f1fa] flex justify-center w-full"
				>
					<Amenities title={interior.title} body={interior.body} />
				</div>

				<div id="waikiki" className="flex justify-center w-full">
					<Amenities title={explore.title} body={explore.body} />
				</div>

				<div className="flex justify-center w-full">
					<Amenities title={transportation.title} body={transportation.body} />
				</div>
				<div
					id="aptamenities"
					className="bg-[#e9f1fa] flex justify-center w-full"
				>
					<Amenities title={apartment.title} body={apartment.body} />
				</div>

				<div id="reviews" className="flex justify-center w-full py-20">
					<Rating />
				</div>

				<Footer />
			</main>
		</>
	);
}
