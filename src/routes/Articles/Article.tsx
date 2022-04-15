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
		<div className="text-white h-full bg-navy-700 card">
			{articleData && (
				<div className="overflow-y-scroll h-full">
					<h1 className="text-5xl mb-10">{articleData.title}</h1>
					<Markdown markdown={articleData.body_markdown} />
				</div>
			)}
		</div>
	);
}
