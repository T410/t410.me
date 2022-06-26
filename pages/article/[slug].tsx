import { GetStaticProps } from "next";
import { getArticleBySlug, listArticles } from "lib/api";
import { ParsedUrlQuery } from "querystring";

import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { FancyA, Title, UnderlinedTitle } from "elements";
import Gist from "react-gist";
import gfm from "remark-gfm";

import type { Article } from "types";
import type { ReactMarkdownProps } from "react-markdown/lib/complex-types";

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params as Params;
	const article = getArticleBySlug(slug);

	if (!article) return { notFound: true };

	// const content = await markdownToHtml(article.content || "");

	return {
		props: {
			...article,
			// content,
		},
	};
};

export async function getStaticPaths() {
	const articles = listArticles();

	return {
		paths: articles.map((article) => {
			return {
				params: {
					slug: article.slug,
				},
			};
		}),
		fallback: false,
	};
}

function parseGist(str: string) {
	const regex = /{% gist ([^%]+) %}/g;
	const match = str.match(regex);
	if (match) {
		match.forEach((m) => {
			str = str.replaceAll(m, m.replace(regex, "$1"));
		});
	}
	return str;
}

const Article: FC<Article> = ({ title, content }) => {
	return (
		<article>
			<Title>{title}</Title>
			<ReactMarkdown
				remarkPlugins={[gfm]}
				components={{
					p: (props: ReactMarkdownProps) => <p>{props.children}</p>,
					h2: (props: ReactMarkdownProps) => {
						return <UnderlinedTitle>{props.children}</UnderlinedTitle>;
					},
					h3: (props: ReactMarkdownProps) => <Title>{props.children}</Title>,
					h4: (props: ReactMarkdownProps) => <Title>{props.children}</Title>,
					a: (props: any) => {
						if (props.href.startsWith("https://gist.github.com/")) {
							const gistId = props.href.split("/")[4];
							return <Gist id={gistId} />;
						}
						return <FancyA href={props.href}>{props.children}</FancyA>;
					},
					ul: (props: ReactMarkdownProps) => <ul>{props.children}</ul>,
					pre: (props: ReactMarkdownProps) => <pre>{props.children}</pre>,
					code: (props: ReactMarkdownProps) => <code>{props.children}</code>,
					br: () => <br />,
					figcaption: (props: ReactMarkdownProps) => <figcaption>{props.children}</figcaption>,
				}}
			>
				{parseGist(content)}
			</ReactMarkdown>
		</article>
	);
};

export default Article;
