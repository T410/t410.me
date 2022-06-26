import React, { FC, ReactNode } from "react";

interface AnchorProps {
	href?: string;
	children?: ReactNode;
	className?: string;
}

const A: FC<AnchorProps> = ({ children, href }) => {
	return (
		<a href={href} className="no-underline hover:underline hover:cursor-pointer">
			{children}
		</a>
	);
};

const FancyA = React.forwardRef<HTMLAnchorElement, AnchorProps>(function FancyA({ children, href, className }, ref) {
	return (
		<a
			className={`${className} border-b-2 border-b-accent break-normal font-semibold dark:text-dark-anchor text-light-anchor hover:bg-accent hover:dark:text-dark-background hover:text-light-background`}
			ref={ref}
			href={href}
		>
			{children}
		</a>
	);
});

export { A, FancyA };
