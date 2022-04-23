import { BrowserRouter } from "react-router-dom";
import TitleProvider from "./contexts";
import React from "react";
import { render } from "react-dom";
import "index.css";
import App from "App";
import APIProvider from "contexts/APIContext";
import DarkModeProvider from "contexts/DarkModeContext";

render(
	<React.StrictMode>
		<APIProvider>
			<TitleProvider>
				<DarkModeProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</DarkModeProvider>
			</TitleProvider>
		</APIProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
