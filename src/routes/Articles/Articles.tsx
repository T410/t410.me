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
		<div className="bg-navy-700 grid grid-cols-1 auto-rows-fr gap-8">
			{articles.map(({ id, title }) => (
				<div className="flex flex-col" key={id}>
					<Link to={`/articles/${id}`} className="flex-1 h-full">
						<div className="card flex-1 bg-navy-600 text-white min-h-fit h-full flex flex-col justify-between space-y-2 transition-all hover:scale-102">
							<h2>{title}</h2>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Articles;
