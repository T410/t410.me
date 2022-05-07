import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "components";
import { Articles, Article, Projects, Me, Home } from "routes";
import { useContext, useEffect } from "react";
import { LocationContext } from "contexts";
import styled, { ThemeProvider } from "styled-components";
import { colors, theme } from "theme";
import GlobalStyle from "index.styles";
import { DarkModeContext } from "contexts/DarkModeContext";

const Main = styled.main`
	margin-top: 1rem;
	margin-left: auto;
	margin-right: auto;
	max-width: ${({ theme }) => theme.pageWidth};
	padding: 2rem;
`;
function WithMain({ className }: { className?: string }) {
	return (
		<Main>
			{/* <div className="sidebar-display"></div> */}
			{/* <div className="main-content"> */}
			<Outlet />
			{/* </div> */}
			{/* <div className="sidebar-display"></div> */}
		</Main>
	);
}

function App() {
	const { setPath } = useContext(LocationContext);
	const location = useLocation();
	const { darkMode } = useContext(DarkModeContext);

	useEffect(() => {
		setPath(location.pathname);
	}, [location.pathname, setPath]);

	return (
		<ThemeProvider theme={{ ...theme, colors: darkMode === true ? colors.dark : colors.light }}>
			<GlobalStyle />
			<>
				<Navbar />
				<Routes>
					<Route path="/" element={<WithMain />}>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/about-me" element={<Me />} />
						<Route path="/articles" element={<Articles />} />
					</Route>
					<Route element={<WithMain className="article-main" />}>
						<Route path="/articles/:id/:slug" element={<Article />} />
					</Route>
				</Routes>
			</>
		</ThemeProvider>
	);
}

export default App;
