import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Articles, Projects, Me } from "./routes";

render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/projects" element={<Projects />} />
					<Route path="/articles" element={<Articles />}>
						<Route path="/articles/:id" element={<Articles />} />
					</Route>
					<Route path="/about-me" element={<Me />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
