import { FC, ReactNode } from "react";

const Section: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className="flex items-center space-x-4"></div>;
};

const Nav: FC<{ children: ReactNode }> = ({ children }) => (
	<header className="fixed w-full h-14 top-0 bg-slate-800 border-b-2 border-b-orange-400">
		<div className="flex justify-between items-center h-full max-w-screen-xl m-auto py-2 px-6 sm:p-2">{children}</div>
	</header>
);

export { Nav, Section };
