import styles from "./Main.module.css";
import { Me, Sidebar } from "../";

const Main = () => {
	return (
		<div className={styles.outerContainer}>
			<Sidebar />
			<div className={styles.contentContainer}>
				<div className={styles.innerContentContainer}>
					<Me />
				</div>
			</div>
		</div>
	);
};

export default Main;
