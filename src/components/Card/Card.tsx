import { ReactChild } from "react";

const Card = ({ children, className, ...props }: { children?: ReactChild; className?: string }) => {
	return (
		<div className="bg-slate-200" {...props}>
			{children}
		</div>
	);
};

export default Card;
