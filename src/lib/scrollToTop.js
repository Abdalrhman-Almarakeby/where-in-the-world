/**
 * Scrolls the window to the top with smooth or instant behavior, depending on user preference.`
 */
export function scrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "instant",
	});
}
