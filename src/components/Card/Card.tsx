import { FC } from "react";
import styled from "styled-components";

const CardOuter = styled.div`
	background-color: ${({ theme }) => theme.colors.darkOpacity};
	padding: 1rem;
	border-radius: ${({ theme }) => theme.borderRadius};
	border: 1px solid ${({ theme }) => theme.colors.darkBorderColor};
	display: grid;
	grid-gap: 10px;
	text-align: center;
`;

const StyledCardTitle = styled.h1`
	color: ${({ theme }) => theme.colors.accentColor};
	margin-top: 0;
`;

interface CardTitleProps {
	title?: string;
}

const CardTitle: FC<CardTitleProps> = ({ title }) => <StyledCardTitle>{title || "Title"}</StyledCardTitle>;

const StyleCardSection = styled.div`
	margin-bottom: 1rem;
	& > * {
		margin: 0;
	}
`;

const CardSection: FC = ({ children }) => {
	return <StyleCardSection>{children}</StyleCardSection>;
};

interface CardProps extends Required<CardTitleProps> {}

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
