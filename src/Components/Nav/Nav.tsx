import { FC, useContext } from "react";
import styles from "./Nav.module.css";
import MenuProvider, { MenuContext } from "../../Contexts";
import { Menu } from "../../types";

const NavButton: FC<{ menuType: Menu; name?: string }> = ({ menuType, name }) => {
	const { menu, setMenu } = useContext(MenuContext);
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
	return (
		<div className={styles.outerContainer}>
			<div className={styles.middleContainer}>
				<div className={styles.navSection}>
					<NavButton menuType={Menu.Projects} />
					<NavButton menuType={Menu.Articles} />
					<NavButton menuType={Menu.AboutMe} />
				</div>
				<div className={styles.logoContainer}>
					<NavButton menuType={Menu.AboutMe} name="Tayyib Cankat" />
				</div>
			</div>
		</div>
	);
};

const NavWithContext = () => {
	return (
		<MenuProvider>
			<Nav />
		</MenuProvider>
	);
};

export default NavWithContext;
