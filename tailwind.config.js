module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./elements/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-300": "repeat(auto-fill, minmax(0, 300px))",
				"auto-full": "repeat(auto-fill, minmax(0, 100%))",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
