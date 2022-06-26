import { FC, HTMLAttributes, ReactNode } from "react";

interface TitleProps {
	children: ReactNode;
	className?: HTMLAttributes<HTMLParagraphElement>["className"];
}

const Title: FC<TitleProps> = ({ children, className }) => {
	return <h1 className={`${className} text-5xl font-semibold mb-3`}>{children}</h1>;
};

const UnderlinedTitle: FC<TitleProps> = ({ children, className }) => {
	return <h1 className={`${className} text-4xl font-semibold mb-3 border-b-orange-500 border-b`}>{children}</h1>;
};

const SubTitle: FC<TitleProps> = ({ children, className }) => {
	return <p className={`${className} text-xl mb-8 dark:text-dark-font text-light-font leading-relaxed`}>{children}</p>;
};

export { Title, SubTitle, UnderlinedTitle };
