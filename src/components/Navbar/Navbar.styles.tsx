import { FC } from "react";
import styled from "styled-components";

const Outer = styled.header`
	width: 100%;
	height: 56px;
	position: fixed;
	top: 0;
	background-color: ${({ theme }) => theme.colors.navbar};
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorderColor};
`;

const Middle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	height: 100%;
	max-width: ${({ theme }) => theme.pageWidth};
	padding: 0.5rem 1.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.S + "px"}) {
		padding: 0.5rem;
	}
`;

const Section = styled.div`
	display: flex;
	align-items: center;

	& > :nth-child(n + 2) {
		margin-left: 1rem;
	}
`;

const Nav: FC = ({ children }) => (
	<Outer>
		<Middle>{children}</Middle>
	</Outer>
);

export { Nav, Section };
