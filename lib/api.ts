import fs from "fs";
import { join } from "path";
import type { ArticleInterface } from "types";
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
	const articles: ArticleInterface[] = JSON.parse(fs.readFileSync(articlesFile, "utf8")).articles;

	const sortedArticles = articles.sort((a, b) => {
		const aUnixTimestamp = Math.floor(new Date(a.published_at).getTime() / 1000);
		const bUnixTimestamp = Math.floor(new Date(b.published_at).getTime() / 1000);
		return bUnixTimestamp - aUnixTimestamp;
	});

	return sortedArticles;
};
