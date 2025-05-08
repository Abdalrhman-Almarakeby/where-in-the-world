export function scrollToTop(behavior) {
	const preferReducedMotion = window.matchMedia(
		"(prefers-reduced-motion)",
	).matches;

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: behavior || preferReducedMotion ? "instant" : "smooth",
	});
}
