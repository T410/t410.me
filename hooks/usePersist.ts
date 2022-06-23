import { useCallback, useState } from "react";

interface UsePersistProps<T> {
	stateName: string;
	initialValue: T;
}

const usePersist = <T>({ stateName, initialValue }: UsePersistProps<T>): [T, (value: T) => void] => {
	const name = `persist/${stateName}`;

	const getFromStorage = () => {
		try {
			const val = JSON.parse(localStorage.getItem(name) + "");
			if (val !== null) {
				return val;
			} else {
				localStorage.setItem(name, JSON.stringify(initialValue));
			}
		} catch {
			return initialValue;
		}
	};

	const [state, setState] = useState<T>(getFromStorage());

	const setValue = useCallback(
		(value: T) => {
			localStorage.setItem(name, JSON.stringify(value));
			setState(value);
		},
		[name]
	);

	return [state, setValue];
};

export default usePersist;
