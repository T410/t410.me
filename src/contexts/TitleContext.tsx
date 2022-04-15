import { createContext, useState, FC, useEffect } from "react";

interface TitleContextState {
	title: string;
	setTitle: (title: string) => void;
}

const contextDefaultValues: TitleContextState = {
	title: "Tayyib Cankat",
	setTitle: () => {},
};

export const TitleContext = createContext<TitleContextState>(contextDefaultValues);

const TitleProvider: FC = ({ children }) => {
	const [title, _setTitle] = useState<string>("");

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<TitleContext.Provider
			value={{
				title,
				setTitle: (title: string) => _setTitle(title + " | " + contextDefaultValues.title),
			}}
		>
			{children}
		</TitleContext.Provider>
	);
};

export default TitleProvider;
