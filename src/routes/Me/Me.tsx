import { devto, github, linkedin } from "assets";
const Me = () => {
	return (
		<div className="flex flex-col justify-center items-center space-y-8">
			<div className="flex flex-row items-center justify-center">
				<img src="https://avatars.githubusercontent.com/u/8334449?v=4" alt="profile" className="rounded-full" />
			</div>
			<div className="text-center">
				<h1 className="text-3xl">Tayyib Cankat</h1>
				<br />
				<p>I'm a software engineer working in Turkey, mostly focusing on Frontend Development.</p>
				<p>This is my personal showcase/blog site.</p>
			</div>
			<div className="flex flex-row justify-center items-center h-1/2 space-x-4">
				<a
					className="w-8 h-8 flex items-center justify-center"
					href="https://dev.to/t410"
					target="_blank"
					rel="noreferrer"
				>
					<img src={devto} alt="dev.to profile link of Tayyib Cankat"></img>
				</a>
				<a
					className="w-8 h-8 flex items-center justify-center"
					href="https://linkedin.com/in/mt410/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={linkedin} alt="linkedin profile of Tayyib Cankat"></img>
				</a>
				<a
					className="w-8 h-8 flex items-center justify-center"
					href="https://github.com/T410"
					target="_blank"
					rel="noreferrer"
				>
					<img src={github} alt="github profile of Tayyib Cankat"></img>
				</a>
			</div>
		</div>
	);
};

export default Me;
