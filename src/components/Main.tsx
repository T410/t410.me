import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<main>
			<div className="bg-white"></div>
			<div className="main-content">
				<Outlet />
			</div>
			<div className="bg-white hidden lg:block"></div>
		</main>
	);
};

export default Main;
