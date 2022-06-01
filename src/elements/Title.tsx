import styled, { CSSProperties } from "styled-components";

interface TitleProps {
	fontSize?: CSSProperties["fontSize"];
	fontWeight?: CSSProperties["fontWeight"];
}

const Title = styled.h1<TitleProps>`
	color: ${({ theme }) => theme.colors.elements.h};
	font-size: ${({ fontSize }) => fontSize || "1.5rem"};
	font-weight: ${({ fontWeight }) => fontWeight || "600"};
	margin: 0 0 0.75rem 0;
`;

const UnderlinedTitle = styled(Title)`
	border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor};
`;

export { Title, UnderlinedTitle };
