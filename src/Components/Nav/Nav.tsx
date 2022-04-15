import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import MenuProvider, { MenuContext } from "../../contexts";
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
					<Link to="/projects">
						<NavButton menuType={Menu.Projects} />
					</Link>
					<Link to="/articles">
						<NavButton menuType={Menu.Articles} />
					</Link>
					<Link to="/about-me">
						<NavButton menuType={Menu.AboutMe} />
					</Link>
				</div>
				<div className={styles.logoContainer}>
					<Link to="/about-me">
						<NavButton menuType={Menu.AboutMe} name="Tayyib Cankat" />
					</Link>
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
