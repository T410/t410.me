import { createContext, FC, useState } from "react";
import { DarkModeContextState } from "types";

const contextDefaultValues: DarkModeContextState = {
	darkMode: true,
	setDarkMode: () => {},
};

export const DarkModeContext = createContext<DarkModeContextState>(contextDefaultValues);

const DarkModeProvider: FC = ({ children }) => {
	const [darkMode, setDarkMode] = useState<boolean>(contextDefaultValues.darkMode);

	return (
		<DarkModeContext.Provider
			value={{
				darkMode,
				setDarkMode,
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeProvider;
