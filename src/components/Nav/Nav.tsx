import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import { Menu } from "types";

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
			<div className={styles.navButton} onClick={handleClick}>
				<h3 className={`${styles.notSelected} ${menu === menuType ? styles.selected : ""}`}>
					{name || Menu[menuType]}
				</h3>
			</div>
		</Link>
	);
};

const Nav = () => {
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

	return (
		<div className={styles.outerContainer}>
			<div className={styles.middleContainer}>
				<div className={styles.navSection}>
					<NavButton menuType={Menu.Projects} menuState={menuState} />
					<NavButton menuType={Menu.Articles} menuState={menuState} />
					<NavButton menuType={Menu["About Me"]} menuState={menuState} />
				</div>
				<div className={styles.logoContainer}>
					<NavButton menuType={Menu["About Me"]} name="Tayyib Cankat" menuState={menuState} />
				</div>
			</div>
		</div>
	);
};

export default Nav;
