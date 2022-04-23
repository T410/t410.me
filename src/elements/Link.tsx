import { FC } from "react";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)<{ active?: boolean }>`
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	gap: 0.4rem;
	border-radius: 8px;
	padding: 0.5rem;
	color: ${({ theme }) => theme.colors.fontColor};

	background-color: ${({ active, theme }) => (active ? theme.colors.navbarHover : theme.colors.navbar)};

	&:hover {
		background-color: ${({ theme }) => theme.colors.navbarHover};
		color: white;
	}
`;

const NavbarLink: FC<NavLinkProps> = ({ children, ...props }) => {
	return (
		<NavLink {...props}>
			{({ isActive }) =>
				isActive ? (
					<StyledLink as="div" active={true}>
						{children}
					</StyledLink>
				) : (
					<StyledLink as="div">{children}</StyledLink>
				)
			}
		</NavLink>
	);
};

export { StyledLink, NavbarLink };
