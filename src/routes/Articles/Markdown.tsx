import Gist from "react-gist";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled, { ThemeContext } from "styled-components";
import { FancyA, Title, UnderlinedTitle } from "elements";
import React, { FC, useContext } from "react";

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

function parseGithub(str: string) {
	const regex = /{% github ([^%]+) %}/g;
	const match = str.match(regex);
	if (match) {
		match.forEach((m) => {
			str = str.replaceAll(m, m.replace(regex, "https://github.com/$1"));
		});
	}
	return str;
}

function parseString(str: string) {
	return parseGist(parseGithub(str));
}

const P = styled.p`
	color: ${({ theme }) => theme.colors.fontColor};
	font-size: 1.2rem;
`;

const Ul = styled.ul`
	color: ${({ theme }) => theme.colors.fontColor};
`;

const Code = styled.code`
	background-color: ${({ theme }) => theme.colors.codeBackground};
	border-radius: 0.25rem;
	padding: 0.2rem;
`;

const Pre: FC<{ node: { children: { children: { value: string }[] }[] } }> = ({ node }) => {
	const themeContext = useContext(ThemeContext);

	return (
		<SyntaxHighlighter
			language="javascript"
			style={a11yDark}
			customStyle={{
				backgroundColor: themeContext.colors.codeBackground,
				borderRadius: "0.5rem",
				border: `1px solid ${themeContext.colors.lightBorderColor}`,
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
	);
};

export default function Markdown({ markdown }: { markdown: string }) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
				p: (props: any) => <P {...props} />,
				h2: (props: any) => <UnderlinedTitle {...props} fontSize="1.5rem" />,
				h3: (props: any) => <Title {...props} fontSize="1.3rem" />,
				h4: (props: any) => <Title {...props} fontSize="1.1rem" />,
				a: (props: any) => {
					if (props.href.startsWith("https://gist.github.com/")) {
						const gistId = props.href.split("/")[4];
						return <Gist id={gistId} />;
					}
					return (
						<FancyA href={props.href} target="_blank" rel="noreferrer">
							{props.children}
						</FancyA>
					);
				},
				ul: (props: any) => <Ul {...props} />,
				pre: (props: any) => <Pre {...props} />,
				code: (props: any) => <Code {...props} />,
				br: () => <br />,
			}}
		>
			{parseString(markdown)}
		</ReactMarkdown>
	);
}
