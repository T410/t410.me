import { Routes, Route, Outlet, useLocation, useMatch } from "react-router-dom";
import { Nav } from "components";
import { Articles, Article, Projects, Me } from "routes";
import { useContext, useEffect } from "react";
import { TitleContext } from "contexts";
import { removeDash, upperFirst, forEachWord } from "utils/stringParser";

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
	const { setTitle } = useContext(TitleContext);
	const location = useLocation();
	const slugMatch = useMatch("/articles/:id/:slug/");

	useEffect(() => {
		let title = "";
		if (slugMatch) {
			title = upperFirst(removeDash(slugMatch.params.slug || ""));
		} else if (location.pathname) {
			title = forEachWord(removeDash(location.pathname.split("/")[1]))(upperFirst);
		}
		setTitle(title);
	}, [location.pathname, setTitle, slugMatch]);
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
