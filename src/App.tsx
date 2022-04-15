import { Routes, Route, Outlet } from "react-router-dom";
import { Nav } from "components";
import { Articles, Article, Projects, Me } from "routes";

function WithMain({ className, children }: { className?: string; children?: React.ReactNode }) {
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
