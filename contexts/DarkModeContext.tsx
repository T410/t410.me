import { usePersist } from "hooks";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { DarkModeContextState } from "types";
// import { colors } from "theme";

const contextDefaultValues: DarkModeContextState = {
	darkMode: true,
	setDarkMode: () => {},
};

export const DarkModeContext = createContext<DarkModeContextState>(contextDefaultValues);

const DarkModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [persistedDarkMode, setPersistedDarkMode] = usePersist<boolean>({
		stateName: "darkMode",
		initialValue: contextDefaultValues.darkMode,
	});
	const [darkMode, setDarkMode] = useState<boolean>(persistedDarkMode);

	useEffect(() => {
		setPersistedDarkMode(darkMode);
	}, [darkMode, setPersistedDarkMode]);

	return (
		<DarkModeContext.Provider
			value={{
				darkMode,
				setDarkMode: (val: boolean) => {
					setDarkMode(val);
				},
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeProvider;
