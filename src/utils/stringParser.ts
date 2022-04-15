const removeDash = (str: string) => str.replace(/-/g, " ");
const upperFirst = (str: string) => str[0].toUpperCase() + str.slice(1);

export { removeDash, upperFirst };
