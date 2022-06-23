export interface Fetch<T> {
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
			.then((data) => {
				return options?.methodName ? data.data[options?.methodName] : data;
			}),
		abort: () => {
			controller.abort();
		},
	};
}
type Arguments = {
	[key: string]: string;
}[];

export interface Query {
	method: string;
	parameters: {
		name: string;
	}[];
	arguments?: Arguments;
}

const prepareArguments = (val: Arguments) => {
	const res = val
		.map((argument) => {
			return Object.keys(argument).map((key) => {
				return `${key}:"${argument[key]}"`;
			});
		})
		.join(",");
	return res;
};

function queryBuilder(query: Query) {
	const method = query.method + `${query.arguments ? "(" + prepareArguments(query.arguments) + ")" : ""}`;

	const q = `{${method}{${query.parameters
		.map((val) => {
			return val.name + "\n";
		})
		.join("")}}}`;

	return {
		methodName: query.method,
		query: q,
	};
}

export { fetchFrom, queryBuilder };
