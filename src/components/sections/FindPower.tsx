"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { needs, shop, whatsappAbout } from "@/content/site";
import { SplitWords } from "@/components/motion/SplitWords";
import s from "./sections.module.css";

export function FindPower() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const need = needs[active];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + needs.length) % needs.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="find" className="section" aria-labelledby="find-title">
      <div className={`wrap ${s.stack}`}>
        <div className="section-head">
          <div className="section-head__main">
            <p className="eyebrow" data-reveal="">
              Find your power
            </p>
            <h2 id="find-title" className="h2" data-split="">
              <SplitWords text="What do you need to keep running?" />
            </h2>
          </div>
          <p className="section-head__aside" data-reveal="">
            Pick one. We’ll show you the itel Energy product that fits.
          </p>
        </div>

        <div role="tablist" aria-label="What you need to power" className={`${s.tabs} ${s.scroller}`} data-reveal="">
          {needs.map((n, i) => (
            <button
              key={n.num}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`need-tab-${i}`}
              aria-selected={i === active}
              aria-controls="need-panel"
              tabIndex={i === active ? 0 : -1}
              className={s.tab}
              onClick={() => setActive(i)}
              onKeyDown={onKey}
            >
              {n.num} · {n.label}
            </button>
          ))}
        </div>

        <div className={s.findRow}>
          <div className={`frame ${s.findFrame}`} data-reveal="">
            {needs.map((n, i) => (
              <Image
                key={n.num}
                src={n.image}
                alt={i === active ? n.alt : ""}
                aria-hidden={i === active ? undefined : true}
                fill
                placeholder="blur"
                sizes="(max-width: 860px) 100vw, 45vw"
                className={`${s.findImg} ${i === active ? s.findImgOn : ""}`}
              />
            ))}
          </div>

          <div id="need-panel" role="tabpanel" aria-labelledby={`need-tab-${active}`} className={s.findText} key={active}>
            <p className="kicker">
              <span className="dot" aria-hidden="true" />
              {need.kicker}
            </p>
            <h3 className={s.findName}>{need.name}</h3>
            <p className={s.findBody}>{need.body}</p>
            <ul className={s.points}>
              {need.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a href={shop.phone.href} className="btn">
                Call for today’s price
              </a>
              <a href={whatsappAbout(need.name)} className="link">
                Ask about {need.short} on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
