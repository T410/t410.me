import { AppContextProvider } from "contexts";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { Navbar } from "components";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Navbar />

			<main className="max-w-3xl m-auto flex mt-14 flex-col p-4 md:p-8">
				<div className="mt-6">
					<Component {...pageProps} />
				</div>
			</main>
		</AppContextProvider>
	);
}
