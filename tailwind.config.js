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
			navy: {
				100: "#96BDE7",
				200: "#749ECC",
				300: "#5681B1",
				400: "#3D6696",
				500: "#284D7B",
				600: "#173860",
				700: "#0B2444",
				800: "#031429",
				900: "#00060E",
			},
			white: colors.white,
			black: colors.black,
		},
	},
	plugins: [],
};
