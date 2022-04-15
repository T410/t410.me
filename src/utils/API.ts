interface Fetch<T> {
	request: Promise<T[]>;
	abort: () => void;
}
function fetchFrom<T>(url: string, { methodName, query }: { methodName: string; query: string }): Fetch<T> {
	const controller = new AbortController();
	return {
		request: fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query: query }),
			signal: controller.signal,
		})
			.then((response) => response.json())
			.then((data) => data.data[methodName]),
		abort: () => {
			controller.abort();
		},
	};
}

export interface Query {
	method: string;
	parameters: {
		name: string;
		resolve: string;
	}[];
}

function queryBuilder(query: Query) {
	return {
		methodName: query.method,
		query: `{${query.method}{${query.parameters
			.map((val) => {
				return val.name + "\n";
			})
			.join("")}}}`,
	};
}

export { fetchFrom, queryBuilder };

export const types = {
	string: typeof "",
	number: typeof 0,
	boolean: typeof true,
	object: typeof {},
};
