import React, { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface AnchorProps {
	href?: string;
	children?: ReactNode;
}

const A: FC<AnchorProps> = ({ children, href }) => {
	return (
		<a href={href} className="no-underline hover:underline hover:cursor-pointer">
			{children}
		</a>
	);
};

const FancyA = React.forwardRef<HTMLAnchorElement, AnchorProps>(function FancyA({ children, href }, ref) {
	return (
		<a
			className="border-b-2 border-b-accent break-normal font-semibold dark:text-dark-anchor text-light-anchor hover:bg-accent hover:dark:text-dark-background hover:text-light-background"
			ref={ref}
			href={href}
		>
			{children}
		</a>
	);
});

export { A, FancyA };
