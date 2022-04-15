import { Outlet } from "react-router-dom";

import styles from "./Main.module.css";
import { Sidebar } from "components";

const Main = () => {
	return (
		<div className={styles.outerContainer}>
			<Sidebar />
			<div className={styles.contentContainer}>
				<div className={styles.innerContentContainer}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Main;
