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
		<div>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					h1: (props: any) => <h1 className="text-5xl font-extrabold">{props.children}</h1>,
					h2: (props: any) => <h2 className="text-3xl my-2.5 font-bold">{props.children}</h2>,
					h3: (props: any) => <h3 className="text-2xl my-2.5 font-bold">{props.children}</h3>,
					a: (props: any) => {
						if (props.href.startsWith("https://gist.github.com/")) {
							const gistId = props.href.split("/")[4];
							return <Gist id={gistId} />;
						}
						return (
							<a
								className="text-blue-600 dark:text-sky-400 font-medium after:content-['_↗'] after:text-sm after:font-bold"
								href={props.href}
								target="_blank"
								rel="noreferrer"
							>
								{props.children}
							</a>
						);
					},
					p: (props: any) => <p className="text-xl mb-5 leading-8">{props.children}</p>,
					pre: (props: any) => {
						return (
							<div className="mb-5 p-6 bg-black/90 rounded-md">
								<SyntaxHighlighter
									language="javascript"
									style={a11yDark}
									customStyle={{ backgroundColor: "transparent" }}
								>
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
					code: (props: any) => {
						return <code className="px-1 text-base">{props.children}</code>;
					},
					ul: (props: any) => (
						<ul className="list-disc mb-5 pl-6 text-xl leading-8 marker:text-sky-400">{props.children}</ul>
					),
					img: (props: any) => {
						return <img className="mx-auto" src={props.src} alt={props.alt} style={{ maxWidth: "100%" }} />;
					},
					br: (props: any) => <br />,
				}}
			>
				{parseString(markdown)}
			</ReactMarkdown>
		</div>
	);
}
