import { ReactChild } from "react";

const Card = ({ children, className, ...props }: { children?: ReactChild; className?: string }) => {
	return (
		<div className="bg-primary-200" {...props}>
			{children}
		</div>
	);
};

export default Card;
