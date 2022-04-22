import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "components";
import { Articles, Article, Projects, Me } from "routes";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "contexts";
import { ThemeProvider } from "styled-components";
import theme from "theme";

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
	const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.Dark);
	const { setPath } = useContext(LocationContext);
	const location = useLocation();

	useEffect(() => {
		setPath(location.pathname);
	}, [location.pathname, setPath]);
	return (
		<ThemeProvider theme={themeMode === ThemeMode.Dark ? theme.dark : theme.light}>
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
