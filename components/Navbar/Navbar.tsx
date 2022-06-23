import { useEffect, useState } from "react";
import { Menu, ScreenSize } from "types";
import { Nav, Section } from "./Navbar.styles";
import { DarkModeToggle } from "elements";
import { NavbarLink } from "elements";
import { Screen } from "components/Media";

function NavItems() {
	return (
		<>
			<NavbarLink href={"/projects"}>Projects</NavbarLink>
			<NavbarLink href={"/articles"}>Articles</NavbarLink>
			<NavbarLink href={"/me"}>Me</NavbarLink>
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
						<NavbarLink href={"/"}>Tayyib Cankat</NavbarLink>
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
