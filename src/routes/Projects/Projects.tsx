import { useContext, useEffect, useState } from "react";
import { Project as IProject } from "types";
import { Loading } from "components";
import { APIContext } from "contexts/APIContext";

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
				<div className="grid grid-cols-1 auto-rows-fr gap-2 sm:grid-cols-2">
					{projects.map((project) => (
						<div
							key={project._id}
							className="card bg-neutral-900 text-white min-h-fit h-full flex flex-col justify-between space-y-4 transition-all"
						>
							<h1 className="flex-1 font-bold text-2xl md:text-3xl">{project.title}</h1>
							<p className="text-lg md:text-xl">{project.description}</p>
							<div className="border-b-2 rounded border-neutral-800" />
							<div className="flex flex-row center w-full">
								<a
									href={project.demo}
									target="_blank"
									rel="noreferrer"
									className="text-indigo-600 text-center border-indigo-600 border-2 rounded-l-lg px-5 py-2 font-bold text-lg w-1/2 mr-[1px] after:content-['_↗'] hover:bg-indigo-600 hover:text-white hover:underline"
								>
									Demo
								</a>
								<a
									href={project.source}
									target="_blank"
									rel="noreferrer"
									className="text-teal-600 text-center border-teal-600 border-2 rounded-r-lg px-5 py-2 font-bold text-lg w-1/2 ml-[1px] after:content-['_↗'] hover:bg-teal-600 hover:text-white hover:underline"
								>
									Code
								</a>
							</div>
						</div>
					))}
				</div>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Projects;
