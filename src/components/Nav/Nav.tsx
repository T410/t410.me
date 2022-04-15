import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "types";
import { hamburger } from "assets";

const NavButton: FC<{ menuType: Menu; name?: string; menuState: [Menu, Dispatch<SetStateAction<Menu>>] }> = ({
	menuType,
	name,
	menuState,
}) => {
	const [menu, setMenu] = menuState;
	const handleClick = () => {
		setMenu(menuType);
	};

	return (
		<Link to={`/${menuType}`}>
			<div
				onClick={handleClick}
				className={`underline underline-offset-2 decoration-4 decoration-orange-600 hover:decoration-solid ${
					menu === menuType ? "decoration-solid" : "decoration-dotted"
				}`}
			>
				<h3>{name || Menu[menuType]}</h3>
			</div>
		</Link>
	);
};

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

	function collapseButtonHandler() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<div className="w-full p-4 flex flex-col justify-between flex-wrap items-start space-y-4 bg-slate-900 text-white md:flex-row md:space-y-0">
			<div className="flex flex-col justify-center items-center md:hidden">
				<button className="flex items-center border px-2 py-1 rounded" onClick={collapseButtonHandler}>
					<img
						src={hamburger}
						alt="menu"
						className="w-4 h-4 text-teal-200 border-teal-400 hover:text-white hover:border-white"
					/>
				</button>
			</div>
			<div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
				<div className="flex flex-row space-x-4">
					<NavButton menuType={Menu.Projects} menuState={menuState} />
					<NavButton menuType={Menu.Articles} menuState={menuState} />
					<NavButton menuType={Menu["About Me"]} menuState={menuState} />
				</div>
			</div>
			<div className="absolute right-4 top-0 md:block md:top-auto">
				<NavButton menuType={Menu["About Me"]} name="Tayyib Cankat" menuState={menuState} />
			</div>
		</div>
	);
};

export default Nav;
