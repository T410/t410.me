import Gist from "react-gist";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
					h1: (props: any) => <h1 className="text-5xl">{props.children}</h1>,
					h2: (props: any) => <h2 className="text-3xl my-2.5">{props.children}</h2>,
					h3: (props: any) => <h3 className="text-2xl my-2.5">{props.children}</h3>,
					a: (props: any) => {
						if (props.href.startsWith("https://gist.github.com/")) {
							const gistId = props.href.split("/")[4];
							return <Gist id={gistId} />;
						}
						return (
							<a className="underline hover:underline hover:text-opacity-80 text-navy-100" href={props.href}>
								{props.children}
							</a>
						);
					},
					p: (props: any) => <p className="text-xl mb-5">{props.children}</p>,
				}}
			>
				{parseString(markdown)}
			</ReactMarkdown>
		</div>
	);
}
