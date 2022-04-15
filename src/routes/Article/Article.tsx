import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Article.module.css";
import { Article as IArticle } from "../../types";
import ReactMarkdown from "react-markdown";

async function getArticle(id: string) {
	const res = await fetch(`https://dev.to/api/articles/${id}`);
	return res.json().then((data) => {
		return data as IArticle;
	});
}

const Article: FC<{ article?: IArticle }> = ({ article }) => {
	const params = useParams<{ id: string }>();
	const [articleData, setArticleData] = useState<IArticle>();
	useEffect(() => {
		if (params.id) {
			getArticle(params.id).then((data) => {
				setArticleData(data);
			});
		}
	}, [params.id]);

	return (
		<div className={styles.article}>
			{articleData && (
				<div>
					<h1>{articleData.title}</h1>
					<ReactMarkdown>{articleData?.body_markdown}</ReactMarkdown>
				</div>
			)}
		</div>
	);
};

export default Article;
