import { useEffect, useState } from "react";
import { Project as IProject } from "types";
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
		<div className="h-full">
			{loading ? (
				<div className="h-full w-full flex flex-row justify-center items-center">
					<img className="animate-spin w-20 h-20" src={spinner} alt="Loading Spinner"></img>
				</div>
			) : (
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{projects.map((project) => (
						<div
							key={project._id}
							className="rounded bg-primary-500 text-white p-2 min-h-fit h-full flex flex-col justify-between space-y-2 transition-all drop-shadow-sm hover:drop-shadow-xl"
						>
							<h2 className="text-xl flex-1">{project.title}</h2>
							<p className="text-sm">{project.description}</p>
							<div className="border-b-2 rounded border-green-500" />
							<div className="flex flex-row justify-between">
								<a href={project.demo} target="_blank" rel="noreferrer">
									<img src="https://img.shields.io/badge/-Demo-rgb(34%20197%2094)?style=for-the-badge" alt="Demo" />
								</a>
								<a href={project.source} target="_blank" rel="noreferrer">
									<img
										src="https://img.shields.io/badge/-Source-rgb(249%2C115%2C22)?style=for-the-badge"
										alt="Source"
									/>
								</a>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Projects;
