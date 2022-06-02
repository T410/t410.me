import { createContext, FC, useEffect } from "react";
import { MetaTagContextState } from "types";

const contextDefaultValues: MetaTagContextState = {
	setMetaTitle: () => {},
	setMetaDescription: () => {},
	setMetaThemeColor: () => {},
};

export const MetaTagContext = createContext<MetaTagContextState>(contextDefaultValues);

const withAuthorName = (val: string) => {
	return `${val} - Tayyib Cankat`;
};

const setTitle = (title: string) => {
	const metaTags = document.head.querySelectorAll('meta[property*=":title"],meta[name="title"]');
	metaTags.forEach((tag) => {
		tag.setAttribute("content", withAuthorName(title));
	});
};

const setDescription = (description: string) => {
	const metaTags = document.head.querySelectorAll('meta[property*=":description"],meta[name="description"]');
	metaTags.forEach((tag) => {
		tag.setAttribute("content", withAuthorName(description));
	});
};

const setThemeColor = (color: string) => {
	document.head.querySelector('meta[name="theme-color"]')?.setAttribute("content", color);
};

const MetaTagProvider: FC = ({ children }) => {
	useEffect(() => {}, []);

	return (
		<MetaTagContext.Provider
			value={{
				setMetaTitle: setTitle,
				setMetaDescription: setDescription,
				setMetaThemeColor: setThemeColor,
			}}
		>
			{children}
		</MetaTagContext.Provider>
	);
};

export default MetaTagProvider;
