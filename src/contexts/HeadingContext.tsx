import { createContext, FC, useState } from "react";
import { Heading, HeadingContextState } from "types";

const contextDefaultValues: HeadingContextState = {
	heading: {
		title: "",
		detail: "",
		route: "",
	},
	setHeading: () => {},

	isLoading: true,
	setIsLoading: () => {},
};

export const HeadingContext = createContext<HeadingContextState>(contextDefaultValues);

const HeadingProvider: FC = ({ children }) => {
	const [isLoading, setIsLoading] = useState<boolean>(contextDefaultValues.isLoading);
	const [heading, setHeading] = useState<Heading | undefined>(contextDefaultValues.heading);

	return (
		<HeadingContext.Provider
			value={{
				heading,
				setHeading,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</HeadingContext.Provider>
	);
};

export default HeadingProvider;
