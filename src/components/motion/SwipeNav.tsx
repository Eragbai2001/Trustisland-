"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/icons";
import s from "./SwipeNav.module.css";

/*
 * A counter and previous/next buttons for the swipeable row just before it.
 * It only shows when that row actually scrolls, so on wide screens, where
 * the row is a grid, it stays hidden.
 */
export function SwipeNav({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const row = () => ref.current?.previousElementSibling as HTMLElement | null | undefined;

  /* How far an item sits from where a snapped item rests. */
  const offset = (r: HTMLElement, item: Element) =>
    item.getBoundingClientRect().left - r.getBoundingClientRect().left - (parseFloat(getComputedStyle(r).scrollPaddingLeft) || 0);

  useEffect(() => {
    const r = row();
    if (!r) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const items = Array.from(r.children);
      const max = r.scrollWidth - r.clientWidth;
      const end = r.scrollLeft >= max - 4;
      let best = 0;
      items.forEach((item, i) => {
        if (Math.abs(offset(r, item)) < Math.abs(offset(r, items[best]))) best = i;
      });
      setCount(items.length);
      setScrollable(max > 4);
      setAtEnd(end);
      setIndex(end ? items.length - 1 : best);
    };
    const onChange = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    r.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    return () => {
      r.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
      cancelAnimationFrame(raf);
    };
  }, []);

  const go = (step: number) => {
    const r = row();
    if (!r) return;
    const items = Array.from(r.children);
    const target = items[Math.max(0, Math.min(items.length - 1, index + step))];
    if (!target) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    r.scrollTo({ left: r.scrollLeft + offset(r, target), behavior: smooth ? "smooth" : "auto" });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div ref={ref} className={s.nav} hidden={!scrollable}>
      <p className={s.count} aria-live="polite">
        <span className="visually-hidden">{label}: </span>
        <span className={s.now}>{pad(index + 1)}</span> / {pad(count)}
      </p>
      <span className={s.track} aria-hidden="true">
        <span className={s.fill} style={{ transform: `scaleX(${count ? (index + 1) / count : 0})` }} />
      </span>
      <div className={s.buttons}>
        <button type="button" className={s.btn} onClick={() => go(-1)} disabled={index === 0} aria-label={`Previous in ${label}`}>
          <ArrowIcon className={s.back} />
        </button>
        <button type="button" className={s.btn} onClick={() => go(1)} disabled={atEnd} aria-label={`Next in ${label}`}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
