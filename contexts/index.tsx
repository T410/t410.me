import { ComponentProps, FC, ReactNode } from "react";

import APIContextProvider from "./APIContext";
import HeadingProvider from "./HeadingContext";
import MetaTagProvider from "./MetaTagContext";
import TitleContextProvider from "./TitleContext";
import DarkModeContextProvider from "./DarkModeContext";
import ScreenSizeContextProvider from "./ScreenSizeContext";

export const combineComponents = (...components: FC<{ children: ReactNode }>[]): FC<{ children: ReactNode }> => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }: ComponentProps<FC<{ children: ReactNode }>>): JSX.Element => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>
	);
};

const providers = [
	HeadingProvider,
	MetaTagProvider,
	APIContextProvider,
	TitleContextProvider,
	DarkModeContextProvider,
	ScreenSizeContextProvider,
];
export const AppContextProvider = combineComponents(...providers);
