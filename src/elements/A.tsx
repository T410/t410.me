import styled from "styled-components";
import { FC } from "react";
import { Link, NavLink, NavLinkProps } from "react-router-dom";

const A = styled.a`
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

const FancyA = styled.a`
	text-decoration: none;
	color: white;
	font-weight: 600;

	border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};

	&:hover {
		background-color: ${({ theme }) => theme.colors.accentColor};
		color: ${({ theme }) => theme.colors.background};
	}
`;

const FancyLink = styled(Link)`
	text-decoration: none;
	color: white;
	font-weight: 600;

	border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};

	&:hover {
		background-color: ${({ theme }) => theme.colors.accentColor};
		color: ${({ theme }) => theme.colors.background};
	}
`;

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

export { A, FancyA, StyledLink, NavbarLink, FancyLink };
