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
	getArticle(id: string): Fetch<Article>;
	getArticles(): Fetch<ArticleListing[]>;
	getProjects(): Fetch<Project[]>;
	getHeading(route: string): Fetch<Heading>;
}

export interface DarkModeContextState {
	darkMode: boolean;
	setDarkMode(darkMode: boolean): void;
}

export interface HeadingContextState {
	heading: Heading | undefined;
	isLoading: boolean;
	setHeading(heading: Heading | undefined): void;
	setIsLoading(isLoading: boolean): void;
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
	setScreenSize(screenSize: ScreenSize): void;
}

export type YearArticle = [number, ...Array<Article>][];

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
	content: string;
	tags: string;
	published_at: string;
	updated_at: string;
	slug: string;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	demo: string;
	source: string;
	priority: number;
}

export interface Heading {
	route: string;
	title: string;
	detail: string;
}
