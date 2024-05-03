//taking our union and calling omit on each portion of our union
export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
	? Omit<T, K>
	: never;
