import { Nav, Main } from "./Components";
import styles from "./App.module.css";
function App() {
	return (
		<div className={styles.app}>
			<Nav />
			<Main />
		</div>
	);
}

export default App;
