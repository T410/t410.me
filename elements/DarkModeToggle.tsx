import { DarkModeContext } from "contexts/DarkModeContext";
import { FC, useContext } from "react";

const count = 8;

const DarkModeToggle: FC = () => {
	const arr = Array.from({ length: 8 }, (_, i) => i + 1);
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	const onClickHandler = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className="cursor-pointer px-4 relative" onClick={onClickHandler}>
			<div className="z-10 flex justify-center items-center w-4 h-4 rounded-full dark:bg-moon bg-accent"></div>
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
