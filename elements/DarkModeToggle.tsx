import { DarkModeContext } from "contexts/DarkModeContext";
import { FC, useContext } from "react";

declare global {
	interface Window {
		dataLayer: Record<string, any>[];
	}
}

const count = 8;

const DarkModeToggle: FC = () => {
	const arr = Array.from({ length: 8 }, (_, i) => i + 1);
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	const onClickHandler = () => {
		let eventName = "";
		if (darkMode) {
			eventName = "toggle-to-light";
		} else {
			eventName = "toggle-to-dark";
		}
		window.dataLayer.push({ event: eventName });
		setDarkMode(!darkMode);
	};

	return (
		<div className="cursor-pointer px-2 sm:px-4 relative" onClick={onClickHandler}>
			<div className="z-10 w-4 h-4 rounded-full dark:bg-moon bg-accent"></div>
			<div className="absolute top-0 z-20 w-4 h-4 rounded-full bg-dark-navbar dark:animate-moveLeft animate-moveRight"></div>
			<div className="-z-10 absolute w-4 h-4 flex items-center justify-center top-0">
				{arr.map((x, i) => (
					<div
						key={`ray-${i}`}
						className={`absolute w-2 h-1`}
						style={{ transform: `rotate(${(360 / count) * i - 90}deg)` }}
					>
						<div className="absolute w-2 h-1 rounded dark:bg-accent bg-accent dark:animate-spread animate-unspread"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DarkModeToggle;
