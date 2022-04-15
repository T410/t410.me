export enum Menu {
	Projects,
	Articles,
	AboutMe,
}

export type MenuContextState = {
	menu: Menu;
	setMenu: (menu: Menu) => void;
};
