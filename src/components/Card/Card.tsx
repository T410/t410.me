import { ReactChild } from "react";
import styles from "./Card.module.css";

const Card = ({ children, className, ...props }: { children?: ReactChild; className?: string }) => {
	return (
		<div className={`${styles.card} ${className}`} {...props}>
			{children}
		</div>
	);
};

export default Card;
