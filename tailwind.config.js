/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'Mountain': "url('/moun.jpg')", // Aquí se hace la corrección, solo necesitas '/moun.jpg'
			},
		},
	},
	plugins: [],
}
