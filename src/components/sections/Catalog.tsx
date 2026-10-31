"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { filters, FIRST_PRODUCTS, products, shop, type Filter } from "@/content/site";
import { FILTER_EVENT } from "@/components/motion/FilterLink";
import s from "./sections.module.css";

const matches = (groups: Filter[], f: Filter) => f === "All" || groups.includes(f);

export function Catalog() {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);
  const [seen, setSeen] = useState(false);
  const gridRef = useRef<HTMLUListElement>(null);

  /* Start the card animation when the grid first scrolls into view. */
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Category tiles further up pick a filter on their way here. */
  useEffect(() => {
    const onPick = (e: Event) => setFilter((e as CustomEvent<Filter>).detail);
    window.addEventListener(FILTER_EVENT, onPick);
    return () => window.removeEventListener(FILTER_EVENT, onPick);
  }, []);

  const counts = useMemo(
    () => Object.fromEntries(filters.map((f) => [f, products.filter((p) => matches(p.groups, f)).length])) as Record<Filter, number>,
    [],
  );
  const matched = products.filter((p) => matches(p.groups, filter));
  const limited = filter === "All" && !showAll && matched.length > FIRST_PRODUCTS;
  const shown = limited ? matched.slice(0, FIRST_PRODUCTS) : matched;

  return (
    <div className={`wrap ${s.catalog}`}>
      <div className={s.catalogHead}>
        <div className={s.catalogTitleWrap}>
          <p className="eyebrow" data-reveal="">
            On our shelves
          </p>
          <h3 className={s.catalogTitle} data-reveal="">
            Phones, tablets and more
          </h3>
        </div>
        <p className={s.catalogNote} data-reveal="">
          Prices change often, so we don’t list them here. Call us for today’s price and we’ll check it’s in stock.
        </p>
      </div>

      <div role="group" aria-label="Filter phones and tablets" className={`${s.tabs} ${s.tabsTight} ${s.scroller}`} data-reveal="">
        {filters.map((f) => (
          <button key={f} type="button" className={s.tab} aria-pressed={f === filter} onClick={() => setFilter(f)}>
            {f}
            <span className={s.count}>{counts[f]}</span>
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing {shown.length} of {matched.length} products
      </p>

      <ul ref={gridRef} className={`${s.grid} ${seen ? s.gridSeen : ""}`} key={filter}>
        {shown.map((p, i) => (
          <li
            key={p.full}
            className={s.card}
            style={{ "--i": Math.min(showAll && filter === "All" && i >= FIRST_PRODUCTS ? i - FIRST_PRODUCTS : i, 12) } as React.CSSProperties}
          >
            <div className={`frame frame--studio ${s.cardFrame}`}>
              <Image
                src={p.image}
                alt={p.alt ?? `Retail box of the ${p.full}`}
                fill
                placeholder="blur"
                sizes="(max-width: 560px) 46vw, (max-width: 1200px) 30vw, 18vw"
                className={s.cardImg}
                style={{ objectPosition: p.position ?? "50% 50%" }}
              />
            </div>
            <div className={s.cardText}>
              <p className={s.cardKicker}>{p.type ? `${p.brand} · ${p.type}` : p.brand}</p>
              <h4 className={s.cardName}>{p.name}</h4>
            </div>
            <a href={shop.phone.href} className={`link ${s.cardLink}`} aria-label={`Call Trust Island for today’s price on the ${p.full}`}>
              Call for today’s price
            </a>
          </li>
        ))}
      </ul>

      {limited ? (
        <button type="button" className={`btn btn--outline ${s.more}`} onClick={() => setShowAll(true)}>
          Show all {products.length} products
        </button>
      ) : null}

      <p className={s.fine}>Pictures show the retail boxes we stock. Colours and storage options vary, so ask us what’s available.</p>
    </div>
  );
}
