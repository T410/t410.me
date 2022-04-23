import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "components";
import { Articles, Article, Projects, Me } from "routes";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "contexts";
import { ThemeProvider } from "styled-components";
import { colors, theme } from "theme";
import GlobalStyle from "index.styles";
import { DarkModeContext } from "contexts/DarkModeContext";

enum ThemeMode {
	Light,
	Dark,
}

function WithMain({ className }: { className?: string }) {
	return (
		<main className={className}>
			<div className="sidebar-display"></div>
			<div className="main-content">
				<Outlet />
			</div>
			<div className="sidebar-display"></div>
		</main>
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
						<Route path="/" element={<Me />} />
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
