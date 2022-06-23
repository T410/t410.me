import { ComponentProps, FC, ReactNode } from "react";

const CardOuter: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className="grid gap-2 text-center p-4 rounded border-2">{children}</div>;
	// background-color: ${({ theme }) => theme.colors.darkOpacity};
};

interface CardTitleProps {
	title?: string;
}

const CardTitle: FC<CardTitleProps> = ({ title }) => <h1>{title || "Title"}</h1>;

const CardSection: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className="mb-4 space-y-0 space-x-0">{children}</div>;
};

interface CardProps extends Required<CardTitleProps> {
	children?: ReactNode;
}

const Card: FC<CardProps> = ({ children, title }) => {
	return (
		<CardOuter>
			<CardSection>
				<CardTitle title={title} />
			</CardSection>
			{children}
		</CardOuter>
	);
};

export { Card, CardOuter, CardTitle, CardSection };
