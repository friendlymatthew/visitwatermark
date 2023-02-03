const { urlencoded } = require("express");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tailwind-datepicker-react/dist/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				title: "'Cormorant Garamond', serif",
				noto: "'Noto Serif', serif",
				body: "'Noto Sans', sans-serif",
			},
		},
	},
	plugins: [],
};
