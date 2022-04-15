import styles from "./Me.module.css";
import { Card } from "components";
import { devto, github, linkedin } from "assets";
const Me = () => {
	return (
		<Card>
			<div className={styles.outerContainer}>
				<div className={styles.image}>
					<img src="https://avatars.githubusercontent.com/u/8334449?v=4" alt="profile" />
				</div>
				<div className={styles.info}>
					<h1>Tayyib Cankat</h1>
					<div>
						<p>I'm a software engineer working in Turkey, mostly focusing on Frontend Development.</p>
						<p>This is my personal showcase/blog site.</p>
					</div>
					<div className={styles.links}>
						<a className={styles.link} href="https://dev.to/t410" target="_blank" rel="noreferrer">
							<img src={devto} alt="dev.to profile link of Tayyib Cankat"></img>
						</a>
						<a className={styles.link} href="https://linkedin.com/in/mt410/" target="_blank" rel="noreferrer">
							<img src={linkedin} alt="linkedin profile of Tayyib Cankat"></img>
						</a>
						<a className={styles.link} href="https://github.com/T410" target="_blank" rel="noreferrer">
							<img src={github} alt="github profile of Tayyib Cankat"></img>
						</a>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Me;
