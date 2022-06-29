import Link, { LinkProps as NextLinkProps } from "next/link";
import React, { FC, forwardRef, ReactNode } from "react";

type LinkProps = NextLinkProps & {
	className?: string;
	children: ReactNode;
};

const A = forwardRef<HTMLAnchorElement, LinkProps>(function Inner({ children, href }, ref) {
	return (
		<Link href={href} ref={ref}>
			<a className="no-underline hover:underline hover:cursor-pointer">{children}</a>
		</Link>
	);
});

const FancyA = forwardRef<HTMLAnchorElement, LinkProps>(function Inner({ children, href, className }, ref) {
	return (
		<Link href={href} ref={ref}>
			<a
				className={`${
					className || ""
				} border-b-2 border-b-accent break-normal font-semibold dark:text-dark-anchor text-light-anchor hover:bg-accent hover:dark:text-dark-background hover:text-light-background`}
			>
				{children}
			</a>
		</Link>
	);
});

export { A, FancyA };
