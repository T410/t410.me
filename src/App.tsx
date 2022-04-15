import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Nav } from "components";
import { Articles, Article, Projects, Me } from "routes";
import { useContext, useEffect } from "react";
import { LocationContext } from "contexts";

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

	useEffect(() => {
		setPath(location.pathname);
	}, [location.pathname, setPath]);
	return (
		<>
			<Nav />
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
	);
}

export default App;
