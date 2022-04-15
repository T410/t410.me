import styles from "./Nav.module.css";

const Nav = () => {
	return (
		<div className={styles.outerContainer}>
			<div className={styles.middleContainer}>
				<div className={styles.navSection}>
					<div className={styles.navButton}>
						<h2>Projects</h2>
					</div>
					<div className={styles.navButton}>
						<h2>Articles</h2>
					</div>
					<div className={styles.navButton}>
						<h2>About Me</h2>
					</div>
				</div>
				<div className={styles.logoContainer}>
					<div className={styles.navButton}>
						<h2>Tayyib Cankat</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
