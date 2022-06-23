import { createContext, useState, FC, ReactNode } from "react";
import { Menu, MenuContextState } from "types";

const contextDefaultValues: MenuContextState = {
	menu: Menu["Me"],
	setMenu: () => {},
};

export const MenuContext = createContext<MenuContextState>(contextDefaultValues);

const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [menu, setMenu] = useState<Menu>(contextDefaultValues.menu);

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
