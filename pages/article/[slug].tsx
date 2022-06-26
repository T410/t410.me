import { GetStaticProps } from "next";
import { getArticleBySlug, listArticles } from "lib/api";
import { ParsedUrlQuery } from "querystring";

import { FC, ReactNode, useContext } from "react";
import { Head } from "components";
import ReactMarkdown from "react-markdown";
import { DarkModeContext } from "contexts/DarkModeContext";
import { FancyA, Tag, Title, UnderlinedTitle } from "elements";
import Gist from "react-gist";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark";
import { theme } from "tailwind.config";

import type { Article } from "types";
import type { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import { articleSuffix } from "meta";

interface Params extends ParsedUrlQuery {
	slug: string;
}

interface MarkdownProps {
	node: {
		tagName: string;
		children: { children: { type: string; value: string }[]; properties: { className: string[] } }[];
	};
	children: ReactNode;
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params as Params;
	const article = getArticleBySlug(slug);

	if (!article) return { notFound: true };

	return {
		props: {
			...article,
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
			str = str.replace(m, m.replace(regex, "$1"));
		});
	}
	return str;
}

function parseGithub(str: string) {
	const regex = /{% github ([^%]+) %}/g;
	const match = str.match(regex);
	if (match) {
		match.forEach((m) => {
			str = str.replace(m, m.replace(regex, "https://github.com/$1"));
		});
	}
	return str;
}

function parseFigcaption(str: string) {
	const regex = /<figcaption>([^%]+)<\/figcaption>/g;
	const match = str.match(regex);
	if (match) {
		match.forEach((m) => {
			str = str.replace(m, m.replace(regex, "!figcaption $1"));
		});
	}
	return str;
}

function parseString(str: string) {
	let res = parseGithub(str);
	res = parseGist(res);
	res = parseFigcaption(res);
	return res;
}

const Pre: FC<MarkdownProps> = ({ node }) => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className="my-6">
			<SyntaxHighlighter
				language={node.children[0].properties.className?.[0]?.split("-")[1] || "typescript"}
				style={a11yDark}
				customStyle={{
					backgroundColor: darkMode ? theme.colors.dark.code.background : theme.colors.light.code.background,
					padding: "16px",
					border: "1px solid",
					borderColor: darkMode ? theme.colors.dark.lightBorderColor : theme.colors.light.lightBorderColor,
					borderRadius: "0.5rem",
				}}
			>
				{node &&
					node.children
						.map((child) => {
							return child.children.map(({ value }) => {
								if (value.endsWith("\n")) {
									return value.substring(0, value.length - 1);
								}
								return value;
							});
						})
						.join("")}
			</SyntaxHighlighter>
		</div>
	);
};

const Tags: FC<{ tags: string[] }> = ({ tags }) => {
	return (
		<div className="mb-4 flex flex-row justify-center space-x-4">
			{tags.length > 0 && tags.map((tag, id) => <Tag key={id}>#{tag}</Tag>)}
		</div>
	);
};

const Article: FC<Article> = ({ title, content, published_at, description, tags }) => {
	return (
		<article className="w-full !break-words">
			<Head title={`${title} ${articleSuffix}`} description={description} />

			<Title>{title}</Title>
			<p className="font-mono text-right w-full text-sm mb-8">
				Written by <FancyA href="/">Tayyib Cankat</FancyA> on {published_at}
			</p>

			<Tags tags={tags} />

			<ReactMarkdown
				remarkPlugins={[gfm]}
				components={{
					p: (props: ReactMarkdownProps) => {
						return <p className="dark:text-dark-font text-light-font text-xl mb-4">{props.children}</p>;
					},
					h2: (props: ReactMarkdownProps) => {
						return <UnderlinedTitle className="text-accent mt-6">{props.children}</UnderlinedTitle>;
					},
					h3: (props: ReactMarkdownProps) => <Title className="!text-3xl">{props.children}</Title>,
					h4: (props: ReactMarkdownProps) => <Title className="!text-2xl">{props.children}</Title>,
					a: (props: any) => {
						if (props.href.startsWith("https://gist.github.com/")) {
							const gistId = props.href.split("/")[4];
							return <Gist id={gistId} />;
						}
						return (
							<FancyA href={props.href} className="break-all">
								{props.children}
							</FancyA>
						);
					},
					ul: (props: ReactMarkdownProps) => (
						<ul className="list-disc space-y-2 pl-8 mb-4 marker:text-accent marker:text-xl text-lg dark:text-dark-font text-light-font">
							{props.children}
						</ul>
					),
					pre: (props: any) => <Pre {...props} />,

					code: (props: ReactMarkdownProps) => (
						<code className="dark:bg-dark-code-background bg-light-code-background dark:text-dark-code-font text-light-code-font rounded p-1 text-base">
							{props.children}
						</code>
					),
					br: () => <br />,
				}}
			>
				{parseString(content)}
			</ReactMarkdown>
		</article>
	);
};

export default Article;
