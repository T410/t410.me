const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				layout: "10rem auto",
			},
			gridTemplateRows: {
				layout: "1fr 12fr 1fr",
			},
		},
		colors: {
			white: colors.white,
			primary: colors.slate,
			secondary: colors.orange,
		},
	},
	plugins: [],
};
