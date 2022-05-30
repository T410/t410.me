import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	scroll-behavior: smooth;
    font-size: 1.2rem;
	background-color: ${({ theme }) => theme.colors.background};
}

p {
    line-height: 1.65rem;
}

a {
    text-decoration: none;
}

img {
    max-width: 100%;
	height: auto;
}

* {
	box-sizing: border-box;
	line-height: 1.65;
}

::selection{
	background: ${({ theme }) => theme.colors.accentColor};
	color: ${({ theme }) => theme.colors.background};
}
`;

export default GlobalStyle;
