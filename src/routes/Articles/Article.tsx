import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article as IArticle } from "types";
import Markdown from "./Markdown";
import { Loading } from "components";
import { APIContext } from "contexts/APIContext";
import styled from "styled-components";

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

	useEffect(() => {
		if (params.id) {
			const { request, abort } = getArticle!(params.id);
			request
				.then((data) => {
					setArticleData(data);
				})
				.catch(() => {});

			return abort;
		}
	}, [getArticle, params.id]);

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
