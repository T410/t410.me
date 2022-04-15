import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ markdown }: { markdown: string }) {
	return (
		<ReactMarkdown
			className="markdown"
			remarkPlugins={[remarkGfm]}
			components={{
				h1: (props: any) => (
					<>
						<br />
						<h1 className="text-3xl font-bold border-b border-white/40 pb-2.5 mb-4">{props.children}</h1>
					</>
				),
				p: (props: any) => <p {...props} className="text-xl" />,
			}}
		>
			{markdown}
		</ReactMarkdown>
	);
}
