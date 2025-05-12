/**
 *
 * @param {string} name
 * @param {string[]} borders
 * @returns {string[]}
 */
export function filterBorders(name, borders) {
	let result = [...borders];

	if (name === "Palestine") {
		result = result.filter((border) => border !== "ISR");
		result = [...result, "SYR", "LBN"];
	}

	if (result.includes("ISR") && result.includes("PSE")) {
		result = result.filter((country) => country !== "ISR");
	}

	if (result.includes("ISR")) {
		result[result.indexOf("ISR")] = "PSE";
	}

	return result;
}
