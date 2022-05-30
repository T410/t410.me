import { useContext, useEffect, useState } from "react";
import { Project as IProject } from "types";
import { Card, CardSection, CardViewer, Loading } from "components";
import { APIContext } from "contexts/APIContext";
import { Button, RowFlex } from "elements";

const Projects = () => {
	const [projects, setProjects] = useState<IProject[]>([]);
	const { getProjects } = useContext(APIContext);

	useEffect(() => {
		const { request, abort } = getProjects();
		request
			.then((response) => {
				setProjects(response);
			})
			.catch(() => {});

		return abort;
	}, [getProjects]);

	return (
		<>
			{projects.length > 0 ? (
				<CardViewer>
					{projects.map((project) => (
						<Card title={project.title} key={project._id}>
							<CardSection>
								<RowFlex>
									<Button href={project.demo} target="_blank">
										Demo
									</Button>
									<Button href={project.source} target="_blank">
										Source
									</Button>
								</RowFlex>
							</CardSection>
							<CardSection>
								<p>{project.description}</p>
							</CardSection>
						</Card>
					))}
				</CardViewer>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Projects;
