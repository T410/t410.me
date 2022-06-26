import { ComponentProps, FC, ReactNode } from "react";

import DarkModeContextProvider from "./DarkModeContext";

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

const providers = [DarkModeContextProvider];
export const AppContextProvider = combineComponents(...providers);
