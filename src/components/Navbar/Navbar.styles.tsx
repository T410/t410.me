import { FC } from "react";
import styled from "styled-components";

const Outer = styled.header`
	width: 100%;
	height: 56px;
	position: fixed;
	top: 0;
	background-color: ${({ theme }) => theme.colors.navbar};
`;

const Middle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	height: 100%;
	padding: 0.5rem 1.5rem;
	max-width: ${({ theme }) => theme.pageWidth};
`;

const Section = styled.div`
	display: flex;
	align-items: center;
`;

const Nav: FC = ({ children }) => (
	<Outer>
		<Middle>{children}</Middle>
	</Outer>
);

export { Nav, Section };
