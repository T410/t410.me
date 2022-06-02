import { Fetch } from "utils/API";
export enum Menu {
	Projects = "projects" as any,
	Articles = "articles" as any,
	Me = "me" as any,
	Undefined = "undefined" as any,
}

export interface MenuContextState {
	menu: Menu;
	setMenu(menu: Menu): void;
}

export interface TitleContextState {
	pathname: string;
	setPath(pathname: string): void;
}

export interface MetaTagContextState {
	setMetaTitle(title: string): void;
	setMetaDescription(description: string): void;
	setMetaThemeColor(color: string): void;
}

export interface APIContextState {
	getArticle: (id: string) => Fetch<Article>;
	getArticles: () => Fetch<ArticleListing[]>;
	getProjects: () => Fetch<Project[]>;
	getHeading: (route: string) => Fetch<Heading>;
}

export interface DarkModeContextState {
	darkMode: boolean;
	setDarkMode: (darkMode: boolean) => void;
}

export enum ScreenSize {
	XS = 0 as number,
	S = 576 as number,
	M = 768 as number,
	L = 992 as number,
	XL = 1200 as number,
}
export interface ScreenSizeContextState {
	screenSize: ScreenSize;
	setScreenSize: (screenSize: ScreenSize) => void;
}

export interface ArticleListing {
	id: number;
	title: string;
	content: string;
	canonical_url: string;
	tag_list: string;
	slug: string;
	published_at: string;
}

export interface Article {
	id: number;
	title: string;
	description: string;
	body_markdown: string;
	body_html: string;
	tag_list: string;
	canonical_url: string;
}

export interface Project {
	_id: string;
	title: string;
	description: string;
	demo: string;
	source: string;
}

export interface Heading {
	route: string;
	title: string;
	detail: string;
}
