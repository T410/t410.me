import { useEffect } from "react";

interface UsePersistProps<T> {
	stateName: string;
	initialValue: T;
}

function usePersist<T>({ stateName, initialValue }: UsePersistProps<T>) {
	const name = `persist/${stateName}`;
	useEffect(() => {
		if (initialValue && localStorage.getItem(name) === null) {
			localStorage.setItem(name, JSON.stringify(initialValue));
		}
	}, [initialValue, name]);

	return {
		setState: (state: T) => {
			try {
				localStorage.setItem(name, JSON.stringify(state));
				return true;
			} catch {
				return false;
			}
		},
		getState: () => {
			const state = localStorage.getItem(name);
			return state ? JSON.parse(state) : initialValue;
		},
	};
}

export default usePersist;
