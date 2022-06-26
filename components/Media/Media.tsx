import { ScreenSizeContext } from "contexts/ScreenSizeContext";
import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { ScreenSize } from "types";

interface ScreenProps {
	showOn: ScreenSize;
	children: ReactNode;
}

const Screen: FC<ScreenProps> = ({ children, showOn }) => {
	const { screenSize } = useContext(ScreenSizeContext);

	const [shouldRender, setShouldRender] = useState(false);

	console.log(showOn, screenSize);
	useEffect(() => {
		if (!showOn || screenSize >= showOn) {
			setShouldRender(true);
		} else {
			setShouldRender(false);
		}
	}, [screenSize, showOn]);

	return shouldRender ? <>{children}</> : null;
};

export { Screen };
