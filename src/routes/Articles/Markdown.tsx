import Gist from "react-gist";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled, { ThemeContext } from "styled-components";
import { FancyA, Title, UnderlinedTitle } from "elements";
import { FC, useContext } from "react";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";

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

function parseFigcaption(str: string) {
	const regex = /<figcaption>([^%]+)<\/figcaption>/g;
	const match = str.match(regex);
	if (match) {
		match.forEach((m) => {
			str = str.replaceAll(m, m.replace(regex, " $1"));
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

const P = styled.p`
	color: ${({ theme }) => theme.colors.fontColor};
	font-size: 1.2rem;
`;

const Ul = styled.ul`
	color: ${({ theme }) => theme.colors.fontColor};
`;

const Code = styled.code`
	background-color: ${({ theme }) => theme.colors.elements.code.background};
	color: ${({ theme }) => theme.colors.elements.code.font};
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
				backgroundColor: themeContext.colors.preBackground,
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
				h2: (props: ReactMarkdownProps) => {
					return <UnderlinedTitle {...props} fontSize="1.5rem" />;
				},
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
				figcaption: (props: any) => <P {...props} />,
			}}
		>
			{parseString(markdown)}
		</ReactMarkdown>
	);
}
