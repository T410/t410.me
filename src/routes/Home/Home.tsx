import { devto, github, linkedin } from "assets";
import { Wrapper, Details, Image, LinkImage, Title, LinkWrapper } from "components/Me";
const Home = () => {
	return (
		<Wrapper>
			<Details>
				<Title>Hey I'm Tayyib.</Title>
				<p>
					I'm a software engineer in Turkey. I love learning and building <a href="/projects">projects</a> and try to
					find time for <a href="/articles">writing</a> about what I learn. Well, this website is one of my projects to
					try and show the things I learn.
				</p>
				<LinkWrapper>
					<LinkImage href="https://github.com/T410">
						<Image src={github} alt="github link" />
					</LinkImage>
					<LinkImage href="https://dev.to/T410">
						<Image src={devto} alt="devto link" />
					</LinkImage>
					<LinkImage href="https://linkedin.com/in/MT410">
						<Image src={linkedin} alt="Linkedin link" />
					</LinkImage>
				</LinkWrapper>
			</Details>
			<Image src="https://avatars.githubusercontent.com/u/8334449?v=4" alt="Tayyib" />
		</Wrapper>
	);
};

export default Home;
