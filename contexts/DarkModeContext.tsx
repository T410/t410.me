import { usePersist } from "hooks";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { DarkModeContextState } from "types";
import { MetaTagContext } from "./MetaTagContext";
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
	const { setMetaThemeColor } = useContext(MetaTagContext);

	useEffect(() => {
		setPersistedDarkMode(darkMode);
		setMetaThemeColor(darkMode ? "#000" : "#eee");
	}, [darkMode, setPersistedDarkMode, setMetaThemeColor]);

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
