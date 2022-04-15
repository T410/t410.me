import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "types";
import { hamburger, close } from "assets";

function NavButton({
	menuType,
	name,
	menuState,
	onClick,
}: {
	menuType: Menu;
	name?: string;
	menuState: [Menu, Dispatch<SetStateAction<Menu>>];
	onClick?: () => void;
}) {
	const [menu, setMenu] = menuState;
	const handleClick = () => {
		setMenu(menuType);
		onClick?.();
	};

	return (
		<Link
			to={`/${menuType}`}
			onClick={handleClick}
			className={`header-link ${menu === menuType ? "header-link-selected" : ""}`}
		>
			{name || Menu[menuType]}
		</Link>
	);
}

function NavItems({ menuState, onClick }: { menuState: [Menu, Dispatch<SetStateAction<Menu>>]; onClick?: () => void }) {
	return (
		<>
			<NavButton menuType={Menu.Projects} menuState={menuState} onClick={onClick} />
			<NavButton menuType={Menu.Articles} menuState={menuState} onClick={onClick} />
			<NavButton menuType={Menu["About Me"]} menuState={menuState} onClick={onClick} />
		</>
	);
}

const Nav = () => {
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
			<header className="header">
				<div className="header-container">
					<div className="flex flex-col justify-center items-center md:hidden">
						<button className="flex items-center border px-2 py-1 rounded border-navy-100" onClick={toggleMenu}>
							<img src={hamburger} alt="menu" className="w-4 h-4" />
						</button>
					</div>
					<div className="hidden md:block">
						<div className="flex flex-row space-x-4">
							<NavItems menuState={menuState} />
						</div>
					</div>
					<Link to={`/about-me`} className="absolute right-4 block top-auto mx-1 hover:cursor-pointer">
						<img
							src="https://avatars.githubusercontent.com/u/8334449?v=4"
							alt="profile"
							className={`rounded-full h-8 outline-4 outline outline-offset-0 hover:outline-indigo-900 ${
								menuState[0] === Menu["About Me"] ? "outline-indigo-900" : "outline-none"
							}`}
						/>
					</Link>
				</div>
			</header>
			<div className={`hamburger ${isMenuOpen ? "" : "hidden"} md:hidden`}>
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
			</div>
		</>
	);
};

export default Nav;
