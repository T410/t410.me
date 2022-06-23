import { useEffect, useState } from "react";
import { Menu, ScreenSize } from "types";
import { Nav, Section } from "./Navbar.styles";
import { DarkModeToggle } from "elements";
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
				<Section>
					<DarkModeToggle />
				</Section>
			</Nav>
		</>
	);
};

export default Navbar;
