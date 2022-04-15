import { useEffect, useState } from "react";
import { Card } from "../../components";
import styles from "./Articles.module.css";
import { Article as IArticle } from "../../types";
import { Link } from "react-router-dom";

async function devto() {
	const res = await fetch("https://dev.to/api/articles?username=t410");
	return res.json().then((data) => {
		return data as IArticle[];
	});
}

const Articles = () => {
	const [articles, setArticles] = useState<IArticle[] | []>([]);
	useEffect(() => {
		if (articles.length === 0) {
			devto().then((data) => {
				setArticles(data);
				console.log(data);
			});
		}
	}, [articles.length]);

	return (
		<div className={styles.outerContainer}>
			<div className={styles.articles}>
				{articles.map(({ id, title }) => (
					<Card key={id}>
						<Link to={`/articles/${id}`}>
							<div className={styles.article}>
								<h2>{title}</h2>
							</div>
						</Link>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Articles;
