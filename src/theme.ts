import { DefaultTheme, Colors } from "styled-components";
const theme: Omit<DefaultTheme, "colors"> = {
	navbarHeight: "59px",
	pageWidth: "850px",
};

const colors: { dark: Colors; light: Colors } = {
	dark: {
		navbar: "#1c1e24",
		background: "#282C34",
		navbarHover: "#272a33",
		fontColor: "#d0d5df",
	},
	light: {
		navbar: "#d3d3d3",
		background: "#f5f5f5",
		navbarHover: "#272a33",
		fontColor: "#d0d5df",
	},
};

export { theme, colors };
