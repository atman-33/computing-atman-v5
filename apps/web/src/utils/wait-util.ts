/**
 * wait
 * @param ms milliseconds
 * @returns
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
