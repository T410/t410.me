export enum Menu {
	Projects = "projects" as any,
	Articles = "articles" as any,
	"About Me" = "about-me" as any,
}

export type MenuContextState = {
	menu: Menu;
	setMenu: (menu: Menu) => void;
};

export interface Article {
	id: number;
	title: string;
	content: string;
	canonical_url: string;
	tag_list: string[];
	slug: string;
}
