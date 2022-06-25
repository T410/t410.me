module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./elements/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			dark: {
				navbar: "#1c1e24",
				background: "#282C34",
				font: "#d0d5df",
				brightFont: "#eee",
				darkFont: "rgba(235,240,255,0.5)",
				anchor: "#fff",
			},
			light: {
				navbar: "#f0f0f0",
				background: "#f5f5f5",
				font: "#343434",
				brightFont: "#222",
				darkFont: "rgba(235,240,255,0.5)",
				anchor: "#111",
			},
			accent: "#fdb54a",
		},
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
