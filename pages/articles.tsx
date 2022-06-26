import { GetServerSideProps } from "next";
import Link from "next/link";
import { listArticles } from "lib/api";
import { title } from "meta";

import { FC, forwardRef, ReactNode } from "react";
import { SubTitle, Title, UnderlinedTitle } from "elements";
import { Head } from "components";

import { Article, YearArticle } from "types";

const splitByYear = (articles: Article[]) => {
	const years: YearArticle = [];

	articles.forEach((article) => {
		const year = article.published_at.split("-")[0];
		const foundYear = years.find(([x]) => x === Number(year));
		if (!foundYear) {
			years.push([Number(year), article]);
		} else {
			foundYear.push(article);
		}
	});
	return years;
};

export const getStaticProps: GetServerSideProps = async ({ req }) => {
	const articles = listArticles();

	return {
		props: {
			articles: splitByYear(articles),
		},
	};
};

interface AnchorProps {
	href?: string;
	children?: ReactNode;
}
const ArticleRow = forwardRef<HTMLAnchorElement, AnchorProps>(function ArticleRow({ children, href }, ref) {
	return (
		<a
			href={href}
			className="grid grid-cols-auto-60 flex-row gap-4 align-center align-middle -mx-4 py-2 px-4 rounded-lg hover:dark:bg-dark-darkOpacity hover:bg-light-darkOpacity"
		>
			{children}
		</a>
	);
});

const ArticleName: FC<{ children: ReactNode }> = ({ children }) => {
	return <span className="text-light-brightFont dark:text-dark-brightFont font-medium text-base">{children}</span>;
};

const Time: FC<{ children: ReactNode }> = ({ children }) => {
	return <span className="text-light-font dark:text-dark-font font-light text-sm font-mono">{children}</span>;
};

const parseDate = (_date: string) => {
	return new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit" }).format(new Date(_date));
};

const Articles: FC<{ articles: YearArticle }> = ({ articles }) => {
	return (
		<div>
			<Head title={`Articles | ${title}`} description="Technical articles, tutorials I have written." />

			<header className="text-center">
				<Title>Articles</Title>
				<SubTitle className="!text-2xl text">Technical articles, tutorials I have written.</SubTitle>
			</header>
			{articles.map(([year, ...articles], i) => (
				<div key={i}>
					<UnderlinedTitle className="text-accent">{year}</UnderlinedTitle>
					{articles.map(({ id, title, slug, published_at }) => (
						<div key={id}>
							<Link href={`/article/${slug}`} passHref>
								<ArticleRow>
									<ArticleName>{title}</ArticleName>
									<Time>{parseDate(published_at)}</Time>
								</ArticleRow>
							</Link>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Articles;
