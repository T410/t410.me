import styled from "styled-components";
import { A } from "./A";

const Button = styled(A)`
	background-color: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.lightBorderColor};
	border-radius: ${({ theme }) => theme.borderRadius};
	font-size: 1rem;
	font-weight: 600;
	line-height: normal;
	padding: 0.4rem 0.6rem;
	color: ${({ theme }) => theme.colors.brightFontColor};

	&:hover {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.accentColor};
		border-color: ${({ theme }) => theme.colors.accentColor};
	}
`;

export default Button;