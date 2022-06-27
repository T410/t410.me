import { FC, ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { DarkModeToggle } from "elements";

interface CustomLinkProps {
	asPath: string;
	children: ReactNode;
}

const Link: FC<CustomLinkProps & LinkProps> = ({ children, href, asPath }) => {
	const isActive = asPath === href;
	const activeClass = isActive ? "dark:bg-dark-navbarHover bg-light-navbarHover" : "";

	return (
		<NextLink href={href}>
			<a
				className={`${activeClass} gap-2 rounded-lg p-1 sm:p-2 hover:dark:bg-dark-navbarHover hover:bg-light-navbarHover font-medium`}
			>
				{children}
			</a>
		</NextLink>
	);
};
const Section: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className="flex items-center space-x-2 sm:space-x-4">{children}</div>;
};

const Nav: FC<{ children: ReactNode }> = ({ children }) => (
	<header className="fixed w-full h-14 z-10 top-0 dark:bg-dark-navbar bg-light-navbar">
		<div className="flex justify-between items-center h-full max-w-screen-xl m-auto p-2 sm:px-6 ">{children}</div>
		<div className="gradient h-1"></div>
	</header>
);

const Navbar: FC = () => {
	const { asPath } = useRouter();

	return (
		<>
			<Nav>
				<Section>
					<Link href="/" asPath={asPath}>
						<p className="before:content-['Me'] sm:before:content-['Tayyib_Cankat']"></p>
					</Link>
				</Section>
				<Section>
					<Link href="/projects" asPath={asPath}>
						Projects
					</Link>
					<Link href="/articles" asPath={asPath}>
						Articles
					</Link>
					<DarkModeToggle />
					{/* <Link href="/me">Me</Link> */}
				</Section>
			</Nav>
		</>
	);
};

export default Navbar;
