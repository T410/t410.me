import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
	const darkMode = true;

	return (
		<Html className={darkMode ? "dark" : "light"}>
			<Head>
				<link rel="shortcut icon" href="/logo_big.png" />
			</Head>
			<body className="dark:bg-dark-background bg-light-background dark:text-dark-brightFont text-light-brightFont selection:bg-accent selection:dark:text-dark-background selection:text-light-background">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
