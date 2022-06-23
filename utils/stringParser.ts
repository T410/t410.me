const removeDash = (str: string) => str.replace(/-/g, " ");
const upperFirst = (str: string) => str[0].toUpperCase() + str.slice(1);
const forEachWord = (str: string) => (callback: (word: string) => void) => str.split(" ").map(callback).join(" ");
const removeLastDashAndWord = (str: string) => str.replace(/(-[^-]*)$/, "");
const getSentences = (str: string, count: number) => {
	return str.split(/[.!?]/).slice(0, count).join(".").replaceAll(/^#*\s/gi, "") + "...";
};

export { removeDash, upperFirst, forEachWord, getSentences, removeLastDashAndWord };
