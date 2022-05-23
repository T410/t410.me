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
};

const colors: { dark: Colors; light: Colors } = {
	dark: {
		navbar: "#1c1e24",
		background: "#282C34",
		navbarHover: "#272a33",
		fontColor: "#d0d5df",
		darkBorderColor: "#111",
		lightBorderColor: "hsla(0,0%,100%,0.1);",
		accentColor: "#fdb54a",
		darkOpacity: "rgba(0,0,0,0.2);",
	},
	light: {
		navbar: "#d3d3d3",
		background: "#f5f5f5",
		navbarHover: "#272a33",
		fontColor: "#d0d5df",
		darkBorderColor: "#111",
		lightBorderColor: "#111",
		accentColor: "#fdb54a",
		darkOpacity: "rgba(0,0,0,0.2);",
	},
};

export { theme, colors };
