"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis, setLenis } from "@/lib/scroll";

/*
 * The page-wide scroll layer:
 * - smooth wheel and trackpad scrolling (touch keeps native scrolling);
 * - in-page links glide to their section;
 * - [data-reveal], [data-split], [data-wipe] and [data-draw] get .is-in once
 *   they scroll into view (the looks are in globals.css);
 * - [data-parallax] drifts and [data-zoom] settles as you scroll past;
 * - the hero image drifts and the copy lifts away as you leave it.
 * With reduced motion everything is simply shown.
 */
export function ScrollFx() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const doc = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const watched = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal],[data-split],[data-wipe],[data-draw]"));

    if (reduced || !("IntersectionObserver" in window)) {
      watched.forEach((el) => el.classList.add("is-in"));
      doc.classList.add("fx-ready");
      return;
    }

    /* Smooth scrolling, driven by GSAP's clock so scrubbed effects stay in step. */
    const lenis = new Lenis({ duration: 1.15, autoRaf: false });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    /* In-page links: let other click handlers (menus) run first, then glide. */
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const id = decodeURIComponent(link.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      requestAnimationFrame(() => {
        const l = getLenis();
        if (!l) return;
        l.start();
        l.scrollTo(id === "top" ? 0 : target, { duration: 1.25 });
        target.setAttribute("tabindex", target.getAttribute("tabindex") ?? "-1");
        target.focus({ preventScroll: true });
      });
    };
    document.addEventListener("click", onClick);

    /* One-off reveals. A clipped [data-wipe] never reports as visible, so its
       parent is watched instead and reveals all of its wiped children. */
    const wipeGroups = new Map<Element, HTMLElement[]>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const group = wipeGroups.get(entry.target);
          if (group) group.forEach((el) => el.classList.add("is-in"));
          else entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.01 },
    );
    watched.forEach((el) => {
      if (el.hasAttribute("data-wipe") && el.parentElement) {
        const parent = el.parentElement;
        if (!wipeGroups.has(parent)) {
          wipeGroups.set(parent, []);
          io.observe(parent);
        }
        wipeGroups.get(parent)!.push(el);
      } else io.observe(el);
    });
    doc.classList.add("fx-ready");

    /* Scrubbed effects. */
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -7 },
          { yPercent: 7, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-zoom]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.16 },
          { scale: 1, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "center 55%", scrub: 0.6 } },
        );
      });

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      const media = hero?.querySelector<HTMLElement>("[data-hero-media]");
      const copy = hero?.querySelector<HTMLElement>("[data-hero-copy]");
      if (hero && media) {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 861px)", () => {
          gsap.to(media, { yPercent: 10, scale: 1.08, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
          if (copy) {
            gsap.to(copy, { yPercent: -22, opacity: 0, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom 15%", scrub: true } });
          }
        });
        mm.add("(max-width: 860px)", () => {
          gsap.fromTo(
            media,
            { yPercent: -5 },
            { yPercent: 6, ease: "none", scrollTrigger: { trigger: media.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
          );
        });
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      window.removeEventListener("load", refresh);
      document.removeEventListener("click", onClick);
      io.disconnect();
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
