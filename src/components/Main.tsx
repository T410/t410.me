import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<div className="flex-auto">
			<div className="flex flex-col p-4 md:px-12 lg:px-24 xl:px-36 w-full min-h-full h-fit">
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
