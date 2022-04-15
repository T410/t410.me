import Gist from "react-gist";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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

export default function Markdown({ markdown }: { markdown: string }) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
				a: (props: any) => {
					if (props.href.startsWith("https://gist.github.com/")) {
						const gistId = props.href.split("/")[4];
						return <Gist id={gistId} />;
					}
					return (
						<a className="new-tab font-medium" href={props.href} target="_blank" rel="noreferrer">
							{props.children}
						</a>
					);
				},
				pre: (props: any) => {
					return (
						<div className="mb-4.5 p-2 lg:mb-5 lg:p-6 rounded-md bg-custom-black">
							<SyntaxHighlighter language="javascript" style={a11yDark}>
								{props.children
									.map((child: React.ReactElement) => {
										return child.props.children.map((c: string) => {
											if (c.endsWith("\n")) {
												return c.substring(0, c.length - 1);
											}
											return c;
										});
									})
									.join("")}
							</SyntaxHighlighter>
						</div>
					);
				},
				br: () => <br />,
			}}
		>
			{parseString(markdown)}
		</ReactMarkdown>
	);
}
