import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
	return (
		<Html>
			<Head />
			<body>
				<div className="w-3/4 m-auto flex flex-col">
					<Main />
				</div>
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
