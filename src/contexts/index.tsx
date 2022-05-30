import React, { ComponentProps, FC } from "react";

import APIContextProvider from "./APIContext";
import DarkModeContextProvider from "./DarkModeContext";
import TitleContextProvider from "./TitleContext";
import ScreenSizeContextProvider from "./ScreenSizeContext";

export const combineComponents = (...components: FC[]): FC => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }: ComponentProps<FC>): JSX.Element => {
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

const providers = [APIContextProvider, DarkModeContextProvider, TitleContextProvider, ScreenSizeContextProvider];
export const AppContextProvider = combineComponents(...providers);
