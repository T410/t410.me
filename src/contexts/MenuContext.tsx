import { createContext, useState, FC } from "react";
import { Menu, MenuContextState } from "types";

const contextDefaultValues: MenuContextState = {
	menu: Menu["About Me"],
	setMenu: () => {},
};

export const MenuContext = createContext<MenuContextState>(contextDefaultValues);

const MenuProvider: FC = ({ children }) => {
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
