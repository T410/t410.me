import { FC, useContext } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";

import { pp, devto, devto_black, github, github_black, linkedin, linkedin_black } from "assets";

import { DarkModeContext } from "contexts/DarkModeContext";
import { A, FancyA, Icon, SubTitle, Title } from "elements";

import { withSSRContext } from "aws-amplify";
import { Heading } from "models";

const Socials = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className="space-x-2 mt-4">
			<A href="https://github.com/T410">
				<Icon src={darkMode ? github : github_black} alt="github link" />
			</A>
			<A href="https://dev.to/T410">
				<Icon src={darkMode ? devto : devto_black} alt="devto link" />
			</A>
			<A href="https://linkedin.com/in/MT410">
				<Icon src={darkMode ? linkedin : linkedin_black} alt="Linkedin link" />
			</A>
		</div>
	);
};

const Home: FC<{ heading: Heading }> = ({ heading }) => {
	return (
		<div className="flex md:flex-row-reverse flex-col">
			<div className="w-32 h-32 mb-4 md:mb-0 md:ml-8 md:w-64 md:h-64">
				<Image
					src={pp}
					alt="Portrait picture of me, Tayyib Cankat"
					layout="responsive"
					priority
					className="rounded-lg"
				/>
			</div>
			<div>
				<Title>{heading.title}</Title>
				<SubTitle classNames="max-w-lg">
					I'm a software engineer in Turkey. I love learning and building <FancyA href="/projects">projects</FancyA> and
					try to find time for <FancyA href="/articles">writing</FancyA> about what I learn. Well, this website is one
					of my projects to try and show the things I learn.
				</SubTitle>
				<Socials />
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { DataStore } = withSSRContext({ req });
	//@ts-ignore
	const heading = await DataStore.query(Heading, (c) => c.route("eq", "/"));
	console.log(heading);

	return {
		props: {
			heading: JSON.parse(JSON.stringify(heading[0])),
		},
	};
};

export default Home;
