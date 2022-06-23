import { FC, ReactNode } from "react";

interface TitleProps {
	children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
	return <h1 className="text-4xl font-semibold mb-3">{children}</h1>;
};

const UnderlinedTitle: FC<TitleProps> = ({ children }) => {
	return <h1 className="text-4xl font-semibold mb-3 border-b-orange-500 border-b-2">{children}</h1>;
};

export { Title, UnderlinedTitle };
