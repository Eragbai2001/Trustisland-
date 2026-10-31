"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ticker } from "@/content/site";
import s from "./sections.module.css";

/* A slow marquee that speeds up with your scrolling and runs backwards when you scroll up. */
export function Ticker() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const loop = gsap.to(el, { xPercent: -50, ease: "none", duration: 48, repeat: -1 });
    let dir = 1;
    const st = ScrollTrigger.create({
      onUpdate(self) {
        dir = self.direction;
        const boost = Math.min(7, 1 + Math.abs(self.getVelocity()) / 350);
        loop.timeScale(dir * boost);
      },
    });
    const settle = () => {
      const now = loop.timeScale();
      loop.timeScale(gsap.utils.interpolate(now, dir, 0.04));
    };
    gsap.ticker.add(settle);
    return () => {
      gsap.ticker.remove(settle);
      st.kill();
      loop.kill();
    };
  }, []);

  const items = [...ticker, ...ticker];
  return (
    <div className={s.ticker} aria-label={ticker.join(". ") + "."}>
      <div ref={track} className={s.track} aria-hidden="true">
        {items.map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <span className={s.tickDot} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
