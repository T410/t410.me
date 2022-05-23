import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "contexts";
import React from "react";
import { render } from "react-dom";
import App from "App";

render(
	<React.StrictMode>
		<AppContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
