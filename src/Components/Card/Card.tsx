import { ReactChild } from "react";
import styles from "./Card.module.css";

const Card = ({ children, ...props }: { children?: ReactChild }) => {
	return (
		<div className={styles.card} {...props}>
			{children}
		</div>
	);
};

export default Card;
