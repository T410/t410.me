import { Button, SubTitle, Title } from "elements";
import { GetStaticProps } from "next";
import { promises as fs } from "fs";
import path from "path";
import { Project } from "types";
import { FC } from "react";
import { Head } from "components";
import { Card } from "elements";
import { title } from "meta";

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
	return (
		<div>
			<Head
				title={`Typescript and JavaScript Projects | ${title}`}
				description="Some of the projects of mine. Most of these are developed to get me learn new things and/or improve my skills."
			/>
			<header className="text-center">
				<Title>Projects</Title>
				<SubTitle className="!text-2xl text">
					Some of the projects of mine. Most of these are developed to get me learn new things and/or improve my skills.
				</SubTitle>
			</header>
			<div className="flex flex-row flex-wrap align-center justify-center gap-4">
				{projects.map((project) => (
					<Card key={project.id} className="max-w-xs p-1 gradient-round">
						<Card className="">
							<h1 className="text-accent mt-0 font-semibold text-2xl">{project.title}</h1>
							<div className="flex flex-row justify-center space-x-4 mt-4">
								<Button href={project.demo} target="_blank">
									Demo
								</Button>
								<Button href={project.source} target="_blank">
									Source
								</Button>
							</div>
							<SubTitle className="break-words !mb-0 mt-4">{project.description}</SubTitle>
						</Card>
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
