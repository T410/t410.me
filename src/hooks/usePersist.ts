import { useCallback, useEffect, useState } from "react";

interface UsePersistProps<T> {
	stateName: string;
	initialValue: T;
}

const usePersist = <T>({ stateName, initialValue }: UsePersistProps<T>): [T, (value: T) => void] => {
	const name = `persist/${stateName}`;
	const [state, setState] = useState<T>(initialValue);

	const getValue = () => {
		try {
			return JSON.parse(localStorage.getItem(name) + "");
		} catch {
			return state;
		}
	};

	const setValue = useCallback(
		(value: T) => {
			localStorage.setItem(name, JSON.stringify(value));
			setState(value);
		},
		[name]
	);

	useEffect(() => {
		const value = localStorage.getItem(name);
		if (initialValue && value === null) {
			localStorage.setItem(name, JSON.stringify(initialValue));
		}

		if (value) {
			try {
				setState(JSON.parse(value));
			} catch {
				setValue(initialValue);
			}
		}
	}, [initialValue, name, setValue]);

	return [getValue(), setValue];
};

export default usePersist;
