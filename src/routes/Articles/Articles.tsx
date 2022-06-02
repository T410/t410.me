import { useContext, useEffect, useState } from "react";
import { ArticleListing } from "types";
import { Link } from "react-router-dom";
import { Loading } from "components";
import { removeLastDashAndWord } from "utils/stringParser";
import { APIContext } from "contexts/APIContext";
import styled from "styled-components";
import { UnderlinedTitle } from "elements";
import { HeadingContext } from "contexts/HeadingContext";
import { MetaTagContext } from "contexts/MetaTagContext";

type YearArticle = [number, ...Array<ArticleListing>][];

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const ArticleRow = styled(Link)`
	display: grid;
	flex-direction: row;
	grid-template-columns: auto 60px;
	grid-gap: 1rem;
	align-items: center;
	vertical-align: middle;
	margin: 0 -1rem;
	padding: 0.4rem 1rem;
	border: 1px solid transparent;
	border-radius: 8px;

	&:hover {
		background: ${({ theme }) => theme.colors.darkOpacity};
		cursor: pointer;
	}
`;

const Article = styled.span`
	color: ${({ theme }) => theme.colors.brightFontColor};
	font-size: 1.05rem;
	font-weight: 500;
`;

const Time = styled.time`
	color: ${({ theme }) => theme.colors.fontColor};
	font-size: 0.8rem;
	font-weight: 400;
	font-family: ${({ theme }) => theme.fonts.code};
`;

const splitByYear = (articles: ArticleListing[]) => {
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

const parseDate = (_date: string) => {
	return new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit" }).format(new Date(_date));
};

const Articles = () => {
	const [yearArticles, setArticles] = useState<YearArticle>();
	const [isLoading, setIsLoading] = useState(true);
	const { isLoading: isHeadingLoading } = useContext(HeadingContext);
	const { getArticles } = useContext(APIContext);
	const { setMetaTitle } = useContext(MetaTagContext);

	useEffect(() => {
		setMetaTitle("Articles");
	}, [setMetaTitle]);

	useEffect(() => {
		if (isLoading) {
			const { request, abort } = getArticles();

			request
				.then((data) => {
					setArticles(splitByYear(data));
					setIsLoading(false);
				})
				.catch(() => {});

			return abort;
		}
	}, [getArticles, isLoading]);

	return (
		<Wrapper>
			{yearArticles && !isHeadingLoading ? (
				yearArticles.map(([year, ...articles], i) => (
					<div key={i}>
						<UnderlinedTitle>{year}</UnderlinedTitle>
						{articles.map(({ id, title, slug, published_at }) => (
							<ArticleRow to={`/articles/${id}/${removeLastDashAndWord(slug)}`} key={id}>
								<Article>{title}</Article>
								<Time>{parseDate(published_at)}</Time>
							</ArticleRow>
						))}
					</div>
				))
			) : (
				<Loading />
			)}
		</Wrapper>
	);
};

export default Articles;
