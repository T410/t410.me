import { FC, ReactNode } from "react";

const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
	return (
		<div
			className={`${className} grid gap-2 text-center p-4 rounded border dark:border-dark-darkBorderColor border-light-darkBorderColor dark:bg-dark-darkOpacity bg-light-darkOpacity`}
		>
			{children}
		</div>
	);
};

export { Card };
