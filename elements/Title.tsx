import { FC, HTMLAttributes, ReactNode } from "react";

interface TitleProps {
	children: ReactNode;
	classNames?: HTMLAttributes<HTMLParagraphElement>["className"];
}

const Title: FC<TitleProps> = ({ children }) => {
	return <h1 className="text-5xl font-semibold mb-3">{children}</h1>;
};

const UnderlinedTitle: FC<TitleProps> = ({ children }) => {
	return <h1 className="text-4xl font-semibold mb-3 border-b-orange-500 border-b-2">{children}</h1>;
};

const SubTitle: FC<TitleProps> = ({ children, classNames }) => {
	return <p className={`text-xl mb-8 dark:text-dark-font text-light-font leading-relaxed ${classNames}`}>{children}</p>;
};

export { Title, SubTitle, UnderlinedTitle };
