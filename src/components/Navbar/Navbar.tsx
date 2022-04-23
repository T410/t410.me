import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "types";
import { Nav, Section } from "./Navbar.styles";
import { DarkModeToggle } from "elements";
import { NavbarLink } from "elements";

function NavItems({ menuState, onClick }: { menuState: [Menu, Dispatch<SetStateAction<Menu>>]; onClick?: () => void }) {
	return (
		<>
			<NavbarLink to={"/projects"}>Projects</NavbarLink>
			<NavbarLink to={"/articles"}>Articles</NavbarLink>
			<NavbarLink to={"/about-me"}>About Me</NavbarLink>
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
				{/* <div className="flex flex-col justify-center items-center md:hidden">
					<button className="flex items-center border px-2 py-1 rounded border-navy-100" onClick={toggleMenu}>
						<img src={hamburger} alt="menu" className="w-4 h-4" />
					</button>
				</div> */}
				{/* <div className="hidden md:block">
					<div className="flex flex-row space-x-4"> */}
				<Section>
					<NavbarLink to={"/"}>Tayyib Cankat</NavbarLink>
				</Section>
				<Section>
					<NavItems menuState={menuState} />
				</Section>
				<Section>
					<DarkModeToggle />
				</Section>
				{/* </div>
				</div> */}
			</Nav>

			{/* <div className={`hamburger ${isMenuOpen ? "" : "hidden"} md:hidden`}>
				<div className="hamburger-content">
					<header className="flex justify-between items-center pl-4 pr-2">
						<h2>Tayyib Cankat</h2>
						<button onClick={toggleMenu}>
							<img src={close} alt="close hamburger menu" className="text-white" />
						</button>
					</header>
					<div className="p-2 flex flex-col">
						<NavItems menuState={menuState} onClick={toggleMenu} />
					</div>
				</div>
				<div className="hamburger-overlay" onClick={toggleMenu}></div>
			</div> */}
		</>
	);
};

export default Navbar;
