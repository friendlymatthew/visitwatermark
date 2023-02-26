const options = {
	autoHide: true,
	todayBtn: true,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date(),
	theme: {
		background: "dark:text-[#c7ddf3] dark:bg-black dark:rounded-none",
		todayBtn:
			"dark:bg-black dark:text-white dark:rounded-none dark:focus-none dark:hover:border-[#c7ddf3] dark:hover:border-[1px] dark:hover:text-[#c7ddf3] dark:hover:bg-black",
		clearBtn:
			"dark:bg-black dark:border-black dark:text-white dark:rounded-none dark:focus-none dark:hover:border-[#c7ddf3] dark:hover:border-[1px] dark:hover:text-[#c7ddf3] dark:hover:bg-black",
		icons:
			"dark:bg-black text-white dark:hover:border-[#c7ddf3] dark:hover:bg-black",
		text: "dark:hover:bg-white dark:text-[#c7ddf3] dark:focus:text-black dark:hover:text-black dark:rounded-none",
		disabledText:
			"dark:hover:bg-white dark:text-[#c7ddf3] dark:hover:text-black dark:rounded-none",
		selected:
			"bg-white dark:border-[#c7ddf3] dark:border-[1px] dark:bg-black dark:rounded-none ",
		input:
			"dark:w-full dark:border-b-[2px] dark:placeholder:text-white dark:cursor-pointer dark:bg-[#2b2a33] dark:py-2 dark:outline-none dark:focus:bg-gray-400 dark:text-lg dark:rounded-none dark:border-b-[#c7ddf3] dark:border-t-0 dark:border-x-0",
		inputIcon: "dark:fill-[#c7ddf3]",
	},
	icons: {
		// () => ReactNode | JSX.Element
		prev: () => (
			<span className="text-sm text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5L8.25 12l7.5-7.5"
					/>
				</svg>
			</span>
		),
		next: () => (
			<span className="text-sm text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</span>
		),
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date(),
	language: "en",
};

import React, { useState, useEffect, useRef } from "react";
import Datepicker from "tailwind-datepicker-react";
import PrimaryButton from "./PrimaryButton";
import emailjs from "@emailjs/browser";

export default function Availability() {
	const [show, setShow] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const [guests, setGuests] = useState("Number of guests");
	const [email, setEmail] = useState("");
	const [comments, setComments] = useState("");
	const [color, setColor] = useState("#e9f1fa");
	const [isHovering, setIsHovering] = useState(false);
	const form = useRef();
	const [atitle, setAtitle] = useState("SUBMIT AVAILABILITY");

	const handleChange = (selectedDate) => {
		console.log(selectedDate);
		setSelectedDate(selectedDate);
	};
	const handleClose = (state) => {
		setShow(state);
	};

	const handleSelect = (event) => {
		setGuests(event.target.value);
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const badEmail = (mail) => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
			return false;
		}

		alert("You have entered an invalid email address!");
		return true;
	};

	const handleComments = (e) => {
		setComments(e.target.value);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (badEmail(email) || guests === "Number of guests") {
			alert("Invalid form, please check if all fields are filled");
			setAtitle("Please fill out all fields");
			setColor("#c7c7f3");
		} else {
			emailjs
				.sendForm(
					"watermark_service",
					"template_685gyae",
					form.current,
					"0OiXITd450udpOpV3"
				)
				.then(
					(result) => {
						console.log(result.text);
						alert("Message sent successfully");
						setAtitle("Message sent successfully, mahalo");
						setColor("#9DC4EA");
					},
					(error) => {
						console.log(error.text);
						alert("System Error, please try again");
						setAtitle("System Error, please try again");
						setColor("#F3C7DD");
					}
				);
		}
	};

	return (
		<div className="bg-[#1c1c1c] w-10/12 lg:w-8/12  py-4 text-white">
			<div className="font-body font-thin text-xl py-2">MAKE A RESERVATION</div>
			<form ref={form} onSubmit={sendEmail}>
				<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3 gap-y-2">
					<span className="group flex items-center cursor-pointer border-b-[2px] bg-[#2b2a33] pl-1 border-[#c7ddf3]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5 text-[#c7ddf3] "
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
							/>
						</svg>
						<select
							id="guests"
							value={guests}
							name="num_guests"
							onChange={handleSelect}
							className="cursor-pointer w-full p-2 text-lg  group-focus:bg-[#747474]"
						>
							<option value="1" defaultValue={true}>
								Number of guests
							</option>
							<option value="1">1 Guest</option>
							<option value="2">2 Guests</option>
							<option value="3">3 Guests</option>
							<option value="4">4 Guests</option>
							<option value="5">5 Guests</option>
							<option value="6">6 Guests</option>
						</select>
					</span>
					<span className="flex items-center cursor-pointer border-b-[2px] bg-[#2b2a33] pl-1 border-[#c7ddf3]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5 text-[#c7ddf3]"
						>
							<path
								strokeLinecap="round"
								d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
							/>
						</svg>
						<input
							className="outline-none  w-fit text-lg pl-2 py-2  placeholder:text-white"
							type="email"
							name="email"
							value={email}
							onChange={handleEmail}
							placeholder="Email Address"
						/>
					</span>

					<div
						className="relative"
						onMouseOver={() => setIsHovering(true)}
						onMouseOut={() => setIsHovering(false)}
					>
						<Datepicker
							options={options}
							onChange={handleChange}
							show={show}
							setShow={handleClose}
						/>
						{isHovering && (
							<div className="absolute top-[-40px] left-0 text-body font-thin text-black bg-white text-sm p-2">
								Please enter your desired start date, mahalo
							</div>
						)}
					</div>
				</div>
				<div className="pt-4 text-lg">
					<textarea
						rows="5"
						name="comments"
						value={comments}
						placeholder={"Additional comments"}
						onChange={handleComments}
						className="placeholder:text-white w-full p-2 outline-none border-b-2 border-[#c7ddf3]"
					></textarea>

					<input name="date" value={selectedDate} className="hidden" />
				</div>

				<PrimaryButton title={atitle} type={"submit"} color={color} />
			</form>
		</div>
	);
}
