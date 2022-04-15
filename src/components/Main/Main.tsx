import { Outlet } from "react-router-dom";
import { Sidebar } from "components";

const Main = () => {
	return (
		<div className="h-full grid sm:grid-cols-layout gap-2 bg-slate-800">
			<Sidebar />
			<div className="h-full p-5 rounded bg-white">
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
