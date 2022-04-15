import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<main>
			<div className="sidebar-display"></div>
			<div className="main-content">
				<Outlet />
			</div>
			<div className="sidebar-display"></div>
		</main>
	);
};

export default Main;
