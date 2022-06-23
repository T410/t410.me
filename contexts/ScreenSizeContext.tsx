import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { ScreenSize, ScreenSizeContextState } from "types";

const contextDefaultValues: ScreenSizeContextState = {
	screenSize: ScreenSize.XS,
	setScreenSize: () => {},
};

export const ScreenSizeContext = createContext<ScreenSizeContextState>(contextDefaultValues);

const detectScreenSize = (val: number) => {
	let screenSize = ScreenSize.XS;
	Object.keys(ScreenSize).forEach((_key) => {
		const key = _key as keyof typeof ScreenSize;
		if (val >= ScreenSize[key]) {
			screenSize = ScreenSize[key];
		}
	});
	return screenSize;
};

const ScreenSizeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [screenSize, setScreenSize] = useState<ScreenSize>(contextDefaultValues.screenSize);

	useEffect(() => {
		const resize = () => {
			setScreenSize(detectScreenSize(window.innerWidth));
		};
		window.addEventListener("resize", resize);
		resize();

		return () => window.removeEventListener("resize", resize);
	});

	return (
		<ScreenSizeContext.Provider
			value={{
				screenSize,
				setScreenSize,
			}}
		>
			{children}
		</ScreenSizeContext.Provider>
	);
};

export default ScreenSizeProvider;
