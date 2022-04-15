const removeDash = (str: string) => str.replace(/-/g, " ");
const upperFirst = (str: string) => str[0].toUpperCase() + str.slice(1);
const forEachWord = (str: string) => (callback: (word: string) => void) => str.split(" ").map(callback).join(" ");
const removeLastDashAndWord = (str: string) => str.replace(/(-[^-]*)$/, "");

export { removeDash, upperFirst, forEachWord, removeLastDashAndWord };
