import { Navbar } from "components";
import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
	const darkMode = true;

	return (
		<Html className={darkMode ? "dark" : "light"}>
			<Head />
			<body className="dark:bg-dark-background bg-light-background dark:text-dark-brightFont text-light-brightFont">
				<Navbar />
				<main className="max-w-3xl m-auto flex mt-14 flex-col p-4 md:p-8">
					<div className="mt-6">
						<Main />
					</div>
				</main>
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
