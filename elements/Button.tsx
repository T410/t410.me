// import styled from "styled-components";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, href }) => {
	return (
		<a
			href={href}
			className="dark:bg-dark-background bg-light-background border dark:border-dark-lightBorderColor border-light-lightBorderColor rounded-lg text-base py-0.4rem px-0.6rem font-semibold dark:text-dark-brightFont text-light-brightFont hover:!text-accent hover:border-accent"
		>
			{children}
		</a>
	);
};

export default Button;
