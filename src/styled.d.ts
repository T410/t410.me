import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: Colors;
		navbarHeight: string;
		pageWidth: string;
	}
	export interface Colors {
		navbar: string;
		navbarHover: string;
		background: string;
		fontColor: string;
	}
}
