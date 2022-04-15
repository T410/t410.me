import { Routes, Route, Outlet, useParams, useLocation } from "react-router-dom";
import { Nav } from "components";
import { Articles, Article, Projects, Me } from "routes";
import { useContext, useEffect } from "react";
import { TitleContext } from "contexts";
import { removeDash, upperFirst } from "utils/stringParser";

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
	const params = useParams<{}>();
	const location = useLocation();

	useEffect(() => {
		setTitle(upperFirst(removeDash(location.pathname.split("/")[1])));
		console.log(params, location);
	});
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
					<Route path="/articles/:id" element={<Article />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
