/**
 * Scrolls the window to the top with smooth or instant behavior, depending on user preference.
 *
 * @param {"auto" | "instant" | "smooth"} behavior - The scroll behavior. Optional parameter.
 */
export function scrollToTop(behavior = "auto") {
	const preferReducedMotion = window.matchMedia(
		"(prefers-reduced-motion)",
	).matches;

	window.scrollTo({
		top: 0,
		left: 0,
		behavior:
			behavior === "auto"
				? preferReducedMotion
					? "instant"
					: "smooth"
				: behavior,
	});
}
