import styles from "./Projects.module.css";
import { useEffect, useState } from "react";
import { Project as IProject } from "../../types";

async function fetchProjects() {
	return await fetch("https://api.t410.me/.netlify/functions/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
				{
					projects {
						_id
						title
						description
						demo
						source
					}
				}
				`,
		}),
	})
		.then((res) => res.json())
		.then(({ data }: { data: { projects: IProject[] } }) => {
			return data.projects;
		});
}

const Projects = () => {
	const [projects, setProjects] = useState<IProject[]>([]);
	useEffect(() => {
		fetchProjects().then((projects) => {
			setProjects(projects);
		});
	}, []);
	return (
		<div className={styles.outerContainer}>
			<h1>Projects</h1>
			{projects.map((project) => (
				<div key={project._id} className={styles.project}>
					<h2>{project.title}</h2>
					<p>{project._id}</p>
					<p>{project.description}</p>
					<p>{project.demo}</p>
					<p>{project.source}</p>
				</div>
			))}
		</div>
	);
};

export default Projects;
