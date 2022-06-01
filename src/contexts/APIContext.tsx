import { createContext, FC } from "react";
import { APIContextState, Article as IArticle, ArticleListing, Heading, Project } from "types";
import { fetchFrom, queryBuilder } from "utils/API";
import type { Query } from "utils/API";

const projectType: Query = {
	method: "projects",
	parameters: [
		{
			name: "_id",
		},
		{
			name: "title",
		},
		{
			name: "description",
		},
		{
			name: "demo",
		},
		{
			name: "source",
		},
	],
};

const headingType: Query = {
	method: "heading",
	parameters: [
		{
			name: "route",
		},
		{
			name: "title",
		},
		{
			name: "detail",
		},
	],
};

const contextDefaultValue: APIContextState = {
	getArticle: (id: string) => fetchFrom<IArticle>(`https://dev.to/api/articles/${id}`),
	getArticles: () => fetchFrom<ArticleListing[]>("https://dev.to/api/articles?username=t410"),
	getProjects: () => {
		return fetchFrom<Project[]>("https://api.t410.me/.netlify/functions/graphql", {
			method: "POST",
			body: JSON.stringify({ query: queryBuilder(projectType).query }),
			methodName: "projects",
		});
	},
	getHeading: (route: string) => {
		return fetchFrom<Heading>("https://api.t410.me/.netlify/functions/graphql", {
			method: "POST",
			body: JSON.stringify({ query: queryBuilder({ ...headingType, arguments: [{ route: route }] }).query }),
			methodName: "heading",
		});
	},
};

export const APIContext = createContext<APIContextState>(contextDefaultValue);

const APIProvider: FC = ({ children }) => {
	return <APIContext.Provider value={{ ...contextDefaultValue }}>{children}</APIContext.Provider>;
};

export default APIProvider;
