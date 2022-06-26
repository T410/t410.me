import { SubTitle, Title } from "elements";
import { GetStaticProps } from "next";
import { promises as fs } from "fs";
import path from "path";
import { Project } from "types";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import Link from "next/link";
import { Card, CardViewer } from "components";

const Button: FC<{ children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, href }) => {
	return (
		<a
			href={href}
			className="dark:bg-dark-background bg-light-background border dark:border-dark-lightBorderColor border-light-lightBorderColor rounded-lg text-base py-0.4rem px-0.6rem font-semibold dark:text-dark-brightFont text-light-brightFont hover:!text-accent hover:border-accent"
		>
			{children}
		</a>
	);
};

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
	return (
		<div>
			<header className="text-center">
				<Title>Projects</Title>
				<SubTitle className="!text-2xl text">
					Some of the projects of mine. Most of these are developed to get me learn new things and/or improve my skills.
				</SubTitle>
			</header>
			<div className="flex flex-row flex-wrap align-center justify-center gap-4">
				{projects.map((project) => (
					<Card key={project.id} className="max-w-xs">
						<h1 className="text-accent mt-0 font-semibold text-2xl">{project.title}</h1>
						<div className="flex flex-row justify-center space-x-4">
							<Button href={project.demo}>Demo</Button>
							<Button href={project.source}>Source</Button>
						</div>
						<SubTitle className="break-words">{project.description}</SubTitle>
					</Card>
				))}
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const projectsFile = path.join(process.cwd(), "data/projects.json");
	const projects: Project[] = JSON.parse(await fs.readFile(projectsFile, "utf8")).projects;

	return {
		props: {
			projects,
		},
	};
};

export default Projects;
