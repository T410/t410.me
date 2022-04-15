export enum Menu {
	Projects = "projects" as any,
	Articles = "articles" as any,
	"About Me" = "about-me" as any,
	Undefined = "undefined" as any,
}

export type MenuContextState = {
	menu: Menu;
	setMenu: (menu: Menu) => void;
};

export interface ArticleListing {
	id: number;
	title: string;
	content: string;
	canonical_url: string;
	tag_list: string;
	slug: string;
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
