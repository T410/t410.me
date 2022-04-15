const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const vars = {
	siteWidth: "1280px",
};

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
			lineHeight: {
				7.5: "30px",
			},
			colors: {
				custom: {
					black: "#08090a",
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme, addBase }) {
			addComponents({
				".card": {
					borderRadius: theme("borderRadius.lg"),
					borderWidth: theme("borderWidth.DEFAULT"),
					borderColor: "rgba(150, 189, 231, 0.25)",
					backgroundColor: colors.neutral[900],
					padding: theme("spacing.5"),
				},
				".header": {
					position: "fixed",
					top: 0,
				},
				".header-container": {
					position: "relative",
					padding: `0 ${theme("spacing.4")}`,
					height: theme("spacing.14"),
					display: "flex",
					alignItems: "center",
					margin: "auto",
					maxWidth: vars.siteWidth,
				},
				".header-link": {
					"&:hover": {
						backgroundColor: theme("colors.indigo.900"),
						textDecoration: "underline",
						color: theme("colors.indigo.300"),
					},
					padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
					borderRadius: theme("borderRadius.lg"),
					color: "white",
				},
				".header-link-selected": {
					backgroundColor: theme("colors.indigo.900"),
					color: theme("colors.indigo.300"),
					textDecoration: "none !important",
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
				".new-tab": {
					"&:after": {
						content: "' ↗'",
						fontSize: theme("fontSize.sm"),
						fontWeight: theme("fontWeight.bold"),
					},
				},
				".markdown *": {
					lineHeight: theme("lineHeight.[7.5]"),
				},
				".markdown>h1": {
					fontSize: theme("fontSize.5xl"),
					fontWeight: theme("fontWeight.extrabold"),
				},
				".markdown>h2": {
					fontSize: theme("fontSize.3xl"),
					fontWeight: theme("fontWeight.bold"),
					margin: `${theme("spacing.[2.5]")} 0`,
				},
				".markdown>h3": {
					fontSize: theme("fontSize.2xl"),
					fontWeight: theme("fontWeight.bold"),
					margin: `${theme("spacing.[2.5]")} 0`,
				},
				".markdown a": {
					fontWeight: theme("fontWeight.medium"),
					textDecoration: "underline",
					"&:hover": {
						color: theme("colors.indigo.300"),
					},
				},
				".markdown p": {
					fontSize: theme("fontSize.xl"),
					marginBottom: theme("spacing.5"),
				},
				".markdown blockquote": {
					borderLeftColor: theme("colors.neutral.700"),
					borderLeftWidth: theme("borderWidth.4"),
					paddingLeft: theme("spacing.5"),
				},
				".markdown pre": {
					padding: "0 !important",
					overflow: "auto",
					backgroundColor: `${theme("colors.custom.black")} !important`,
				},
				".markdown ul": {
					marginBottom: theme("spacing.5"),
					paddingLeft: theme("spacing.6"),
					fontSize: theme("fontSize.xl"),
				},
				".markdown img": {
					marginLeft: "auto",
					marginRight: "auto",
					maxWidth: "100%",
				},
				".markdown code": {
					fontSize: "1rem",
					lineHeight: "1.5rem",
					padding: `0.1rem ${theme("spacing.1")}`,
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
				a: {
					color: theme("colors.indigo.400"),
				},
				ul: {
					listStyleType: "disc",
				},
			});
		}),
	],
};
