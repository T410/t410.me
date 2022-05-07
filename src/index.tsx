import { BrowserRouter } from "react-router-dom";
import TitleProvider from "./contexts";
import React from "react";
import { render } from "react-dom";
import App from "App";
import APIProvider from "contexts/APIContext";
import DarkModeProvider from "contexts/DarkModeContext";
import GlobalStyle from "./globalStyles";

render(
	<React.StrictMode>
		<APIProvider>
			<TitleProvider>
				<DarkModeProvider>
					<BrowserRouter>
						<GlobalStyle />
						<App />
					</BrowserRouter>
				</DarkModeProvider>
			</TitleProvider>
		</APIProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
