/**
 * Converts a kebab-case string to a string with spaces.
 *
 * @param {string} str - The kebab-case string to convert.
 * @returns {string} The string with spaces between words (e.g., 'Hello World').
 */
export function fromKebabCase(str) {
	return str
		.replace(/-([a-z])/g, (_, letter) => ` ${letter.toUpperCase()}`)
		.replace(/^([a-z])/, (_, letter) => letter.toUpperCase());
}

/**
 * Converts a string with spaces to kebab-case.
 *
 * @param {string} str - The string with spaces to convert.
 * @returns {string} The string in kebab-case (e.g., 'hello-world').
 */
export function toKebabCase(str) {
	return str
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/\s+/g, "-")
		.toLowerCase();
}
