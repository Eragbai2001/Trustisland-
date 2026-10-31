"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { closer } from "@/content/site";
import { SwipeNav } from "@/components/motion/SwipeNav";
import s from "./sections.module.css";

/*
 * Close-ups of the real products. On wide screens the photo pins in place
 * while the captions scroll past and swap it, like a product film. On
 * tablets and phones it is a simple row of photos.
 */
export function LookCloser() {
  const [active, setActive] = useState(0);
  const steps = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = steps.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={s.closer} aria-labelledby="closer-title">
      <div className={s.closerHead} data-reveal="">
        <h3 id="closer-title" className={s.closerTitle}>
          Look closer
        </h3>
        <p className={s.closerNote}>Come to the shop and we’ll switch them on for you.</p>
      </div>

      {/* Wide screens: pinned photo, scrolling captions. */}
      <div className={s.story}>
        <div className={s.storyStage}>
          <div className={s.storyFrame}>
            {closer.map((c, i) => (
              <Image
                key={c.title}
                src={c.image}
                alt={i === active ? c.alt : ""}
                aria-hidden={i === active ? undefined : true}
                fill
                sizes="48vw"
                placeholder="blur"
                className={`${s.storyImg} ${i === active ? s.storyImgOn : ""}`}
              />
            ))}
            <p className={s.storyCount} aria-hidden="true">
              <span>0{active + 1}</span> / 0{closer.length}
            </p>
          </div>
        </div>
        <div className={s.storySteps}>
          {closer.map((c, i) => (
            <div
              key={c.title}
              ref={(el) => {
                steps.current[i] = el;
              }}
              data-step={i}
              className={`${s.storyStep} ${i === active ? s.storyStepOn : ""}`}
            >
              <p className="kicker">
                <span className="dot" aria-hidden="true" />0{i + 1}
              </p>
              <h4 className={s.storyName}>{c.title}</h4>
              <p className={s.storyBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablets and phones: a row of photos. */}
      <div className={s.swipe}>
        <div className={`${s.closerRow} ${s.scroller}`}>
          {closer.map((c, i) => (
            <figure key={c.title} className={s.closerFig} data-reveal="" style={{ "--i": i } as React.CSSProperties}>
              <div className={`frame ${s.closerFrame}`}>
                <span data-zoom="">
                  <Image src={c.image} alt={c.alt} fill placeholder="blur" sizes="(max-width: 560px) 72vw, 32vw" style={{ objectFit: "cover" }} />
                </span>
              </div>
              <figcaption>
                <strong>{c.title}.</strong> {c.body}
              </figcaption>
            </figure>
          ))}
        </div>
        <SwipeNav label="Look closer" />
      </div>
    </section>
  );
}
