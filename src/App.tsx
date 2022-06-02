import { useContext, useEffect } from "react";
import { Articles, Article, Projects, Home } from "routes";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import { colors, theme } from "theme";
import GlobalStyle from "./globalStyles";
import styled, { ThemeProvider } from "styled-components";

import { Navbar } from "components";
import { SubHeading, Title } from "elements";

import { APIContext } from "contexts/APIContext";
import { LocationContext } from "contexts/TitleContext";
import { HeadingContext } from "contexts/HeadingContext";
import { DarkModeContext } from "contexts/DarkModeContext";
import { MetaTagContext } from "contexts/MetaTagContext";

const Main = styled.main`
	margin-top: 60px;
`;

const ArticleView = styled.article`
	padding: 0 2rem;
	max-width: ${({ theme }) => theme.pageWidth};
	margin-left: auto;
	margin-right: auto;

	@media (max-width: ${({ theme }) => theme.breakpoints.S + "px"}) {
		margin: 0;
		padding: 2rem 1rem;
	}
`;

const TitleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

function WithMain() {
	const { getHeading } = useContext(APIContext);
	const { heading, setHeading, isLoading, setIsLoading: setIsHeadingLoading } = useContext(HeadingContext);
	const { pathname } = useContext(LocationContext);
	const { setMetaDescription } = useContext(MetaTagContext);

	useEffect(() => {
		if (pathname) {
			const { abort, request } = getHeading(pathname === "/" ? "/me" : pathname);
			request
				.then((heading) => {
					setHeading(heading);
					setIsHeadingLoading(false);
					setMetaDescription(heading.detail);
				})
				.catch((e) => {
					// console.log(e);
				});

			return () => {
				setHeading(undefined);
				setIsHeadingLoading(true);
				abort();
			};
		}
	}, [pathname, getHeading, setHeading, setIsHeadingLoading, setMetaDescription]);

	return (
		<Main>
			<ArticleView>
				<TitleDiv>
					{!isLoading && (
						<>
							<Title fontSize={"2.3rem"}>{heading?.title}</Title>
							<SubHeading>{heading?.detail}</SubHeading>
						</>
					)}
				</TitleDiv>
				<Outlet />
			</ArticleView>
		</Main>
	);
}

function App() {
	const { setPath } = useContext(LocationContext);
	const location = useLocation();
	const { darkMode } = useContext(DarkModeContext);

	useEffect(() => {
		setPath(location.pathname);
	}, [location.pathname, setPath]);

	return (
		<ThemeProvider theme={{ ...theme, colors: darkMode ? colors.dark : colors.light }}>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path="/" element={<WithMain />}>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/me" element={<Home />} />
					<Route path="/articles" element={<Articles />} />
				</Route>
				<Route element={<WithMain />}>
					<Route path="/articles/:id/:slug" element={<Article />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
