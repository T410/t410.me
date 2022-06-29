import React, { FC, useEffect, useRef } from "react";

interface GistProps {
	id: string;
	file?: string;
}

const defineUrl = ({ id, file }: GistProps) => {
	const fileArg = file ? `?file=${file}` : "";

	return `https://gist.github.com/${id}.js${fileArg}`;
};

const Gist: FC<GistProps> = ({ id, file }) => {
	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		const iframe = iframeRef.current;

		if (iframe) {
			let doc = iframe.contentDocument;
			if (doc) {
				if (iframe.contentDocument) doc = iframe.contentDocument;
				else if (iframe.contentWindow) doc = iframe.contentWindow.document;

				const gistLink = defineUrl({ id, file });
				const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
				const styles = "<style>*{font-size:12px;}</style>";
				const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;
				const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
				const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;

				doc.open();
				doc.writeln(iframeHtml);
				doc.close();
			}
		}
	}, [file, id]);

	return <iframe ref={iframeRef} width="100%" frameBorder={0} id={file ? `gist-${id}-${file}` : `gist-${id}`} />;
};

export default Gist;
