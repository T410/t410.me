import { BrowserRouter } from "react-router-dom";
import TitleProvider from "./contexts";
import React from "react";
import { render } from "react-dom";
import "index.css";
import App from "App";

render(
	<React.StrictMode>
		<TitleProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</TitleProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
