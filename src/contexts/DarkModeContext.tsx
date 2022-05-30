import { usePersist } from "hooks";
import { createContext, FC, useEffect, useState } from "react";
import { DarkModeContextState } from "types";

const contextDefaultValues: DarkModeContextState = {
	darkMode: true,
	setDarkMode: () => {},
};

export const DarkModeContext = createContext<DarkModeContextState>(contextDefaultValues);

const DarkModeProvider: FC = ({ children }) => {
	const persistedDarkMode = usePersist<boolean>({ stateName: "darkMode", initialValue: contextDefaultValues.darkMode });
	const [darkMode, setDarkMode] = useState<boolean>(persistedDarkMode.getState());

	useEffect(() => {
		persistedDarkMode.setState(darkMode);
	}, [darkMode, persistedDarkMode]);

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
