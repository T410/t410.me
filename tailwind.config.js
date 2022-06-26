module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./elements/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			dark: {
				navbar: "#1c1e24",
				navbarHover: "#272a33",
				background: "#282C34",
				font: "#d0d5df",
				brightFont: "#eee",
				darkFont: "rgba(235,240,255,0.5)",
				anchor: "#fff",
				darkOpacity: "rgba(0,0,0,0.2)",
				darkBorderColor: "#111",
				lightBorderColor: "hsla(0,0%,100%,0.1)",
				code: {
					background: "#393e4b",
					font: "#d0d5d5",
				},
			},
			light: {
				navbar: "#f0f0f0",
				navbarHover: "#dddddd",
				background: "#f5f5f5",
				font: "#343434",
				brightFont: "#222",
				darkFont: "rgba(235,240,255,0.5)",
				anchor: "#111",
				darkOpacity: "rgba(0,0,0,0.03)",
				darkBorderColor: "#bbb",
				lightBorderColor: "#e0e0e0",
				code: {
					background: "rgba(0,0,0,0.05)",
					font: "#111",
				},
			},
			accent: "#fdb54a",
			tagFrom: "#60a5fa",
			tagTo: "#f472b6",
		},
		extend: {
			gridTemplateColumns: {
				"auto-300": "repeat(auto-fill, minmax(0, 300px))",
				"auto-full": "repeat(auto-fill, minmax(0, 100%))",
				"auto-60": "auto 60px",
			},
			spacing: {
				"0.4rem": "0.4rem",
				"0.6rem": "0.6rem",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
