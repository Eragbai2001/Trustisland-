import Image from "next/image";
import { gallery, why } from "@/content/site";
import { SplitWords } from "@/components/motion/SplitWords";
import { SwipeNav } from "@/components/motion/SwipeNav";
import s from "./sections.module.css";

export function Inside() {
  return (
    <section id="inside" className="section section--grey" aria-labelledby="inside-title">
      <div className={`wrap ${s.stackWide}`}>
        <div className="section-head">
          <div className="section-head__main">
            <p className="eyebrow" data-reveal="">
              Inside the shop
            </p>
            <h2 id="inside-title" className="h2" data-split="">
              <SplitWords text="A real shop you can walk into." />
            </h2>
          </div>
          <p className="section-head__aside" data-reveal="">
            We’re on Adepele Street in Computer Village. Come in, see the power products working, and leave with a sealed box.
          </p>
        </div>

        <div className={s.swipe}>
          <div className={`${s.gallery} ${s.scroller}`}>
            {gallery.map((g, i) => (
              <figure key={g.caption} className={`frame ${s.shot}`} data-wipe="" style={{ "--i": i } as React.CSSProperties}>
                <div data-parallax="">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    placeholder="blur"
                    sizes={i === 0 ? "(max-width: 860px) 78vw, 40vw" : "(max-width: 860px) 78vw, 28vw"}
                    style={{ objectFit: "cover", objectPosition: g.position }}
                  />
                </div>
                <figcaption className={s.shotCaption}>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
          <SwipeNav label="Inside the shop" />
        </div>

        <div className={s.why}>
          <span className={s.whyRule} data-draw="" aria-hidden="true" />
          {why.map((w, i) => (
            <div key={w.title} className={s.whyItem} data-reveal="" style={{ "--i": i } as React.CSSProperties}>
              <p className="kicker">
                <span className="dot" aria-hidden="true" />0{i + 1}
              </p>
              <h3 className={s.whyTitle}>{w.title}</h3>
              <p className={s.whyBody}>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
