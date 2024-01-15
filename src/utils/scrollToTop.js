export default function ScrollToTop() {
  const preferReducedMotion = window.matchMedia(
    "(prefers-reduced-motion)"
  ).matches;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: preferReducedMotion ? "instant" : "smooth",
  });
}
