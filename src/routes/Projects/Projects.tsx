import styles from "./Projects.module.css";
import { useEffect, useState } from "react";
import { Project as IProject } from "types";
import { Card } from "components";
import { spinner } from "assets";

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
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetchProjects().then((projects) => {
			setProjects(projects);
			setLoading(false);
		});
	}, []);

	return (
		<div className={styles.outerContainer}>
			<h1>Projects</h1>
			{loading ? (
				<div className={styles.loadingContainer}>
					<img src={spinner} alt="Loading Spinner"></img>
				</div>
			) : (
				<div className={styles.projectsContainer}>
					{projects.map((project) => (
						<div key={project._id} className={styles.project}>
							<Card className={styles.projectCard}>
								<>
									<div className={styles.titleContainer}>
										<h2>{project.title}</h2>
									</div>
									<p className={styles.desc}>{project.description}</p>
									<div className={styles.horizontalLine} />
									<div className={styles.links}>
										<a href={project.demo} target="_blank" rel="noreferrer">
											Demo Link
										</a>
										<a href={project.source} target="_blank" rel="noreferrer">
											Source
										</a>
									</div>
								</>
							</Card>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Projects;
