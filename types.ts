export interface DarkModeContextState {
	darkMode: boolean;
	setDarkMode(darkMode: boolean): void;
}

export type YearArticle = [number, ...Array<ArticleInterface>][];

export interface ArticleInterface {
	id: number;
	title: string;
	description: string;
	content: string;
	tags: string[];
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
