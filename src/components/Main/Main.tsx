import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<div className="h-full min-h-fit flex bg-navy-800">
			<div className="flex flex-col md:px-12 lg:px-24 xl:px-36 w-full min-h-full h-fit p-5 rounded bg-navy-800">
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
