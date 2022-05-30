import "styled-components";
import { ScreenSize } from "types";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: Colors;
		navbarHeight: string;
		pageWidth: string;
		borderRadius: string;
		breakpoints: { [key in keyof typeof ScreenSize]: number };
		fonts: {
			code: CSSProperties["fontFamily"];
		};
	}

	export interface Colors {
		navbar: string;
		navbarHover: string;

		background: string;
		codeBackground: string;

		fontColor: string;
		brightFontColor: string;

		lightBorderColor: string;
		darkBorderColor: string;

		accentColor: string;

		darkOpacity: string;
	}
}
