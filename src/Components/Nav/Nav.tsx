import style from "./Nav.module.css";

const Nav = () => {
	return (
		<div className={style.outerContainer}>
			<div className={style.middleContainer}>
				<div className={style.navSection}>
					<div className={style.navButton}>
						<h2>Tayyib Cankat</h2>
					</div>
				</div>
				<div className={style.navSection}>
					<div className={style.navButton}>
						<h2>Projects</h2>
					</div>
					<div className={style.navButton}>
						<h2>About Me</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
