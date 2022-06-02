import { devto, devto_black, github, github_black, linkedin, linkedin_black } from "assets";
import { Loading } from "components";
import { Wrapper, Details, Image, LinkImage, Title, LinkWrapper, Bio } from "components/Me";
import { DarkModeContext } from "contexts/DarkModeContext";
import { HeadingContext } from "contexts/HeadingContext";
import { FancyLink } from "elements";
import { useContext } from "react";
const Socials = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<LinkWrapper>
			<LinkImage href="https://github.com/T410">
				<Image src={darkMode ? github : github_black} alt="github link" />
			</LinkImage>
			<LinkImage href="https://dev.to/T410">
				<Image src={darkMode ? devto : devto_black} alt="devto link" />
			</LinkImage>
			<LinkImage href="https://linkedin.com/in/MT410">
				<Image src={darkMode ? linkedin : linkedin_black} alt="Linkedin link" />
			</LinkImage>
		</LinkWrapper>
	);
};

const Home = () => {
	const { isLoading: isHeadingLoading } = useContext(HeadingContext);
	return (
		<>
			{!isHeadingLoading ? (
				<Wrapper>
					<Details>
						<Title>Hey, I'm Tayyib.</Title>
						<Bio>
							I'm a software engineer in Turkey. I love learning and building{" "}
							<FancyLink to="/projects">projects</FancyLink> and try to find time for{" "}
							<FancyLink to="/articles">writing</FancyLink> about what I learn. Well, this website is one of my projects
							to try and show the things I learn.
						</Bio>
						<Socials />
					</Details>
					<Image src="https://avatars.githubusercontent.com/u/8334449?v=4" alt="Tayyib" />
				</Wrapper>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Home;
