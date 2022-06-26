import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
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
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { ...article, content };
}

export const listArticles = () => {
	const articlesFile = path.join(process.cwd(), "data/articles/articles.json");
	const articles: Article[] = JSON.parse(fs.readFileSync(articlesFile, "utf8")).articles;

	return articles;
};
