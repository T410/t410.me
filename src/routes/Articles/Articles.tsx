import { useEffect, useState } from "react";
import { ArticleListing } from "types";
import { Link } from "react-router-dom";
import { Loading } from "components";
import { fetchFrom } from "utils/API";
import { removeLastDashAndWord } from "utils/stringParser";

const Articles = () => {
	const [articles, setArticles] = useState<ArticleListing[] | []>([]);
	useEffect(() => {
		if (articles.length === 0) {
			const { request, abort } = fetchFrom<ArticleListing[]>("https://dev.to/api/articles?username=t410");

			request
				.then((data) => {
					setArticles(data);
				})
				.catch(() => {});

			return abort;
		}
	}, [articles.length]);

	return (
		<div className="grid grid-cols-1 auto-rows-fr gap-2">
			{articles.length > 0 ? (
				articles.map(({ id, title, slug }) => (
					<div className="flex flex-col  bg-neutral-900" key={id}>
						<Link
							to={`/articles/${id}/${removeLastDashAndWord(slug)}`}
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
