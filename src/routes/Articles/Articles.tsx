import { useEffect, useState } from "react";
import { ArticleListing } from "types";
import { Link } from "react-router-dom";
import { Loading } from "components";

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
		<div className="grid grid-cols-1 auto-rows-fr gap-2">
			{articles.length > 0 ? (
				articles.map(({ id, title }) => (
					<div className="flex flex-col  bg-neutral-900" key={id}>
						<Link
							to={`/articles/${id}`}
							className="card flex flex-1 h-full underline text-white hover:bg-indigo-900 hover:text-indigo-300 items-center"
						>
							<h2>{title}</h2>
						</Link>
					</div>
				))
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Articles;
