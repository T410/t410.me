const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

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
			scale: {
				102: "102%",
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
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				".card": {
					borderRadius: theme("borderRadius.lg"),
					borderWidth: theme("borderWidth.DEFAULT"),
					borderColor: "rgba(150, 189, 231, 0.25)", // colors.navy.100/25
					padding: theme("spacing.5"),
				},
			});
		}),
	],
};
