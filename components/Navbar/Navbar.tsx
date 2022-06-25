import { FC, ReactNode, useEffect, useState } from "react";
import { Menu, ScreenSize } from "types";
import { A } from "elements";
import { Screen } from "components/Media";

function NavItems() {
	return (
		<>
			<A href={"/projects"}>Projects</A>
			<A href={"/articles"}>Articles</A>
			<A href={"/me"}>Me</A>
		</>
	);
}

const Section: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className="flex items-center space-x-4"></div>;
};

const Nav: FC<{ children: ReactNode }> = ({ children }) => (
	<header className="fixed w-full h-14 z-10 top-0 border-b border-b-accent dark:bg-dark-navbar bg-light-navbar">
		<div className="flex justify-between items-center h-full max-w-screen-xl m-auto py-2 px-6 sm:p-2">{children}</div>
	</header>
);

const Navbar = () => {
	const menuState = useState<Menu>(Menu.Undefined);
	const location = { pathname: "/" };

	useEffect(() => {
		const m = location.pathname.split("/")[1] as unknown;
		if ((m as string) === "") {
			menuState[1](Menu["Me"]);
		} else {
			menuState[1](m as Menu);
		}
	}, [location.pathname, menuState]);

	return (
		<>
			<Nav>
				<Screen showOn={ScreenSize.S}>
					<Section>
						<A href={"/"}>Tayyib Cankat</A>
					</Section>
				</Screen>
				<Section>
					<NavItems />
				</Section>
			</Nav>
		</>
	);
};

export default Navbar;
