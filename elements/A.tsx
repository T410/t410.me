import { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface AnchorProps {
	href: string;
	children?: ReactNode;
}

const A: FC<AnchorProps> = ({ children, href }) => {
	return (
		<a href={href} className="no-underline hover:underline hover:cursor-pointer">
			{children}
		</a>
	);
};

// const FancyA = styled.a`
// 	text-decoration: none;
// 	color: ${({ theme }) => theme.colors.elements.a.font};
// 	font-weight: 600;

// 	border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};
// 	word-break: break-all;

// 	&:hover {
// 		background-color: ${({ theme }) => theme.colors.accentColor};
// 		color: ${({ theme }) => theme.colors.background};
// 	}
// `;

// const FancyLink = styled(Link)`
// 	text-decoration: none;
// 	color: ${({ theme }) => theme.colors.elements.a.font};
// 	font-weight: 600;

// 	border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};

// 	&:hover {
// 		background-color: ${({ theme }) => theme.colors.accentColor};
// 		color: ${({ theme }) => theme.colors.background};
// 	}
// `;

// const StyledLink = styled(Link)<{ active?: boolean }>`
// 	text-decoration: none;
// 	transition: all 0.2s ease-in-out;
// 	gap: 0.4rem;
// 	border-radius: 8px;
// 	padding: 0.5rem;
// 	color: ${({ theme }) => theme.colors.elements.a.font};

// 	background-color: ${({ active, theme }) => (active ? theme.colors.navbarHover : theme.colors.navbar)};

// 	&:hover {
// 		background-color: ${({ theme }) => theme.colors.navbarHover};
// 		color: white;
// 	}
// `;

// interface NavLinkProps {
// 	children: ReactNode;
// 	isActive?: boolean;
// 	href: string;
// }

// const NavbarLink: FC<NavLinkProps> = ({ children, isActive, href }) => {
// 	return (
// 		<div>
// 			{isActive ? (
// 				<StyledLink active={true} href={href}>
// 					{children}
// 				</StyledLink>
// 			) : (
// 				<StyledLink href={href}>{children}</StyledLink>
// 			)}
// 		</div>
// 	);
// };

export { A };
