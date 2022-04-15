import React, { createContext, useState, FC, useEffect } from "react";
import { MenuContextState } from "../types";
import { Menu } from "../types";

const contextDefaultValues: MenuContextState = {
	menu: Menu.AboutMe,
	setMenu: () => {},
};

export const MenuContext = createContext<MenuContextState>(contextDefaultValues);

const MenuProvider: FC = ({ children }) => {
	const [menu, setMenu] = useState<Menu>(contextDefaultValues.menu);

	useEffect(() => {
		console.log("T", menu);
	}, [menu]);

	return (
		<MenuContext.Provider
			value={{
				menu,
				setMenu,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuProvider;
