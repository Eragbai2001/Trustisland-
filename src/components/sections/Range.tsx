import Image from "next/image";
import { range, shop } from "@/content/site";
import { SplitWords } from "@/components/motion/SplitWords";
import { SwipeNav } from "@/components/motion/SwipeNav";
import { LookCloser } from "./LookCloser";
import s from "./sections.module.css";

export function Range() {
  return (
    <section id="range" className="section section--grey" aria-labelledby="range-title">
      <div className={`wrap ${s.stackWide}`}>
        <div className="section-head">
          <div className="section-head__main">
            <p className="eyebrow" data-reveal="">
              The range
            </p>
            <h2 id="range-title" className="h2" data-split="">
              <SplitWords text="The itel Energy range, in stock." />
            </h2>
          </div>
          <p className="section-head__aside" data-reveal="">
            From a power station you carry to a system that runs your whole home. Tell us what you need to power and we’ll match it.
          </p>
        </div>

        <div className={s.swipe}>
          <div className={`${s.range} ${s.scroller}`}>
            {range.map((item, i) => (
              <article key={item.name} className={s.rangeCard} data-reveal="" style={{ "--i": i % 3 } as React.CSSProperties}>
                <div className={`${s.rangeMedia} ${item.images.length > 1 ? s.rangeMediaSplit : ""}`}>
                  {item.images.map((img) => (
                    <div key={img.alt} className={`frame ${item.studio ? "frame--studio" : ""}`}>
                      <span data-zoom="">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          placeholder="blur"
                          sizes="(max-width: 560px) 82vw, (max-width: 860px) 46vw, 30vw"
                          style={{ objectFit: "cover", objectPosition: img.position ?? "50% 50%" }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
                <p className="kicker">{item.kicker}</p>
                <h3 className={s.rangeName}>{item.name}</h3>
                <dl className={s.specs}>
                  {item.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <a href={shop.phone.href} className="link" aria-label={`Call Trust Island for today’s price on the ${item.name}`}>
                  Call for today’s price
                </a>
              </article>
            ))}

            <article className={s.help} data-reveal="" style={{ "--i": 2 } as React.CSSProperties}>
              <div className={s.helpTop}>
                <p className="kicker">
                  <span className="dot" aria-hidden="true" />
                  Help choosing
                </p>
                <h3 className={s.helpTitle}>Not sure which one you need?</h3>
                <p className={s.helpBody}>
                  Tell us what you want to keep running, and for how long. We’ll match the right product, size it for you and give you
                  today’s price.
                </p>
              </div>
              <div className={s.helpCtas}>
                <a href={shop.phone.href} className="btn">
                  Call {shop.phone.display}
                </a>
                <a href={shop.phone2.href} className="btn btn--outline">
                  Call {shop.phone2.display}
                </a>
              </div>
            </article>
          </div>
          <SwipeNav label="The itel Energy range" />
        </div>

        <LookCloser />
      </div>
    </section>
  );
}
