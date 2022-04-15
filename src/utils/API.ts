interface Fetch<T> {
	request: Promise<T>;
	abort: () => void;
}
function fetchFrom<T>(url: string, options?: { method: "POST" | "GET"; body: BodyInit; methodName: string }): Fetch<T> {
	const controller = new AbortController();
	return {
		request: fetch(url, {
			...options,
			headers: {
				"Content-Type": "application/json",
			},
			signal: controller.signal,
		})
			.then((response) => response.json())
			.then((data) => (options?.methodName ? data.data[options?.methodName] : data)),
		abort: () => {
			controller.abort();
		},
	};
}

export interface Query {
	method: string;
	parameters: {
		name: string;
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
