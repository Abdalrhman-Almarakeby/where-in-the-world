export function formatCurrencies(currencies) {
	return Object.entries(currencies)
		.map(([, value]) => value.name)
		.join(", ");
}

export function formatLanguages(languages) {
	return Object.entries(languages)
		.map(([, value]) => value)
		.join(", ");
}

export function formatNativeName(languages) {
	return Object.entries(languages)
		.map(([, value]) => value.common)
		.join(", ");
}
