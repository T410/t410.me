import { Outlet } from "react-router-dom";
import { Sidebar } from "components";

const Main = () => {
	return (
		<div className="h-full flex sm:grid sm:grid-cols-layout gap-2 bg-navy-800">
			<Sidebar />
			<div className="md:px-12 lg:px-24 xl:px-36 w-full min-h-full h-fit p-5 rounded bg-navy-800">
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
