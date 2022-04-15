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
	},
	plugins: [
		plugin(function ({ addComponents, theme, addBase }) {
			addComponents({
				".card": {
					borderRadius: theme("borderRadius.lg"),
					borderWidth: theme("borderWidth.DEFAULT"),
					borderColor: "rgba(150, 189, 231, 0.25)", // colors.navy.100/25
					padding: theme("spacing.5"),
				},
				".header-link": {
					"&:hover": {
						backgroundColor: theme("colors.indigo.900"),
						textDecoration: "underline",
						color: theme("colors.indigo.300"),
					},
					padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
					borderRadius: theme("borderRadius.lg"),
				},
				".header-link-selected": {
					backgroundColor: theme("colors.indigo.900"),
					color: theme("colors.indigo.300"),
					textDecoration: "none !important",
				},
				".header-container": {
					position: "relative",
					padding: `0 ${theme("spacing.4")}`,
					height: theme("spacing.14"),
					display: "flex",
					alignItems: "center",
				},
				".hamburger": {
					zIndex: 200,
					position: "fixed",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
				},
				".hamburger-content": {
					position: "relative",
					height: "100%",
					width: "90%",
					maxWidth: "300px",
					display: "flex",
					flexDirection: "column",
					backgroundColor: theme("colors.neutral.900"),
					zIndex: 1,
				},
				".hamburger-overlay": {
					backgroundColor: "white",
					opacity: 0.5,
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
				},
				".header": {
					position: "fixed",
					top: 0,
				},
			});

			addBase({
				"html, body": {
					color: "white",
				},
				header: {
					width: theme("width.full"),
					height: theme("spacing.14"),
					boxShadow: theme("boxShadow.sm"),
					backgroundColor: theme("colors.neutral.900"),
				},
				h2: {
					fontWeight: theme("fontWeight.bold"),
					fontSize: theme("fontSize.lg"),
				},
			});
		}),
	],
};
