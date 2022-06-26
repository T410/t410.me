import { ComponentProps, FC, ReactNode } from "react";

import APIContextProvider from "./APIContext";
import DarkModeContextProvider from "./DarkModeContext";
import ScreenSizeContextProvider from "./ScreenSizeContext";

export const combineComponents = (...components: FC<{ children: ReactNode }>[]): FC<{ children: ReactNode }> => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return function CombinedComponents({ children }: ComponentProps<FC<{ children: ReactNode }>>): JSX.Element {
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

const providers = [APIContextProvider, DarkModeContextProvider, ScreenSizeContextProvider];
export const AppContextProvider = combineComponents(...providers);
