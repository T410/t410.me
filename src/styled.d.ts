import "styled-components";
import { ScreenSize } from "types";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: Colors;
		navbarHeight: string;
		pageWidth: string;
		borderRadius: string;
		breakpoints: { [key in keyof typeof ScreenSize]: number };
	}

	export interface Colors {
		navbar: string;
		navbarHover: string;
		background: string;
		fontColor: string;
		lightBorderColor: string;
		darkBorderColor: string;
		accentColor: string;
		darkOpacity: string;
	}
}
