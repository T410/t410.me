import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article as IArticle } from "types";
import Markdown from "./Markdown";
import { Loading } from "components";
import { APIContext } from "contexts/APIContext";
import styled from "styled-components";
import { MetaTagContext } from "contexts/MetaTagContext";
import { getSentences } from "utils/stringParser";

const Wrapper = styled.div``;
const Title = styled.h1`
	color: ${({ theme }) => theme.colors.brightFontColor};
	text-align: center;
	font-size: 2.3rem;
	line-height: 1.2;
`;

export default function Article() {
	const params = useParams<{ id: string }>();
	const [articleData, setArticleData] = useState<IArticle>();
	const { getArticle } = useContext(APIContext);
	const { setMetaTitle, setMetaDescription } = useContext(MetaTagContext);

	useEffect(() => {
		if (params.id) {
			const { request, abort } = getArticle!(params.id);
			request
				.then((article) => {
					setArticleData(article);
					setMetaDescription(getSentences(article.body_markdown, 3));
					setMetaTitle(article.title);
				})
				.catch(() => {});

			return abort;
		}
	}, [getArticle, params.id, setMetaTitle, setMetaDescription]);

	return (
		<Wrapper>
			{articleData !== undefined ? (
				<>
					<Title>{articleData.title}</Title>
					<Markdown markdown={articleData.body_markdown} />
				</>
			) : (
				<Loading />
			)}
		</Wrapper>
	);
}
