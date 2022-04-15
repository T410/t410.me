import styles from "./Sidebar.module.css";
import { Card } from "..";
const Item = () => {
	return <div className={styles.item}>Item</div>;
};

const Sidebar = () => {
	return (
		<div className={styles.outerContainer}>
			<Card>
				<Item />
			</Card>
		</div>
	);
};

export default Sidebar;
