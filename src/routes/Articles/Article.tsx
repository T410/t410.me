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
		<div className="card article-card break-words text-white h-full bg-neutral-900 p-3 sm:p-5 md:py-8 md:px-12 lg:px-16">
			{articleData && (
				<div className="h-full">
					<div className="markdown">
						<div className="card bg-black/80 mb-5">
							<p>
								This article was originally written for{" "}
								<a className="new-tab" href="https://dev.to" target="_blank" rel="noreferrer">
									dev.to
								</a>
								. You can read the original one here:{" "}
							</p>
							<a href={articleData.canonical_url} className="new-tab font-medium" target="_blank" rel="noreferrer">
								{articleData.title}
							</a>
						</div>
						<h1 className="font-bold text-3xl md:font-extrabold md:text-4xl md:leading-[45px] lg:text-5xl lg:leading-[60px]">
							{articleData.title}
						</h1>
						<Markdown markdown={articleData.body_markdown} />
					</div>
				</div>
			)}
		</div>
	);
}
