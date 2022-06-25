import { AppContextProvider } from "contexts";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { Amplify, Auth } from "aws-amplify";
import config from "aws-exports";
// console.log(config);

Amplify.configure({ ...config, ssr: true });
// Auth.configure(config);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Component {...pageProps} />
		</AppContextProvider>
	);
}
