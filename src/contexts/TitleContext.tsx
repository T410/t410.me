import { createContext, useState, FC, useEffect } from "react";
import { matchPath } from "react-router-dom";
import { removeDash, upperFirst, forEachWord } from "utils/stringParser";

const INITIAL_TITLE = "Tayyib Cankat";

declare global {
	interface Window {
		gtag?: (key: string, trackingId: string, page_path?: string) => void;
	}
}

interface LocationContextState {
	pathname: string;
	setPath: (pathname: string) => void;
}

const contextDefaultValues: LocationContextState = {
	pathname: "/",
	setPath: () => {},
};

export const LocationContext = createContext<LocationContextState>(contextDefaultValues);

const setTitle = (title: string) => {
	document.title = title + " | " + INITIAL_TITLE;
};

const LocationProvider: FC = ({ children }) => {
	const [pathname, setPathname] = useState<string>(contextDefaultValues.pathname);

	useEffect(() => {
		const match = matchPath("/articles/:id/:slug", pathname);
		let title = "";

		if (match) {
			title = forEachWord(removeDash(match.params.slug || ""))(upperFirst);
		} else if (pathname !== "/") {
			title = forEachWord(removeDash(pathname.split("/")[1]))(upperFirst);
		}

		setTitle(title);
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
