import Image from "next/image";
import { categories } from "@/content/site";
import { FilterLink } from "@/components/motion/FilterLink";
import { SplitWords } from "@/components/motion/SplitWords";
import { SwipeNav } from "@/components/motion/SwipeNav";
import s from "./sections.module.css";

export function Categories() {
  return (
    <section id="categories" className={s.categories} aria-labelledby="cat-title">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__main">
            <p className="eyebrow" data-reveal="">
              What we sell
            </p>
            <h2 id="cat-title" className="h2" data-split="">
              <SplitWords text="Power and phones, under one roof." />
            </h2>
          </div>
          <p className="section-head__aside" data-reveal="">
            Genuine itel Energy power products, and the phones and tablets people ask for most. Tap a category to jump to it.
          </p>
        </div>

        <div className={s.swipe}>
          <div className={s.cats}>
            {categories.map((c, i) => (
              <FilterLink
                key={c.name}
                href={c.href}
                filter={c.filter}
                className={s.cat}
                style={{ "--i": i } as React.CSSProperties}
                data-reveal=""
              >
                <span className={`frame ${c.studio ? "frame--studio" : ""} ${s.catFrame}`}>
                  <span data-zoom="">
                    <Image
                      src={c.image}
                      alt=""
                      fill
                      placeholder="blur"
                      sizes="(max-width: 560px) 45vw, (max-width: 1100px) 30vw, 16vw"
                      style={{ objectFit: "cover", objectPosition: c.position ?? "50% 50%" }}
                    />
                  </span>
                </span>
                <span className={s.catText}>
                  <span className={s.catNum}>{c.num}</span>
                  <span className={s.catName}>{c.name}</span>
                  <span className={s.catNote}>{c.note}</span>
                </span>
              </FilterLink>
            ))}
          </div>
          <SwipeNav label="Categories" />
        </div>
      </div>
    </section>
  );
}
