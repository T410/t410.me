import { devto, github, linkedin } from "assets";
const Me = () => {
	return (
		<div className="card bg-neutral-900 text-white grid md:px-16 lg:px-24">
			<div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
				<div className="col-span-2 md:col-span-1 justify-self-center">
					<img
						src="https://avatars.githubusercontent.com/u/8334449?v=4"
						alt="profile"
						className="rounded-full border-indigo-900 border-4 w-32"
					/>
				</div>
				<h1 className="col-span-2 md:col-span-4 text-4xl sm:text-5xl font-extrabold text-center">Tayyib Cankat</h1>
				<div className="flex flex-row space-x-4 space-y-0 col-span-full md:col-span-1 md:flex-col md:space-y-4 md:space-x-0 items-center justify-center">
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
				<div className="text-center col-span-full sm:px-8 md:px-16">
					<p className="break-words text-xl">
						I'm a software engineer working in Turkey, mostly focusing on Frontend Development. This is my personal
						showcase/blog site.
					</p>
				</div>
				<div className="md:col-span-2 mt-8">
					<h2 className="text-xl text-gray-400">LOCATION</h2>
					<h2 className="text-xl">Turkey</h2>
				</div>
				<div className="md:col-span-2 mt-8">
					<h2 className="text-xl text-gray-400">WORK</h2>
					<h2 className="text-xl">AdColony</h2>
				</div>
				<div className="md:col-span-2 mt-8">
					<h2 className="text-xl text-gray-400">FOCUS</h2>
					<h2 className="text-xl">Frontend</h2>
				</div>
			</div>
		</div>
	);
};

export default Me;
