import { useEffect, useState } from "react";
import { ArticleListing } from "types";
import { Link } from "react-router-dom";

async function devto() {
	const res = await fetch("https://dev.to/api/articles?username=t410");
	return res.json().then((data) => {
		return data as ArticleListing[];
	});
}

const Articles = () => {
	const [articles, setArticles] = useState<ArticleListing[] | []>([]);
	useEffect(() => {
		if (articles.length === 0) {
			devto().then((data) => {
				setArticles(data);
			});
		}
	}, [articles.length]);

	return (
		<div className="md:px-12 lg:px-24 xl:px-36 grid grid-cols-1 auto-rows-fr gap-8">
			{articles.map(({ id, title }) => (
				<div className="flex flex-col">
					<Link to={`/articles/${id}`} className="flex-1 h-full">
						<div className="flex-1 bg-primary-500 rounded text-white p-6 min-h-fit h-full flex flex-col justify-between space-y-2 transition-all drop-shadow-sm hover:drop-shadow-xl hover:scale-105">
							<h2>{title}</h2>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Articles;
