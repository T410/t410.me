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
		preBackground: string;

		fontColor: string;
		brightFontColor: string;
		darkFontColor: string;

		lightBorderColor: string;
		darkBorderColor: string;

		accentColor: string;

		darkOpacity: string;

		elements: {
			h: string;
			h1?: string;
			h2?: string;
			h3?: string;
			h4?: string;
			h5?: string;
			h6?: string;

			code: {
				background: string;
				font: string;
			};

			a: {
				font: string;
				underline: string;
			};
		};
	}
}
