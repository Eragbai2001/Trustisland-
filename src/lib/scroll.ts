import type Lenis from "lenis";

/** The page's smooth-scroll instance, when smooth scrolling is on. */
let instance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  instance = lenis;
};

export const getLenis = () => instance;

/** Freeze or release page scrolling (used while the phone menu is open). */
export function lockScroll(locked: boolean) {
  const lenis = instance;
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.classList.toggle("scroll-locked", locked);
}

/** Scroll to an element, smoothly when allowed. */
export function scrollToEl(el: HTMLElement) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (instance && !reduced) instance.scrollTo(el, { offset: 0, duration: 1.2 });
  else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}
