import { GetServerSideProps } from "next";
import Link from "next/link";
import { listArticles } from "lib/api";
import { title } from "meta";

import { FC, ReactNode } from "react";
import { SubTitle, Title, UnderlinedTitle } from "elements";
import { Head } from "components";

import { ArticleInterface, YearArticle } from "types";

const splitByYear = (articles: ArticleInterface[]) => {
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
			slugs: articles.map((article) => article.slug),
		},
	};
};

const ArticleName: FC<{ children: ReactNode }> = ({ children }) => {
	return <span className="text-light-brightFont dark:text-dark-brightFont font-medium text-base">{children}</span>;
};

const Time: FC<{ children: ReactNode }> = ({ children }) => {
	return <span className="text-light-font dark:text-dark-font font-light text-sm font-mono">{children}</span>;
};

const parseDate = (_date: string) => {
	return new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit" }).format(new Date(_date));
};

const Articles: FC<{ articles: YearArticle; slugs: string[] }> = ({ articles }) => {
	return (
		<div>
			<Head
				title={`Articles, tutorials, write-ups | ${title}`}
				description="Technical articles, tutorials I have written."
			/>

			<header className="text-center">
				<Title>Articles</Title>
				<SubTitle className="!text-2xl text">
					Technical articles, tutorials, write-ups including TypeScript, React, JavaScript.
				</SubTitle>
			</header>
			<div className="space-y-4">
				{articles.map(([year, ...articles], i) => (
					<div key={i}>
						<UnderlinedTitle className="text-accent">{year}</UnderlinedTitle>
						{articles.map(({ id, title, slug, published_at }) => (
							<div key={id}>
								<Link
									href={`/article/${slug}`}
									passHref
									className="grid grid-cols-auto-60 flex-row gap-4 align-center align-middle -mx-4 py-2 px-4 rounded-lg hover:dark:bg-dark-darkOpacity hover:bg-light-darkOpacity"
								>
									<>
										<ArticleName>{title}</ArticleName>
										<Time>{parseDate(published_at)}</Time>
									</>
								</Link>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Articles;
