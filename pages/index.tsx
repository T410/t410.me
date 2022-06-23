import { FC, useContext } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { devto, devto_black, github, github_black, linkedin, linkedin_black } from "assets";

import { Loading } from "components";
// import { Wrapper, Details, Image, LinkImage, Title, LinkWrapper, Bio } from "components/Me";
import { DarkModeContext } from "contexts/DarkModeContext";
import { HeadingContext } from "contexts/HeadingContext";
import { A, Title } from "elements";
import { APIContext } from "contexts/APIContext";
import { fetchFrom, Query, queryBuilder } from "utils/API";
import { Heading } from "types";

const Socials = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div>
			<A href="https://github.com/T410">
				<img src={darkMode ? github : github_black} alt="github link" />
			</A>
			<A href="https://dev.to/T410">
				<img src={darkMode ? devto : devto_black} alt="devto link" />
			</A>
			<A href="https://linkedin.com/in/MT410">
				<img src={darkMode ? linkedin : linkedin_black} alt="Linkedin link" />
			</A>
		</div>
	);
};

const Home: FC<{ asd: string }> = ({ asd }) => {
	return (
		<div className="h-full">
			<div>
				<Title>Hey, I'm Tayyib.</Title>
				<div>
					I'm a software engineer in Turkey. I love learning and building <A href="/projects">projects</A> and try to
					find time for <A href="/articles">writing</A> about what I learn. Well, this website is one of my projects to
					try and show the things I learn.
				</div>
				<Socials />
			</div>
			<img src="https://avatars.githubusercontent.com/u/8334449?v=4" alt="Tayyib" />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const headingType: Query = {
		method: "heading",
		parameters: [
			{
				name: "route",
			},
			{
				name: "title",
			},
			{
				name: "detail",
			},
		],
	};

	// await fetchFrom<Heading>("https://api.t410.me/.netlify/functions/graphql", {
	// 	method: "POST",
	// 	body: JSON.stringify({ query: queryBuilder({ ...headingType, arguments: [{ route: "/" }] }).query }),
	// 	methodName: "heading",
	// }).request;

	return {
		props: { asd: "asd" },
	};
};

export default Home;
