import { Outlet } from "react-router-dom";
import { Sidebar } from "components";

const Main = () => {
	return (
		<div className="h-full flex sm:grid sm:grid-cols-layout gap-2 bg-primary-900">
			<Sidebar />
			<div className="w-full min-h-full h-fit p-5 rounded bg-primary-700">
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
