import fs from "fs";
import { join } from "path";
import type { Article } from "types";
import path from "path";

const postsDirectory = join(process.cwd(), "data/articles");

export function getArticleBySlug(slug: string) {
	const articles = listArticles();
	const article = articles.find((article) => article.slug === slug);
	if (!article) {
		return;
	}

	const fullPath = join(postsDirectory, `${article.id}.md`);
	const content = fs.readFileSync(fullPath, "utf8");

	return { ...article, content };
}

export const listArticles = () => {
	const articlesFile = path.join(process.cwd(), "data/articles/articles.json");
	const articles: Article[] = JSON.parse(fs.readFileSync(articlesFile, "utf8")).articles;

	return articles;
};
