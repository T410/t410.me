import Link, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

type LinkFC = React.FC<
	NextLinkProps &
		React.AnchorHTMLAttributes<HTMLAnchorElement> & {
			children?: React.ReactNode;
			className?: string;
		}
>;

const A: LinkFC = ({ children, href, target }) => {
	return (
		<Link href={href} className="no-underline hover:underline hover:cursor-pointer" target={target}>
			{children}
		</Link>
	);
};

const FancyA: LinkFC = ({ children, href, className, target }) => {
	return (
		<Link
			href={href}
			target={target}
			className={`${
				className || ""
			} border-b-2 border-b-accent break-normal font-semibold dark:text-dark-anchor text-light-anchor hover:bg-accent hover:dark:text-dark-background hover:text-light-background`}
		>
			{children}
		</Link>
	);
};

const Button: LinkFC = ({ children, href, target }) => {
	return (
		<Link
			href={href}
			target={target}
			className="dark:bg-dark-background bg-light-background border dark:border-dark-lightBorderColor border-light-lightBorderColor rounded-lg text-base py-0.4rem px-0.6rem font-semibold dark:text-dark-brightFont text-light-brightFont hover:!text-accent hover:border-accent"
		>
			{children}
		</Link>
	);
};

export { A, FancyA, Button };
