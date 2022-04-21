import { BrowserRouter } from "react-router-dom";
import TitleProvider from "./contexts";
import React from "react";
import { render } from "react-dom";
import "index.css";
import App from "App";
import APIProvider from "contexts/APIContext";

render(
	<React.StrictMode>
		<APIProvider>
			<TitleProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</TitleProvider>
		</APIProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
