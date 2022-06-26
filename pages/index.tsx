import Image from "next/image";
import Link from "next/link";

import { FC, useContext } from "react";
import { A, FancyA, Icon, SubTitle, Title } from "elements";
import { Head } from "components";
import { DarkModeContext } from "contexts/DarkModeContext";

import { pp, devto, devto_black, github, github_black, linkedin, linkedin_black } from "assets";
import { title } from "meta";

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

const Home: FC = () => {
	return (
		<div className="flex md:flex-row-reverse flex-col text-left">
			<Head
				title={`Personal site of ${title}`}
				description="You can check out some of my projects and technical articles"
			/>

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
				<Title>Hi, I&apos;m Tayyib</Title>
				<SubTitle className="max-w-lg">
					I&apos;m a software engineer in Turkey. I love learning and building{" "}
					<Link href="/projects" passHref>
						<FancyA>projects</FancyA>
					</Link>{" "}
					and try to find time for{" "}
					<Link href="/articles" passHref>
						<FancyA>writing</FancyA>
					</Link>{" "}
					about what I learn. Well, this website is one of my projects to try and show the things I learn.
				</SubTitle>
				<Socials />
			</div>
		</div>
	);
};

export default Home;
