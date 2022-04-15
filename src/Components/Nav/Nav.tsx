import { Dispatch, FC, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { Menu } from "../../types";

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
		<div className={styles.navButton} onClick={handleClick}>
			<h3 className={`${styles.notSelected} ${menu === menuType ? styles.selected : ""}`}>{name || Menu[menuType]}</h3>
		</div>
	);
};

const Nav = () => {
	const menuState = useState<Menu>(Menu.AboutMe);
	return (
		<div className={styles.outerContainer}>
			<div className={styles.middleContainer}>
				<div className={styles.navSection}>
					<Link to="/projects">
						<NavButton menuType={Menu.Projects} menuState={menuState} />
					</Link>
					<Link to="/articles">
						<NavButton menuType={Menu.Articles} menuState={menuState} />
					</Link>
					<Link to="/about-me">
						<NavButton menuType={Menu.AboutMe} menuState={menuState} />
					</Link>
				</div>
				<div className={styles.logoContainer}>
					<Link to="/about-me">
						<NavButton menuType={Menu.AboutMe} name="Tayyib Cankat" menuState={menuState} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
