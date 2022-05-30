import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, ScreenSize } from "types";
import { Nav, Section } from "./Navbar.styles";
import { DarkModeToggle } from "elements";
import { NavbarLink } from "elements";
import { Screen } from "components/Media";

function NavItems({ menuState, onClick }: { menuState: [Menu, Dispatch<SetStateAction<Menu>>]; onClick?: () => void }) {
	return (
		<>
			<NavbarLink to={"/projects"}>Projects</NavbarLink>
			<NavbarLink to={"/articles"}>Articles</NavbarLink>
			<NavbarLink to={"/about-me"}>Me</NavbarLink>
		</>
	);
}

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuState = useState<Menu>(Menu.Undefined);
	const location = useLocation();

	useEffect(() => {
		const m = location.pathname.split("/")[1] as unknown;
		if ((m as string) === "") {
			menuState[1](Menu["About Me"]);
		} else {
			menuState[1](m as Menu);
		}
	}, [location.pathname, menuState]);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<>
			<Nav>
				<Screen showOn={ScreenSize.S}>
					<Section>
						<NavbarLink to={"/"}>Tayyib Cankat</NavbarLink>
					</Section>
				</Screen>
				<Section>
					<NavItems menuState={menuState} />
				</Section>
				<Section>
					<DarkModeToggle />
				</Section>
			</Nav>
		</>
	);
};

export default Navbar;
