import { DarkModeContext } from "contexts/DarkModeContext";
import { FC, useContext } from "react";
import Toggle from "react-toggle";
import styled from "styled-components";
import { darkMode as darkModeSVG, lightMode as lightModeSVG } from "assets";

interface IconProps {
	svg: string;
	alt: string;
}
const Icon: FC<IconProps> = ({ svg, alt }: { svg: string; alt: string }) => {
	return <img src={svg} alt={alt} />;
};

const CustomToggle: FC = ({ ...props }) => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	return (
		<Toggle
			checked={darkMode}
			aria-label="Toggle dark mode"
			onChange={() => {
				setDarkMode(!darkMode);
			}}
			icons={{
				checked: <Icon svg={darkModeSVG} alt="Dark Mode" />,
				unchecked: <Icon svg={lightModeSVG} alt="Light Mode" />,
			}}
			{...props}
		></Toggle>
	);
};

const DarkModeToggle = styled(CustomToggle)`
	&.react-toggle {
		touch-action: pan-x;
		display: inline-block;
		position: relative;
		cursor: pointer;
		background-color: transparent;
		border: 0;
		padding: 0;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent;
	}

	.react-toggle-screenreader-only {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}

	&.react-toggle--disabled {
		cursor: not-allowed;
		opacity: 0.5;
		-webkit-transition: opacity 0.25s;
		transition: opacity 0.25s;
	}

	.react-toggle-track {
		width: 50px;
		height: 24px;
		padding: 0;
		border-radius: 30px;
		background-color: #040405;
		transition: all 0.2s ease;
	}

	&.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
		background-color: #000000;
	}

	.react-toggle--checked .react-toggle-track {
		background-color: #19ab27;
	}

	&.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
		background-color: #128d15;
	}

	.react-toggle-track-check {
		position: absolute;
		width: 17px;
		height: 17px;
		left: 5px;
		top: 0;
		bottom: 0;
		margin-top: auto;
		margin-bottom: auto;
		line-height: 0;
		opacity: 0;
		transition: opacity 0.25s ease;
	}

	&.react-toggle--checked .react-toggle-track-check {
		opacity: 1;
		-webkit-transition: opacity 0.25s ease;
		-moz-transition: opacity 0.25s ease;
		transition: opacity 0.25s ease;
	}

	.react-toggle-track-x {
		position: absolute;
		width: 17px;
		height: 17px;
		right: 5px;
		top: 0;
		bottom: 0;
		margin-top: auto;
		margin-bottom: auto;
		line-height: 0;
	}

	&.react-toggle--checked .react-toggle-track-x {
		opacity: 0;
	}

	.react-toggle-thumb {
		position: absolute;
		top: 1px;
		left: 1px;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background-color: #fafafa;
		box-sizing: border-box;
		transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
		transform: translateX(0);
	}

	&.react-toggle--checked .react-toggle-thumb {
		transform: translateX(26px);
		border-color: #19ab27;
	}

	&.react-toggle--focus .react-toggle-thumb {
		box-shadow: 0 0 2px 3px #ffa7c4;
	}

	&.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
		-webkit-box-shadow: 0px 0px 5px 5px #0099e0;
		-moz-box-shadow: 0px 0px 5px 5px #0099e0;
		box-shadow: 0px 0px 5px 5px #0099e0;
	}
`;

export default DarkModeToggle;
