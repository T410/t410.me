import { createContext, useState, FC, useEffect, ReactNode } from "react";
import { removeDash, upperFirst, forEachWord } from "utils/stringParser";
import { useRouter } from "next/router";

const INITIAL_TITLE = "Tayyib Cankat";

declare global {
	interface Window {
		gtag?: (key: string, trackingId: string, page_path?: string) => void;
	}
}

interface TitleContextState {
	pathname: string;
	setPath: (pathname: string) => void;
}

const contextDefaultValues: TitleContextState = {
	pathname: "/",
	setPath: () => {},
};

export const LocationContext = createContext<TitleContextState>(contextDefaultValues);

const withInitialTitle = (val: string) => {
	return `${val} | ${INITIAL_TITLE}`;
};

const setTitle = (title: string) => {
	document.title = title;
};

const LocationProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [pathname, setPathname] = useState<string>(contextDefaultValues.pathname);
	// const { setMetaTitle } = useContext(MetaTagContext);

	useEffect(() => {
		// const match = matchPath("/articles/:id/:slug", pathname);
		let title = "Software Engineer";

		// if (match) {
		// 	title = forEachWord(removeDash(match.params.slug || ""))(upperFirst);
		// } else if (pathname !== "/") {
		// 	title = forEachWord(removeDash(pathname.split("/")[1]))(upperFirst);
		// }

		setTitle(withInitialTitle(title));
		// setMetaTitle(withInitialTitle(title));
		if (window.gtag) {
			window.gtag("set", "page_path", "debug" + pathname);
			window.gtag("event", "page_view");
		}
	}, [pathname]);

	return (
		<LocationContext.Provider
			value={{
				pathname,
				setPath: setPathname,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};

export default LocationProvider;
