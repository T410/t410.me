import { AppContextProvider } from "contexts";
import { AppProps } from "next/app";
import { Navbar } from "components";
import { AnalyticsInit } from "elements/Analytics";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<AnalyticsInit />
			<Navbar />

			<main className="max-w-3xl m-auto flex mt-14 flex-col p-4 md:p-8">
				<div className="mt-6">
					<Component {...pageProps} />
				</div>
			</main>
		</AppContextProvider>
	);
}
