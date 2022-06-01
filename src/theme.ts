import { DefaultTheme, Colors } from "styled-components";
import { ScreenSize } from "types";

const theme: Omit<DefaultTheme, "colors"> = {
	navbarHeight: "59px",
	pageWidth: "1100px",
	borderRadius: "0.5rem",
	breakpoints: {
		XS: ScreenSize.XS,
		S: ScreenSize.S,
		M: ScreenSize.M,
		L: ScreenSize.L,
		XL: ScreenSize.XL,
	},
	fonts: {
		code: 'Menlo,"Roboto Mono",Courier New,monospace',
	},
};

const colors: { dark: Colors; light: Colors } = {
	dark: {
		navbar: "#1c1e24",
		navbarHover: "#272a33",

		background: "#282C34",
		preBackground: "#373c47",

		fontColor: "#d0d5df",
		brightFontColor: "#eee",
		darkFontColor: "rgba(235,240,255,0.5)",

		darkBorderColor: "#111",
		lightBorderColor: "hsla(0,0%,100%,0.1)",

		accentColor: "#fdb54a",

		darkOpacity: "rgba(0,0,0,0.2)",
		elements: {
			h: "#fdb54a",
			code: {
				font: "#d0d5d",
				background: "#393e4b",
			},
			a: {
				font: "#fff",
				underline: "#fdb54a",
			},
		},
	},
	light: {
		navbar: "#f0f0f0",
		navbarHover: "#dddddd",

		background: "#f5f5f5",
		preBackground: "#373c47",

		fontColor: "#343434",
		brightFontColor: "#222",
		darkFontColor: "rgba(235,240,255,0.5)",

		darkBorderColor: "#bbb",
		lightBorderColor: "#e0e0e0",

		accentColor: "#fdb54a",

		darkOpacity: "rgba(0,0,0,0.03)",
		elements: {
			h: "#222",
			code: {
				font: "#111",
				background: "rgba(0,0,0,0.05)",
			},
			a: {
				font: "#111",
				underline: "",
			},
		},
	},
};

export { theme, colors };
