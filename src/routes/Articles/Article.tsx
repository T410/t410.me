import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article as IArticle } from "types";
import Markdown from "./Markdown";

async function getArticle(id: string) {
	const res = await fetch(`https://dev.to/api/articles/${id}`);
	return res.json().then((data) => {
		return data as IArticle;
	});
}

export default function Article() {
	const params = useParams<{ id: string }>();
	const [articleData, setArticleData] = useState<IArticle>();
	useEffect(() => {
		if (params.id) {
			getArticle(params.id).then((data) => {
				setArticleData(data);
				console.log(data);
			});
		}
	}, [params.id]);

	return (
		<div className="text-white h-full bg-neutral-900 card py-8 px-16">
			{articleData && (
				<div className="overflow-y-scroll h-full px-5">
					<div className="w-full bg-black/80 rounded-lg p-6 mb-5">
						<p>This article was originally written for dev.to. You can read the original one here: </p>
						<a
							href={articleData.canonical_url}
							className="text-blue-600 dark:text-sky-400 font-medium after:content-['_↗'] after:text-sm after:font-bold"
							target="_blank"
							rel="noreferrer"
						>
							{articleData.title}
						</a>
					</div>
					<h1 className="text-5xl mb-10 font-extrabold">{articleData.title}</h1>
					<Markdown markdown={articleData.body_markdown} />
				</div>
			)}
		</div>
	);
}
