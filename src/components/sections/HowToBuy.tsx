import { shop, steps } from "@/content/site";
import { SplitWords } from "@/components/motion/SplitWords";
import s from "./sections.module.css";

export function HowToBuy() {
  return (
    <section id="how" className="section" aria-labelledby="how-title">
      <div className={`wrap ${s.stack}`}>
        <div className="section-head">
          <div className="section-head__main">
            <p className="eyebrow" data-reveal="">
              How to buy
            </p>
            <h2 id="how-title" className="h2" data-split="">
              <SplitWords text="Three steps from question to sealed box." />
            </h2>
          </div>
          <p className="section-head__aside" data-reveal="">
            Prices in Computer Village change often, so we don’t put them online. Call us and we’ll give you today’s price.
          </p>
        </div>

        <ol className={s.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={s.step}>
              <span className={s.stepRule} data-draw="" style={{ "--i": i } as React.CSSProperties} aria-hidden="true" />
              <span className={s.stepNum} data-reveal="" style={{ "--i": i } as React.CSSProperties} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={s.stepTitle} data-reveal="" style={{ "--i": i } as React.CSSProperties}>
                {step.title}
              </h3>
              <p className={s.stepBody} data-reveal="" style={{ "--i": i } as React.CSSProperties}>
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="btn-row" data-reveal="">
          <a href={shop.phone.href} className="btn">
            Call {shop.phone.display}
          </a>
          <a href={shop.phone2.href} className="btn btn--outline">
            Call {shop.phone2.display}
          </a>
        </div>
      </div>
    </section>
  );
}
