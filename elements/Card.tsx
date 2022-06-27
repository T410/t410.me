import { FC, ReactNode } from "react";

const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
	return (
		<div className={`${className} grid gap-2 text-center p-4 rounded-lg dark:bg-dark-navbar bg-light-navbar`}>
			{children}
		</div>
	);
};

export default Card;
