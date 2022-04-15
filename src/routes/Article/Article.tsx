import { FC } from "react";
import styles from "./Article.module.css";
import { Article as IArticle } from "../../types";

const Article: FC<{ article?: IArticle }> = ({ article }) => {
	return (
		<div className={styles.article}>
			<h1>Article</h1>
		</div>
	);
};

export default Article;
